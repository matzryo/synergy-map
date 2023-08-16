import { server } from "../src/server";
import { describe, expect, test, it, afterAll, beforeAll } from "@jest/globals";
import { assert } from "console";
import fetch from "node-fetch";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { request } from "@matzryo/synergy-map-libraries";
import { Scalars } from "../src/generated/types";
import { Response } from "node-fetch";

type NonEmptyArray<T> = [T, ...T[]];

/**
 * カード二枚(テストデータ)を投入する
 *
 * @returns {Object} GraphQL ServerからのResponseをjsonメソッドでObject化したもの
 *
 */
const addTwoCards = async () => {
  const query = `
mutation addTwoCard($input: [AddMtgCardInput!]!) {
  addMtgCard(
    input: $input
  ) {
    mtgCard {
      id
      nameEn
    }
  }
}
`;

  const variables = {
    input: [
      {
        nameEn: "Test Card Names",
        nameJa: "闇の剣士が走る",
        imageUrlEn:
          "https://cards.scryfall.io/small/front/1/f/1f0d2e8e-c8f2-4b31-a6ba-6283fc8740d4.jpg?1562433485",
        colors: ["WHITE"],
        rarity: "COMMON",
        setcode: "ONE",
        collectorNumber: "1/001",
      },
      {
        nameEn: "Test Card Naming",
        nameJa: "闇の戦士が走った",
        imageUrlEn:
          "https://cards.scryfall.io/small/front/9/e/9ea8179a-d3c9-4cdc-a5b5-68cc73279050.jpg?1562433485",
        colors: ["WHITE"],
        rarity: "COMMON",
        setcode: "ONE",
        collectorNumber: "1/002",
      },
    ],
  };

  let addedCards, response: Response;
  try {
    response = await request({
      query,
      variables,
      graphqlApiUrl: "http://alpha:8080/graphql",
    });
    addedCards = await response.json();
    // 投入データが不正なとき
    if (addedCards.hasOwnProperty("errors")) {
      const joinedErrorMessage = addedCards.errors
        ?.map((e) => e.message)
        .join("\n");
      throw new Error(`coudn't recorded: ${joinedErrorMessage}`);
    }
  } catch (err) {
    console.log(`error occured: ${err}`);
    throw err;
  }

  return addedCards;
};

/**
 * (作成済みの)二枚のカードの、テスト用シナジーデータを作成する
 *
 * @returns {Object} GraphQL ServerからのResponseをjsonメソッドでObject化したもの
 */
const addSynergy = async (ids: NonEmptyArray<Scalars["ID"]>) => {
  const query = `
  mutation addSynergy($input: [AddSynergyInput!]!) {
    addSynergy(input: $input) {
      synergy {
        id
        explanationEn
      }
    }
  }`;

  const variables = {
    input: [
      {
        cards: ids.map((id) => ({ id })),
        weight: 1,
        explanationJa: "戦場出たとき誘発",
        explanationEn: "ETB",
      },
    ],
  };

  let addedSynergy, response: Response;
  try {
    response = await request({
      query,
      variables,
      graphqlApiUrl: "http://alpha:8080/graphql",
    });
    addedSynergy = await response.json();
    // 投入データが不正なとき
    if (addedSynergy.hasOwnProperty("errors")) {
      const joinedErrorMessage = addedSynergy.errors
        ?.map((e) => e.message)
        .join("\n");
      throw new Error(`coudn't recorded: ${joinedErrorMessage}`);
    }
  } catch (err) {
    console.log(`error occured: ${err}`);
    throw err;
  }

  return addedSynergy;
};

describe("カード検索", () => {
  // スキーマ投入
  // curl -X POST localhost:8081/admin/schema --data-binary '@schema.graphql' 相当
  beforeAll(async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // TODO ここでschema.graphqlを読み込んでいるが、同じファイルがlibs/db-maniplationにもあるので、読み込み先を統一したい。
    // libs/db-maniplationにあるschema.graphqlを読み込みにいかないのは、Dockerコンテナでlibs以下のファイルを管理していないため。
    const schemaPath = path.resolve(__dirname, "../schemas/schema.graphql");
    const schema = fs.readFileSync(schemaPath);

    const url = "http://alpha:8080/admin/schema";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: schema,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to set Dgraph schema: ${response.statusText}`);
    }

    console.log("Dgraph schema set successfully");

    // カード、スキーマデータ投入
    const addedCardsResponse = await addTwoCards();

    const cardIds = addedCardsResponse.data.addMtgCard.mtgCard.map((card) => {
      return card.id
    });
    // await addSynergy(cardIds);
  });

  it("空文字を渡したときはエラーが返る", () => {});
  it("一致しないカードは返ってこない", () => {});
  it("名前が部分一致するカードが返ってくる", () => {});

  it("returns hello with the provided name", async () => {
    const response = await server.executeOperation({
      query: `query ExampleQuery($searchString: String!) {
        SearchMtgCard(searchString: $searchString) {
          id
          nameEn
          nameJa
        }
      }`,
      variables: { searchString: "闇の" },
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === "single");
    assert(response.body);
    if ("singleResult" in response.body) {
      expect(response.body.singleResult.errors).toBeUndefined();
      expect(response.body.singleResult.data?.SearchMtgCard).toHaveLength(2);
    }

  });

  // データ削除
  afterAll(async () => {
    const url = "http://alpha:8080/alter";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drop_op: "DATA",
      }),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Dgraph cleanup failed: ${response.statusText}`);
    }

    console.log("Cleaned up Dgraph data");
  });
});

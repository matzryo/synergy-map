import { request } from "../requests/query-to-dgraph-graphql-api.js"

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

  let addedCards, response;
  try {
    response = await request({ query, variables });
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
const addSynergy = async (ids) => {
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

  let addedSynergy, response;
  try {
    response = await request({ query, variables });
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

const addedCardsResponse = await addTwoCards();
console.log(addedCardsResponse);

const cardIds = addedCardsResponse.data.addMtgCard.mtgCard.map(
  (card) => card.id
);
console.log(await addSynergy(cardIds));

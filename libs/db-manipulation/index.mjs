/**
 * バックエンド GraphQL API に問い合わせを行う
 * 
 * 現状はローカル開発サーバー決め打ち
 * 
 * @param {string} query GraphQLクエリ。
 * @param {Object} variables クエリ変数。
 * @returns {Promise<Response>} GraphQL ServerからのResponse
 */
const request = (query, variables = {}) => {
  const graphqlApiUrl = "http://localhost:8080/graphql";

  return fetch(graphqlApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
};

/**
 * カード二枚(テストデータ)を投入する
 * 
 * @returns {Object} GraphQL ServerからのResponseをjsonメソッドでObject化したもの
 * 
 */
const addTwoCards = async () => {
  const addTwoCardsQuery = `
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

  const addTwoCardsVariables = {
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
    response = await request(addTwoCardsQuery, addTwoCardsVariables);
    addedCards = await response.json();
    // 投入データが不正なとき
    if (addedCards.hasOwnProperty("errors")) {
      const joinedErrorMessage = addedCards.errors?.map(e => e.message).join("\n");
      throw new Error(`coudn't recorded: ${joinedErrorMessage}`)
    }
  } catch (err) {
    console.log(`error occured: ${err}`)
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
  const addSynergyQuery = `
  mutation addSynergy($input: [AddSynergyInput!]!) {
    addSynergy(input: $input) {
      synergy {
        id
        explanationEn
      }
    }
  }`;

  const addSynergyVariables = {
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
    response = await request(addSynergyQuery, addSynergyVariables);
    addedSynergy = await response.json();
    // 投入データが不正なとき
    if (addedSynergy.hasOwnProperty("errors")) {
      const joinedErrorMessage = addedSynergy.errors?.map(e => e.message).join("\n");
      throw new Error(`coudn't recorded: ${joinedErrorMessage}`)
    }
  } catch (err) {
    console.log(`error occured: ${err}`)
    throw err;
  }

  return addedSynergy;
};

const addedCardsResponse = await addTwoCards();
console.log(addedCardsResponse);

const cardIds = addedCardsResponse.data.addMtgCard.mtgCard.map((card) => card.id);
console.log(await addSynergy(cardIds));

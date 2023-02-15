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
 * @returns {Promise<Response>} GraphQL ServerからのResponse
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

  const data = await request(addTwoCardsQuery, addTwoCardsVariables);

  console.log("data returned:", data);

  data.data.addMtgCard.mtgCard.forEach(console.log);

  return data;
};

/**
 * (作成済みの)二枚のカードの、テスト用シナジーデータを作成する
 * 
 * @returns {Promise<Response>} GraphQL ServerからのResponse
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
  const data = await request(addSynergyQuery, addSynergyVariables);

  console.log("data returned:", data);

  data.data.addSynergy.synergy.forEach(console.log);

  return data;
};

const responseData = await addTwoCards();

// const cardIds = responseData.data.addMtgCard.mtgCard.map((card) => card.ID);
// addSynergy(cardIds);

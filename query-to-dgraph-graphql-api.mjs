
/**
 * バックエンド GraphQL API に問い合わせを行う
 *
 * 現状はローカル開発サーバー決め打ち
 *
 * @param {string} query GraphQLクエリ。
 * @param {Object} variables クエリ変数。
 * @param {string} graphqlApiUrl ポスト先のAPI。
 * @returns {Promise<Response>} GraphQL ServerからのResponse
 */
const request = ({
  query,
  variables = {},
  graphqlApiUrl = "http://localhost:8080/graphql",
}) => {
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

export { request };

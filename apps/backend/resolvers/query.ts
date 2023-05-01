import { Resolvers, Color, Rarity } from '../src/generated/types.js';
import { request } from '../../../libs/requests/query-to-dgraph-graphql-api.js';
// import type { request } from '../../../libs/requests/query-to-dgraph-graphql-api.d';
import { Response } from 'node-fetch'; // node-fetchを使う場合の例

// export const mtgCardResolvers  = {
//   Query: {
//     queryMtgCard: 
    // queryMtgCard: async (parent: any, args: any, context: any, info: any): Promise<MtgCard> => {
    //   return getUserById(args.id);
    // },
//   },
// };

// declare function request(query: string, variables: Object, graphqlApiUrl: string): Promise<Response>;

export const mtgCardResolvers: Resolvers = {
  Query: {
    queryMtgCard: async () => {
      return [{
        id: "3",
        nameEn: "hello",
        collectorNumber: "1",
        colors: [Color.White],
        imageUrlEn: "https://example.com/hoge.jpg",
        rarity: Rarity.Rare,
        setcode: "ONE"
      }]
    },
  }
}

// async function getUserById(id: string): Promise<User> {
//   // ユーザーに関連するデータ取得ロジック
//   // 以下はダミーデータを返す例
//   return {
//     id: '1',
//     name: 'John Doe',
//     age: 30,
//   };
// }

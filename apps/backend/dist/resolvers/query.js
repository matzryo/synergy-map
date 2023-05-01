import { Color, Rarity } from '../src/generated/types';
// export const mtgCardResolvers  = {
//   Query: {
//     queryMtgCard: 
// queryMtgCard: async (parent: any, args: any, context: any, info: any): Promise<MtgCard> => {
//   return getUserById(args.id);
// },
//   },
// };
export const mtgCardResolvers = {
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
                }];
        }
    }
};
// async function getUserById(id: string): Promise<User> {
//   // ユーザーに関連するデータ取得ロジック
//   // 以下はダミーデータを返す例
//   return {
//     id: '1',
//     name: 'John Doe',
//     age: 30,
//   };
// }

import { Resolvers } from "../src/generated/types.js";
import { request } from "@matzryo/synergy-map-libraries";
import { Response } from "node-fetch"; // node-fetchを使う場合の例
import { gql } from 'graphql-tag';
import { print } from "graphql";

export const mtgCardResolvers: Resolvers = {
  Query: {
    SearchMtgCard: async (
      _root: any,
      { searchString }: { searchString: string }
    ) => {
      const regex = `/.*${searchString}.*/`;
      const query = gql`query SearchMtgCards($searchString: String!) {
        queryMtgCard(filter: {
          or: [
            {nameJa: {regexp: $searchString}},
            {nameEn: {regexp: $searchString}}
          ]
        }) {
          id
          nameJa
          nameEn
          collectorNumber
          colors
          imageUrlEn
          rarity
          setcode
        }
      }`;
      const variables = { searchString: regex };
      const graphqlApiUrl = "http://alpha:8080/graphql";
      let response: Response;
      try {
        response = await request({ query: print(query), variables, graphqlApiUrl });
        const data = await response.json();
        return data.data.queryMtgCard;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

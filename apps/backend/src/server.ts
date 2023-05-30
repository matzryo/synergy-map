import path from "path";
import { ApolloServer } from "@apollo/server";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { fileURLToPath } from "url";
import { mtgCardResolvers } from "../resolvers/query.js";

// apps/backend/schemas/*.graphql をスキーマとして読み込む
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schemaPath = path.join(__dirname, "../schemas/*.graphql");
const typesArray = loadFilesSync<string>(schemaPath);
const mergedTypeDefs = mergeTypeDefs(typesArray);

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  ...mtgCardResolvers,
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers,
});

export { server };

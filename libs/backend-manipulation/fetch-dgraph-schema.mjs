import { request } from "../requests/query-to-dgraph-graphql-api.mjs";
import { writeFileSync } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const fetchGQLSchema = async () => {
  const query = `
query {
    getGQLSchema {
      generatedSchema
    }
}
`;

  const graphqlApiUrl = "http://localhost:8080/admin";

  let json, response;
  try {
    response = await request({ query, graphqlApiUrl });
    json = await response.json();
    // 投入データが不正なとき
    if (json.hasOwnProperty("errors")) {
      const joinedErrorMessage = addedCards.errors
        ?.map((e) => e.message)
        .join("\n");
      throw new Error(`coudn't recorded: ${joinedErrorMessage}`);
    }
  } catch (err) {
    console.log(`error occured: ${err}`);
    throw err;
  }
  return json.data.getGQLSchema.generatedSchema;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schema = await fetchGQLSchema();

try {
  writeFileSync(
    path.join(
      __dirname,
      "..",
      "..",
      "apps",
      "backend",
      "src",
      "dgraph-schema.graphql"
    ),
    schema
  );
} catch (err) {
  console.log(err);
}

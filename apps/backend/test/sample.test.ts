import { server } from "../src/server";
import { describe, expect, test, it } from "@jest/globals";
import { assert } from "console";

function sum(a: number, b: number): number {
  return a + b;
}
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("空文字を渡したときはエラーが返る", () => {});
it("一致しないカードは返ってこない", () => {});
it("名前が部分一致するカードが返ってくる", () => {});

it('returns hello with the provided name', async () => {
  const response = await server.executeOperation({
    query: `query ExampleQuery($searchString: String!) {
      SearchMtgCard(searchString: $searchString) {
        id
        nameEn
        nameJa
      }
    }`,
    variables: { searchString: '闇の' },
  });

  // Note the use of Node's assert rather than Jest's expect; if using
  // TypeScript, `assert`` will appropriately narrow the type of `body`
  // and `expect` will not.
  assert(response.body.kind === 'single');
  if (response.body.kind === 'single') {
    console.log(response.body.singleResult);
  }
  assert(response.body)
  if ('singleResult' in response.body) {
    expect(response.body.singleResult.errors).toBeUndefined();
    // expect(response.body.singleResult.data?.SearchMtgCard).toHaveLength(3);
  }
    // expect(response.body.singleResult).toBe('single');
  // expect(response.body.singleResult.errors).toBeUndefined();
  // expect(response.body.singleResult.data?.hello).toBe('Hello world!');
});

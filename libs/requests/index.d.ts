import { Response } from 'node-fetch';
export function request(query: string, variables: Object, graphqlApiUrl: string): Promise<Response>;
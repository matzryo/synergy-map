import { Response } from 'node-fetch';
type RequestOpts = {
    query: string,
    variables?: Record<string, any>,
    graphqlApiUrl?: string
}
export function request({query, variables, graphqlApiUrl}: RequestOpts): Promise<Response>;
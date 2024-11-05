import { Api } from './api-functions';
export type Config = {
    apiKey: string | null | undefined;
    decodeKey: string | null | undefined;
    debug: boolean | undefined;
};
declare function api(serverUrl: string, { apiKey, decodeKey, debug }: Config): Promise<Api>;
export { api };
export default api;

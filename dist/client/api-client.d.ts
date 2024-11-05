declare function getApiClient({ serverRootUrl, apiBaseUri, apiKey, decodeKey }: {
    serverRootUrl: any;
    apiBaseUri: any;
    apiKey: any;
    decodeKey: any;
}): {
    get: any;
    post: any;
    put: any;
    del: any;
};
export { getApiClient };
export default getApiClient;

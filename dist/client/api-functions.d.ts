export type Api = {
    [key: string]: Function;
};
declare function getApiFunctions(descriptor: any, { get, post, put, del }: {
    get: any;
    post: any;
    put: any;
    del: any;
}, { debug }: {
    debug?: boolean;
}): Api;
export { getApiFunctions };
export default getApiFunctions;

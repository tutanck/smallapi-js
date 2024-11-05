declare function getFunction({ uri, name, verb }: {
    uri: any;
    name: any;
    verb: any;
}, { get, post, put, del }: {
    get: any;
    post: any;
    put: any;
    del: any;
}, { debug, fnName }: {
    debug?: boolean;
    fnName: any;
}): ((id: string, projection?: object | string | Array<string> | undefined, options?: object | undefined) => Promise<object>) | ((filter: object, options?: object | undefined) => Promise<any | object>) | ((filter: object, update: object, options?: object | undefined) => Promise<any | object>);
export { getFunction };
export default getFunction;

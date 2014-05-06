///<reference path='../../_app.ts' />

module TacZ {
    export module Service {
        export class Proxy implements TacZ.Interface.Service.IProxy{
            public Func(context: any, func: Function): () => any {
                return () => {
                    return func.apply(context, arguments);
                }
            }
        }
    }
}

angular.module("TacZ").service("ProxyService",TacZ.Service.Proxy);
///<reference path='../../app.ts' />
module TacZ {
    export module Interface {
        export module Service {
            export interface IProxy {
                Func(context:any, func:Function): () => any
            }
        }
    }
}
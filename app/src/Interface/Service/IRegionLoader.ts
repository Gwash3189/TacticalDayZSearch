///<reference path='../../app.ts' />

module TacZ{
    export module Interface{
        export module Service{
            export interface IRegionLoader{
                Get(region: string): ng.IPromise<any>;
            }
        }
    }
}
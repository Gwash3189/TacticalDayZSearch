///<reference path="../../../_app.ts" />

module TacZ {
    export module Interface {
        export module RegionLoader {
            export interface IRegionLoader {
                Get: (region: string) => ng.IPromise<TacZ.Interface.Model.IRegion>;
            }
        }

    }
}
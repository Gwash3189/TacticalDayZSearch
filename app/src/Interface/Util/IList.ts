///<reference path="../../../_app.ts" />

module TacZ {
    export module Interface {
        export module Util {
            export interface IList<T> {
                Items: Array<T>;
                Push: (item: T) => void;
                Remove: (prop: string, value: any) => number;
                RemoveBy: (callback: (obj:T) => boolean) => number;
                GetIndex: (prop: string, value: any) => number;
                GetIndexBy: (callback: (obj:T) => boolean) => number;
                Search: (prop: string, value: any) => IList<T>;
                SearchBy: (callback: (obj:T)=>boolean) => IList<T>;
                GetItemAtIndex: (index: number) => T;
            }
        }

    }
}
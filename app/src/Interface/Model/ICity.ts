///<reference path="../../../_app.ts" />

module TacZ {
    export module Interface {
        export module Model {
            export interface ICity extends IModel{
                Buildings: TacZ.Interface.Util.IList<IBuilding>;
                Name: string;
                Description: string;
                GetId: () => number;
            }
        }
    }
}
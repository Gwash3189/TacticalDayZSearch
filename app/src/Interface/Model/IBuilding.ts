///<reference path="../../../_app.ts" />

module TacZ {
    export module Interface {
        export module Model {
            export interface IBuilding extends IModel {
                Name: string;
                Description: string;
                GetId: () => number;
            }
        }
    }
}
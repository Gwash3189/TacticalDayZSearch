///<reference path="../../../_app.ts" />

module TacZ {
    export module Interface {
        export module Model {
            export interface IBuilding {
                Name: string;
                Description: string;
                GetId: () => number;
            }
        }
    }
}
/// <reference path="../../app.ts" />

module TacZ {
    export module Interface{
        export module Model {
            export interface IValidatable{
                Validate: (info: any) => boolean
            }
        }
    }
}
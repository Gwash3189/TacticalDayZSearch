///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Building implements TacZ.Interface.Model.IBuilding{
            constructor(public Name:string, public Description:string, private Id: number) {
            }

            public GetId() {
                return this.Id;
            }
        }
    }
}

///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Building extends TacZ.Model.Base implements TacZ.Interface.Model.IBuilding {
            public Name:string = "";
            public Description:string = "";
            private Id:number = -1;

            constructor() {
                super();
            }


            public GetId() {
                return this.Id;
            }
        }
    }
}

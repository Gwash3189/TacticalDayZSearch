///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class City extends TacZ.Model.Base implements TacZ.Interface.Model.ICity {
            public Name:string = "";
            public Description:string = "";
            public Buildings:TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>
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
///<reference path='../../_app.ts' />

module TacZ {
    export module Model{
        export class City implements TacZ.Interface.Model.ICity{
            constructor(public Name: string, public Description: string, public Buildings :TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>, private Id: number){}
            public GetId(){
                return this.Id;
            }
        }
    }
}
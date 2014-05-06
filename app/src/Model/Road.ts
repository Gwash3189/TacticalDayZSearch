///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Road implements TacZ.Interface.Model.IRoad {
            constructor(public Name:string, public Description:string, public Buildings:TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>, private Id:number) {
            }
        }
    }
}
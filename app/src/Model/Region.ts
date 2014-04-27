///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Region implements TacZ.Interface.Model.IRegion {
            constructor(private Id:string,
                        public Cities:TacZ.Interface.Util.IList<TacZ.Interface.Model.ICity>,
                        public Buildings:TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>,
                        public Roads:TacZ.Interface.Util.IList<TacZ.Interface.Model.IRoad>,
                        public Name:string,
                        public Description:string,
                        public ImgLocation: string) {
            }
        }
    }
}
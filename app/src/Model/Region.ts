///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Region extends TacZ.Model.Base implements TacZ.Interface.Model.IRegion {

            private Id = "";
            public Cities = new TacZ.Util.List<TacZ.Interface.Model.ICity>();
            public Buildings = new TacZ.Util.List<TacZ.Interface.Model.IBuilding>();
            public Roads = new TacZ.Util.List<TacZ.Interface.Model.IRoad>();
            public Name = "";
            public Description = "";
            public Image = new TacZ.Model.TacImage();

            constructor(Name?:string, Id?:string) {
                super();
                this.Name = Name;
                this.Id = Id;
            }

            public GetId() {
                return this.Id;
            }

            public SetId(id:string) {
                this.Id = id;
            }
        }
    }
}
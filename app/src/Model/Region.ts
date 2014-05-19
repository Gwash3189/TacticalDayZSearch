///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Region extends TacZ.Model.Base implements TacZ.Interface.Model.IRegion {

            private Id = TacZ.Util.String.Empty;
            public Cities = new TacZ.Util.List<TacZ.Interface.Model.ICity>();
            public Buildings = new TacZ.Util.List<TacZ.Interface.Model.IBuilding>();
            public Roads = new TacZ.Util.List<TacZ.Interface.Model.IRoad>();
            public Name = TacZ.Util.String.Empty;
            public Description = TacZ.Util.String.Empty;
            public Image = new TacZ.Model.TacImage();

            constructor(Name?:string, Id?:string) {
                super();
                this.Name = Name || this.Name;
                this.Id = Id || this.Id;
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
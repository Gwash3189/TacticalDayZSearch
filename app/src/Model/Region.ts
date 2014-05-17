///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Region implements TacZ.Interface.Model.IRegion {

            private Id:string;
            public Cities:TacZ.Interface.Util.IList<TacZ.Interface.Model.ICity>;
            public Buildings:TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>;
            public Roads:TacZ.Interface.Util.IList<TacZ.Interface.Model.IRoad>;
            public Name:string;
            public Description:string;
            public Image: TacZ.Model.TacImage;

            constructor(Name?:string, Id?: string){
                this.Name = Name;
                this.Id = Id;
            }

            public Validate(obj:any):TacZ.Interface.Model.IRegion {
                if (obj.hasOwnProperty("Id") && obj.hasOwnProperty("Cities")
                    && obj.hasOwnProperty("Buildings") && obj.hasOwnProperty("Roads")
                    && obj.hasOwnProperty("Name") && obj.hasOwnProperty("Description")
                    && obj.hasOwnProperty("Image")) {
                    this.Id = obj.Id;
                    this.Cities = obj.Cities;
                    this.Buildings = obj.Buildings;
                    this.Roads = obj.Roads;
                    this.Name = obj.Name;
                    this.Description = obj.Description;
                    this.Image = new TacZ.Model.TacImage();
                }
                return this;
            }

            public GetId() {
                return this.Id;
            }

            public SetId(id: string) {
                this.Id = id;
            }
        }
    }
}
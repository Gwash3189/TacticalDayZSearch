///<reference path='../../_app.ts' />

module TacZ {
    export module Definition {
        export class RegionsDefinition{
            public List = new TacZ.Util.List<TacZ.Interface.Model.IRegion>();

            constructor(){
                this.List
                    .Push(this.CreateRegion("neaf"));
            }

            private CreateRegion(id:string){
                var region = new TacZ.Model.Region();
                region.SetId(id);
                return region;
            }
        }
    }
}
angular.module("TacZ").constant("RegionsDefinition", new TacZ.Definition.RegionsDefinition());

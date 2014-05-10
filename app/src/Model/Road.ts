///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Road extends TacZ.Model.Base implements TacZ.Interface.Model.IRoad {
            public Name = "";
            public Description = "";
            public Buildings = new TacZ.Util.List<TacZ.Interface.Model.IBuilding>();
            private Id = -1;

            constructor() {
                super()
            }
        }
    }
}
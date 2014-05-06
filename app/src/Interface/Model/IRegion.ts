///<reference path='../../../_app.ts' />

module TacZ {
    export module Interface {
        export module Model {
            export interface IRegion {
                GetId: () => string;
                SetId: (id: string) => void;
                Cities: TacZ.Interface.Util.IList<TacZ.Interface.Model.ICity>;
                Buildings: TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>;
                Roads:  TacZ.Interface.Util.IList<TacZ.Interface.Model.IRoad>;
                Name: string;
                Description: string;
                Image: TacZ.Model.TacImage;
                Validate: (obj: any) => IRegion
            }
        }
    }
}

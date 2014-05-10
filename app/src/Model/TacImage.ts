///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class TacImage extends Base implements TacZ.Interface.Model.ITacImage {
            public Image:HTMLImageElement;

            constructor() {
                super();
                this.Image = new Image();
            }
        }
    }
}
///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class TacImage implements TacZ.Interface.Model.ITacImage {
            public Image:HTMLImageElement;

            constructor() {
                this.Image = new Image();
            }
        }
    }
}
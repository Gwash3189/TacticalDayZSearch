/// <reference path="../../_app.ts" />

module TacZ {
    export module Model {
        export class State implements ng.ui.IState {
            public name:string;
            public templateUrl:string;
            public url:string;
            public controller:string;
            public resolve:any;
            private TemplateLocation = "Template";
            private TemplateFileExtension = ".html";
            private TemplateFilePathSeperator = "/";
            private ControllerSuffix = "Controller";

            constructor(Name:string, Route:string, resolve?) {
                this.name = Name;
                this.templateUrl = this.TemplateLocation + this.TemplateFilePathSeperator + this.name + this.TemplateFileExtension;
                this.url = Route;
                this.controller = this.MakeFirstLetterUpperCase(this.name);
                this.resolve = resolve;
            }

            private MakeFirstLetterUpperCase(thing:string) {
                return thing.substr(0, 1).toUpperCase() + thing.substr(1, thing.length) + this.ControllerSuffix;
            }

        }
    }
}
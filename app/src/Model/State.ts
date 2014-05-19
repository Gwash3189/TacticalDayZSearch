/// <reference path="../../_app.ts" />

module TacZ {
    export module Model {
        export class State implements ng.ui.IState {
            public name:string;
            public templateUrl:string;
            public url:string;
            public controller:string;
            public resolve:any;
            public parent:any;
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
                this.parent = this.GetParentFromName(this.name);
            }

            private GetParentFromName(name:string) {
                var result = name.split(".")[0];
                if (result === name) {
                    return undefined;
                }
                return result
            }

            private GetChildFromName(name:string) {
                var split = name.split(".");
                return split[split.length - 1]
            }

            private MakeFirstLetterUpperCase(name:string) {
                var controllerName = this.GetChildFromName(name)
                return controllerName.substr(0, 1).toUpperCase() + controllerName.substr(1, controllerName.length) + this.ControllerSuffix;
            }

        }
    }
}
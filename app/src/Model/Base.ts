///<reference path='../../_app.ts' />

module TacZ {
    export module Model {
        export class Base implements TacZ.Interface.Model.IModel {
            public Validate(info:any):boolean {
                var results = [];
                for (var key in info) {
                    if (key !== "constructor" && typeof info[key] !== "function") {
                        if (this.Evaluate && typeof this.Evaluate === "function") {
                            if (this.hasOwnProperty(key)) {
                                results.push(this.Evaluate(info, key));
                            } else {
                                results.push(false);
                            }
                        } else {
                            results.push(true);
                        }
                    }
                }
                return results.indexOf(false) <= -1;
            }

            public Assign(info:TacZ.Interface.Model.IModel) {
                for (var key in info) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = info[key];
                    }
                }
            }

            private Evaluate(objectToCompare, toComparekey) {
                if (objectToCompare[toComparekey] instanceof Array && this[toComparekey] instanceof Array) {
                    return true;
                }
                if (typeof this[toComparekey] === "object" && typeof objectToCompare[toComparekey] === "object") {
                    return this.Validate.call(this[toComparekey], objectToCompare[toComparekey]);
                }
                return typeof this[toComparekey] === typeof objectToCompare[toComparekey];

            }
        }
    }
}
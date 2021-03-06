///<reference path="../../_app.ts" />
module TacZ {
    export module Util {
        export class List<T> extends TacZ.Model.Base implements TacZ.Interface.Util.IList<T> {
            public Items = new Array<T>();

            constructor(list?:Array<T>) {
                super();
                if (list) {
                    this.Items = list;
                }
            }

            public Push(item:T) {
                this.Items.push(item);
                return this;
            }

            public PushRange(list:Array<T>) {
                this.Items.push.apply(this.Items, list);
            }

            public Remove(prop:string, value:any):number {
                var result = this.GetIndex(prop, value);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            }

            public RemoveBy(callback:(obj:T) => boolean) {
                var result = this.GetIndexBy(callback);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            }

            public GetIndex(prop:string, value:any) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (this.Items[i][prop] === value) {
                        return i;
                    }
                }
                return -1;
            }

            public GetIndexBy(callback:(obj:T) => boolean) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (callback(this.Items[i])) {
                        return i;
                    }
                }
                return -1;
            }

            public Search(prop:string, value:any):TacZ.Interface.Util.IList<T> {
                var tmp = new TacZ.Util.List<T>();
                this.Items.map((item:T) => {
                    if (item[prop] === value) {
                        tmp.Push(item);
                    }
                });
                return tmp;
            }

            public SearchBy(callback:(obj:T) => boolean):TacZ.Interface.Util.IList<T> {
                var tmp = new TacZ.Util.List<T>();
                this.Items.map((item:T) => {
                    if (callback(item)) {
                        tmp.Push(item);
                    }
                });
                return tmp;
            }

            public GetItemAtIndex(index:number):T {
                return this.Items[index];
            }
        }
    }
}
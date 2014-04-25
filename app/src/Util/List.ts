///<reference path="../../_app.ts" />
module TacZ {
    export module Util{
        export class List<T>{
            public Items: Array<T>;
            constructor(list?: Array<T>){
                if(list){
                    this.Items = list;
                }
                else{
                    this.Items = new Array<T>();
                }
            }

            public Push(item: T){
                this.Items.push(item);
            }

            public Remove(prop: string, value: any): number{
                var result = this.GetIndex(prop, value);
                if(result === -1){
                    return result;
                } else {
                    this.Items.splice(result,1);
                    return result;
                }
            }

            public RemoveBy(callback: (obj:T) => boolean){
                var result = this.GetIndexBy(callback);
                if(result === -1){
                    return result;
                } else {
                    this.Items.splice(result,1);
                    return result;
                }
            }

            private GetIndex(prop:string, value: any) {
                for(var i = 0; i < this.Items.length; i++){
                    if(this.Items[i][prop] === value){
                        return i;
                    }
                }
                return -1;
            }

            private GetIndexBy(callback: (obj:T) => boolean) {
                for(var i = 0; i < this.Items.length; i++){
                    if(callback(this.Items[i])){
                        return i;
                    }
                }
                return -1;
            }
        }
    }
}
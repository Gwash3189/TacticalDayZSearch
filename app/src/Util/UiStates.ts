///<reference path='../../_app.ts' />

module TacZ{
    export module States{
        export class States {
            public List = new TacZ.Util.List<TacZ.Model.State>();
            constructor(){
                this.List.Push(new TacZ.Model.State("root","Search/Search.html", "/"));
                this.List.Push(new TacZ.Model.State("results","Results/Results.html", "/results"));
            }
        }
    }
}
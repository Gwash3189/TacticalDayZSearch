var TacZ;
(function (TacZ) {
    (function (_States) {
        var States = (function () {
            function States() {
                this.List = new TacZ.Util.List();
                this.List.Push(new TacZ.Model.State("root", "Template/Search.html", "/", "SearchController"));
            }
            return States;
        })();
        _States.States = States;
    })(TacZ.States || (TacZ.States = {}));
    var States = TacZ.States;
})(TacZ || (TacZ = {}));
//# sourceMappingURL=UiStates.js.map

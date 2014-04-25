var TacZ;
(function (TacZ) {
    (function (Util) {
        var List = (function () {
            function List(list) {
                if (list) {
                    this.Items = list;
                } else {
                    this.Items = new Array();
                }
            }
            List.prototype.Push = function (item) {
                this.Items.push(item);
            };

            List.prototype.Remove = function (prop, value) {
                var result = this.GetIndex(prop, value);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            };

            List.prototype.RemoveBy = function (callback) {
                var result = this.GetIndexBy(callback);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            };

            List.prototype.GetIndex = function (prop, value) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (this.Items[i][prop] === value) {
                        return i;
                    }
                }
                return -1;
            };

            List.prototype.GetIndexBy = function (callback) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (callback(this.Items[i])) {
                        return i;
                    }
                }
                return -1;
            };
            return List;
        })();
        Util.List = List;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));

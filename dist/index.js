"use strict";
var ToolMaker = /** @class */ (function () {
    function ToolMaker(name, name2, price, downloadingCounts, dataFromTheSide) {
        this.name = name;
        this.name2 = name2;
        this.price = price;
        this.downloadingCounts = downloadingCounts;
        this.dataFromTheSide = dataFromTheSide;
    }
    return ToolMaker;
}());
var towardCss;
towardCss = new ToolMaker("string", "towardCss", 0, 100, "sideData");
console.log(towardCss);
var add = function (n1, n2) { return n1 + n2; };

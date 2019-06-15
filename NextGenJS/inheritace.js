var Person = /** @class */ (function () {
    function Person() {
        // name = "abdul"
        this.show = function () {
            console.log("this.name");
        };
    }
    return Person;
}());
var p = new Person();
p.show();

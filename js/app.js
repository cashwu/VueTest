/// <reference path="../typings/browser.d.ts" />
var model = {
    name: "cash",
    age: 10,
    friends: [
        { name: "bob", age: 10 },
        { name: "jane", age: 11 },
        { name: "anna", age: 12 }
    ]
};
var vue = new Vue({
    el: "#view",
    data: model,
    methods: {
        greet: function (e) {
            alert("Hello " + e.target.tagName);
        },
        greet2: function (msg) {
            alert(msg);
        },
        greet3: function (msg, event) {
            event.preventDefault();
            alert(msg);
            console.log(event);
        },
        reversMsg: function () {
            this.name = this.name.split("").reverse().join("");
        }
    }
});
//# sourceMappingURL=app.js.map
var nineEl = $("#nine");
var tenEl = $("#ten");
var elevenEl = $("#eleven");
var noonEl = $("#noon");
var oneEl = $("#one");
var twoEl = $("#two");
var threeEl = $("#three");
var fourEl = $("#four");
var fiveEl = $("#five");

var timeBlocks = {
    nine: "",
    ten: "",
    eleven: "",
    noon: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
}

if (localStorage !== null) {

    for (i = 0; i < timeBlocks.length; i++) {

    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks[i]));
        console.log(timeBlocks);
    }
}
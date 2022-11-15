"use strict";

require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
}
var promise = Promise.resolve();
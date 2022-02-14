function it(desc, fn) {
    try {
      fn();
      console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
    } catch (error) {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
      console.error(error);
    }
}

function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
}

document.getElementById("run-tests-button").addEventListener("click", function (){
    it("an input of 1000 should return an empty array", function (){
        assert(sumCheckWithArrayOfIndices(1000).length === 0);
    })
    it("an negative input is invalid and algorithm should return -1", function (){
        assert(sumCheckWithArrayOfIndices(-1) === -1);
    })
    it("a not numeric input is invalid and algorithm should return -1", function (){
        assert(sumCheckWithArrayOfIndices("e9") === -1);
    })
    it("the primary input of 139 should return two pairs (Nate Robinson [i = 332] with Brevin Knight [i = 226] and Mike Wilks [i = 416])", function () {
        let result = sumCheckWithArrayOfIndices(139);
        assert(result.length === 2 && result[0].player1 === 332);
    })
});

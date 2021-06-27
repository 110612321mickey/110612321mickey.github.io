// Init
let cAnswer = [];
let pGuess = function (str = "") {
    document.getElementById('p_guess').innerHTML = str;
};
let _renderMessage = [];
let renderMessage = function (str = "") {
    if (str) {
        _renderMessage.push(str);
    }
    let mes = "";
    for (let i = 0; i < _renderMessage.length; i++) {
        mes += `<p>${_renderMessage[i]}</p>`;
    }
    document.getElementById('game_message').innerHTML = mes;
}
// End init

let setAnswer = function () {
    cAnswer = [];
    for (let i = 0; i < 4; i++) {
        cAnswer.push(Math.floor(Math.random() * 10));
    }
    console.log("cAnswer: ", cAnswer);
}
setAnswer();

let guess = function () {
    let g = document.getElementById('p_guess').value;
    if (!g || !g.match(/\d{4}/) || g.length !== 4) {
        renderMessage("Please enter 4 digit number");
        pGuess();
        return;
    }
    let ans = cAnswer.slice();
    let count = { a: 0, b: 0 };
    let doubleCheck = { p: [], c: [] };
    for (let i = 0; i < 4; i++) {
        let v = ans.shift();
        // console.log("v: ", v);
        // console.log("g[i]: ", g[i]);
        if (parseInt(g[i]) === v) {
            count.a++;
        } else {
            doubleCheck.c.push(v);
            doubleCheck.p.push(g[i]);
        }
    }
    //   console.log("doubleCheck.c: ", doubleCheck.c);
    //   console.log("doubleCheck.p: ", doubleCheck.p);

    for (let i = 0; i < doubleCheck.p.length; i++) {
        for (let j = 0; j < doubleCheck.c.length; j++) {
            //   console.log("doubleCheck.c[j]: ", doubleCheck.c[j]);
            //   console.log("doubleCheck.p[i]: ", doubleCheck.p[i]);
            if (parseInt(doubleCheck.p[i]) === doubleCheck.c[j]) {
                doubleCheck.p.splice(i, 1);
                doubleCheck.c.splice(j, 1);
                (i -= 1), (j -= 1);
                count.b++;
                break;
            }
        }
    }
    renderMessage(`${g}:${count.a}A${count.b}B`);
    if (count.a === 4) {
        win();
    }
    pGuess();
}

let win = function () {
    renderMessage(`Answer is ${cAnswer}.`);
    renderMessage("You Win!");
}

document.getElementById('c_answer').addEventListener('click', guess);
document.getElementById('p_guess').addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        guess();
    }
})

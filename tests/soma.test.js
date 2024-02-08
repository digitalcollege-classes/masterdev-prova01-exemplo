const { log } = require("console");

const somar = require('../src/soma');

test('testa se a funcao obedece os requisitos', () => {
    log("===============================");

    log("10 + 10 = 20");
    expect(somar(10, 10)).toBe(20);


    log("1 + 3 = 4");
    expect(somar(1, 3)).toBe(4);


    log("5 + 5 = 10");
    expect(somar(5, 5)).toBe(10);

    log("===============================");

});



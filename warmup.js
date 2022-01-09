
'use strict';
/* eslint max-len: ["error", { "code": 200 }]*/


/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError('В аргументы переданы не числа');
    }

    return a + b;

}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение

    if (typeof(year) !== 'number') {
        throw new TypeError('В качестве года передано не число');
    }

    if (typeof(year) === 'number' && year < 0) {
        throw new RangeError('Отрицательное число');
    }

    return Math.floor(year / 100) + 1;

}


/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (typeof(hexColor) !== 'string') {
        throw new TypeError('Цвет передан не строкой');
    }
    if (hexColor.substring(0, 1) === '#') {
        hexColor = hexColor.substring(1);
    }
    // if (typeof(year) === 'number' && year < 0) {
    //     throw new RangeError('значения цвета выходят за пределы допустимых');
    // }  

    var rgbColor = [0, 0, 0];
    rgbColor[0] = parseInt(hexColor.substr(0, 2), 16);
    rgbColor[1] = parseInt(hexColor.substr(2, 2), 16);
    rgbColor[2] = parseInt(hexColor.substr(4, 2), 16);
    var rgbColorString = (`(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);
    // var rgbColorString = ('(' + rgbColor[0] + ', ' + rgbColor[1] + ', ' + rgbColor[2] + ')');

    return rgbColorString;
    // return ('(255, 255, 255)');
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    if (typeof(n) !== 'number') {
        throw new TypeError('В качестве положения в ряде передано не число');
    }
    if (Number.isInteger(n) === false || n < 0) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        curr = prev + curr;
        prev = curr - prev;
    }

    return prev;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    var newMatrix = [];
    for (var a = 0; a < matrix[1].length; a++) {
        newMatrix.push([]);
    }
    for (var i = 0; i < matrix[1].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }

    return newMatrix;

}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    // Ваше решение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // if (typeof(n) !== 'number') {
    //     throw new TypeError('В качестве положения в ряде передано не число');
    // }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Cистема счисления выходит за пределы значений [2, 36]');
    }
    let num = n.toString(targetNs);

    return num;
}

// /**
//  * Проверяет соответствие телефонного номера формату
//  * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
//  * @returns {Boolean} Если соответствует формату, то true, а иначе false
//  */
// function phoneProblem(phoneNumber) {
//     // Ваше решение
// }

// /**
//  * Определяет количество улыбающихся смайликов в строке
//  * @param {String} text Строка в которой производится поиск
//  * @throws {TypeError} Когда в качестве аргумента передаётся не строка
//  * @returns {Number} Количество улыбающихся смайликов в строке
//  */
// function smilesProblem(text) {
//     // Ваше решение
// }

// /**
//  * Определяет победителя в игре "Крестики-нолики"
//  * Тестами гарантируются корректные аргументы.
//  * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
//  * @returns {'x' | 'o' | 'draw'} Результат игры
//  */
// function ticTacToeProblem(field) {
//     // Ваше решение
// }

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem
};

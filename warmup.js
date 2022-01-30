'use strict';
/* eslint max-len: ["error", { "code": 200 }]*/
/* eslint max-depth: [2, 10]*/
/* eslint-disable complexity */

// eslint-disable-next-line no-console
console.log(phoneProblem('8-800-123-12-12'));

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
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
    if (typeof(hexColor) !== 'string') {
        throw new TypeError('Цвет передан не строкой');
    }
    if (hexColor.substring(0, 1) === '#') {
        hexColor = hexColor.substring(1);
    }
    if (hexColor.length !== 6) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }
    for (let i = 0; i < hexColor.length; i++) {
        if ((((hexColor[i] >= 'A' && hexColor[i] <= 'F') || (hexColor[i] >= '0' && hexColor[i] <= '9')) === false)) {
            throw new RangeError('Значения цвета выходят за пределы допустимых');
        }
    }
    let rgbColor = [0, 0, 0];
    rgbColor[0] = parseInt(hexColor.substr(0, 2), 16);
    rgbColor[1] = parseInt(hexColor.substr(2, 2), 16);
    rgbColor[2] = parseInt(hexColor.substr(4, 2), 16);
    let rgbColorString = (`(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);

    return rgbColorString;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
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
 * @throws {TypeError} Когда в в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    var newMatrix = [];
    for (let i = 0; i < matrix[1].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if ((Array.isArray(matrix) && Array.isArray(matrix[i]) && Array.isArray(matrix[i][j]) === false) === false) {
                throw new TypeError('В функцию передаётся не двумерный массив');
            }
        }
    }
    for (let i = 0; i < matrix[1].length; i++) {
        newMatrix.push([]);
    }
    for (let i = 0; i < matrix[1].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
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
    // Ваше решение 
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
        throw new TypeError('В аргументы переданы не числа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Cистема счисления выходит за пределы значений [2, 36]');
    }
    let num = n.toString(targetNs);

    return num;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    let reg = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return reg.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof(text) !== 'string') {
        throw new TypeError('В качестве аргумента передаётся не строка');
    }
    var quantity = text.split(':-)').length + text.split('(-:').length - 2;

    return quantity;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (check(field, 'x') || check(matrixProblem(field), 'x')) {
        return 'x';
    }
    if (check(field, 'o') || check(matrixProblem(field), 'o')) {
        return 'o';
    }

    return 'draw';
}

//  Проверка игрового поля на победу по горизонтали или диагонали
function check(matrix, pretendent) {
    let horWin = 0;
    let diagWin = 0;
    for (let i = 0; i < 3; i++) {
        horWin = 0;
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] === pretendent) {
                horWin = horWin + 1;
            }
            if (matrix[i][i] === pretendent && i === j) {
                diagWin = diagWin + 1;
            }
            if (horWin === 3 || diagWin === 3) {
                return true;
            }
        }
    }

    return false;
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};

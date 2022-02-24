'use strict';

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
    // eslint-disable-next-line no-console
    let regColor = /^#[A-Fa-f0-9]{6}$/;
    if (!regColor.test(hexColor)) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }

    hexColor = hexColor.substring(1);
    let rColor = parseInt(hexColor.substr(0, 2), 16);
    let gColor = parseInt(hexColor.substr(2, 2), 16);
    let bColor = parseInt(hexColor.substr(4, 2), 16);

    return (`(${rColor}, ${gColor}, ${bColor})`);
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
    matrix.forEach((fElement, i) => fElement.forEach(function (sElement, j) {
        if (!Array.isArray(matrix) && !Array.isArray(matrix[i]) && Array.isArray(matrix[i][j])) {
            throw new TypeError('В функцию передаётся не двумерный массив');
        }
    }));

    let newMatrix = matrix.map((fElement, i) => fElement.map((sElement, j) => matrix[j][i]));

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
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError('Телефонный номер задан не строкой');
    }
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

    for (let i = 0; i < 3; i++) {
        // Horizontal win
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        // Vertical Win
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
        }
    }
    // First diag win
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        return field[0][0];
    }
    // Second diag win
    if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[0][2];
    }

    return 'draw';
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

/////////////////////////////////////////////////////////////////////
//                 Mảng trong JavaScript                           //
/////////////////////////////////////////////////////////////////////

// Mang trong javascript duoc dinh nghia nhu sau
var a = [1,"2",true];
// Cac phan tu cua mang co the la cac kieu du lieu khac nhau


/*
    Tuong tac voi mang
*/

// Lay do dai mang
var colors = ['red', 'green', 'blue'];
console.log(colors.length); // 3

// Them mot phan tu vao cuoi mang
colors.push('pink');
console.log(colors);

// Them mot phan tu vao dau mang
colors.unshift('black');
console.log(colors);

// Xoa phan tu cuoi cung khoi mang
var el = colors.pop();
console.log(el);
console.log(colors);

// Xoa phan tu dau tien khoi mang
var el = colors.shift();
console.log(el);
console.log(colors);

// Doc them: https://www.javascripttutorial.net/javascript-array-splice/

/*
    Tuong tac voi cac phan tu cua mang
*/

// Tim 1 phan tu trong mang
// Array.indexOf(searchElement, fromIndex)
// return -1 neu phan tu searchElement khong xuat hien trong mang
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
// Doc them: https://www.javascripttutorial.net/javascript-array-indexof/

// Kiem tra 1 phan tu co thuoc mang hay khong
[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false
// Doc them: https://www.javascripttutorial.net/es-next/javascript-array-includes/


// Tim kiem mot phan tu thoa man dieu kien
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((e) => {e % 2 == 0}));
// Ngan gon hon
console.log(numbers.find(e => e % 2 == 0));
// Doc them: https://www.javascripttutorial.net/es6/javascript-array-find/

// Tim kiem vi tri (index) cua mot phan tu thoa man dieu kien
let ranks = [1, 5, 7, 8, 10, 7];
let index1 = ranks.findIndex(rank => rank === 7);
let index2 = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index1);
console.log(index2);
// Doc them: https://www.javascripttutorial.net/es6/javascript-array-findindex/


/*
    Bien doi mang
*/

// Sap xep mang
// Luu y: Mac dinh, co che sap xep cua ham .sort() la bien doi ve string, sau do so sanh
var numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);
// De sort theo do lon cua number; can truyen mot ham comparefunction vao nhu sau:
// array.sort(comparefunction)
var numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);

// Sap xep giam dan
var scores = [
    9, 80, 10, 20, 5, 70
];
// sort numbers in ascending order
scores.sort((a, b) => a - b);
console.log(scores);

// ForEach: Duyet qua tung phan tu
var rnks = ['A', 'B', 'C'];
rnks.forEach(function (e) {
    console.log(e);
});

// Concat: Ghep 2 mang khac nhau
let odds = [1,3,5];
let evens = [2,4,6];
// merge odds and evens array
let combined1 = odds.concat(evens);
// Hoac
let combined2 = [].concat(odds, evens);
// Kiem tra
console.log('Result 1:', combined1);
console.log('Result 2:', combined2);
console.log('Odds:', odds);

// Ghep cac phan tu thanh 1 chuoi
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
// Ghep voi ky tu ' ' o giua
const btnClass = cssClasses.join(' ');
console.log(btnClass);


/*
    Tham khao them: https://www.javascripttutorial.net/javascript-array-methods/
*/
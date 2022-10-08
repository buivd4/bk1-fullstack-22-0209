/*
    Function:
        - Định nghĩa
        - Function với giá trị trả về
        - Function với tham số
        - Các kiểu định nghĩa function thường gặp
*/

function ham(){
    let b=10;
    console.log(b);
}

// Call function
// ham()


function hamVoiDoiSo(a, b){
    console.log(a+b);
}

// Call function
// hamVoiDoiSo(1,2)

// var x=10
// var y=5
// Call function
// hamVoiDoiSo(x,y)

function hamVoiGiaTriTraVe(a,b){
    return a+b;
}

// Call function
// var c = hamVoiGiaTriTraVe(1,2);


// Declerative function
var hamKhaiBao = function (){
    console.log("Hello world!");
    return 1000;
}
// Call function
// var c = hamKhaiBao();


// Arrow function
var ham = () => {
    return 1000;
};

// Arrow function với arguments
var ham = (arg1, arg2) => {
    return 1000;
};
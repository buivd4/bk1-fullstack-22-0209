var output = []
function soChan(n){
    // Xu ly
    for(i=0; i<n; i++){
        if (i % 2 == 0){
            output.push(i);
        }
    }
}

// Nguyen thuy: int; str; boolean
// Doi tuong String(); Array(); HocSinh();
// reference // tham chieu
// hsA = new HocSinh();
// hsA.ten = "Nguyen van A"
// function doi_ten(a){
//      a.ten = "aBC";
//}
// doi_ten(hsA);
// console.log(hsA.ten)

// function increase(num){ num++;}
// var i = Int(10);
// increase(i);
// console.log(i)
soChan(100);
console.log(output);
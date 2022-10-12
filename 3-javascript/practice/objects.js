///////////////////////////////////////////////////////////////////////////
//                      Bài tập phần Đối tượng                           //
///////////////////////////////////////////////////////////////////////////

/*
    Cho 3 mảng:
        matHang = ["Book", "Pen", "Pencil", "Paper", "Board"];
        giaTri = [10000, 5000, 3000, 1000, 80000];
        soLuong = [1,3,4,6,7]

    Yêu cầu:
        * Định nghĩa lớp Product với các thuộc tính (sử dụng từ khoá class)
            - productName   (mặt hàng)
            - price         (giá trị)
            - amount        (số lượng)
            - totalPrice    (tổng giá thành)
        * Sử dụng 3 mảng đã cho để khởi tạo 5 đối tượng tương ứng
        * Viết hàm in ra các mặt hàng có giá trị lớn hơn 6000
        * Viết hàm in ra các mặt hàng có số lượng lớn hơn 5 và giá trị lớn hơn 3000
        * Tính tổng giá trị tất cả các mặt hàng, in ra màn hình
*/


class Product{
    constructor(productName, price, amt){
        this.productName = productName;
        this.price = price;
        this.amount = amt;
    }
    totalPrice(){
        return this.price * this.amount;
    }
}

matHang = ["Book", "Pen", "Pencil", "Paper", "Board"];
giaTri = [10000, 5000, 3000, 1000, 80000];
soLuong = [1,3,4,6,7];
var products = [];

/*
Cách 1:
*/
for(x in matHang){
    // 0 1 2 3 4
    var prod = new Product(matHang[x], giaTri[x], soLuong[x]);
    products.push(prod);
}

/*
Cách 2:
for(x of matHang){
    var prod = new Product(x, undefined, undefined);
    products.push(prod);
}

for(g in giaTri){
    products[g].price = giaTri[g];
}

for(s in soLuong){
    products[s].amount = soLuong[s];
}
*/

// Viết hàm in ra các mặt hàng có giá trị lớn hơn 6000
for(product of products){
    if (product.price > 6000){
        console.log(product.productName);
    }
}

// Viết hàm in ra các mặt hàng có số lượng lớn hơn 5 và giá trị lớn hơn 3000
for(product of products){
    if (product.amount > 5 && product.price>3000){
        console.log(product.productName);
    }
}

// Tính tổng giá trị tất cả các mặt hàng, in ra màn hình
var tong = 0;
for(product of products){
    tong = tong + product.totalPrice();
}
console.log(tong);
///////////////////////////////////////////////////////////////////////////
//                      Bài tập phần đối tượng                           //
///////////////////////////////////////////////////////////////////////////

/*
        Bài số 1:
            Tạo đối tượng Product với thuộc tính (-) và phương thức (+) như sau:
                - Tên
                - Số lượng
                - Giá thành
                - Nơi sản xuất
                + Tổng giá trị
            Bằng 3 cách:
                * Literal Object
                * Constructor function
                * Sử dụng class
*/

var product = {
    name: "sach",
    amount: 20,
    price: 50,
    producticon: "bkacad",
    total: function() {
        return this.amount * this.price;
    }
};
product.total();

// Tham số cho constructor function
function Product(name, amt, price, prodicon){
    // Bắt đầu khởi tạo các thuộc tính
    this.name = name;
    this.amount = amt;
    this.price = price;
    this.producticon = prodicon;
    // Khởi taọ phương thức tính tổng giá trị
    this.total = function(){
        return this.amount * this.price;
    }
}

// Khởi tạo các đối tượng từ Constructor function
var book = new Product("Book", 10, 10000, "BKACAD");
var pen = new Product("Pen", 20, 11000, "BKACAD");
var paper = new Product("Paper", 30, 5000, "BKACAD");


class Product{
    constructor(name, amt, price, prodicon){
        // Bắt đầu khởi tạo các thuộc tính
        this.name = name;
        this.amount = amt;
        this.price = price;
        this.producticon = prodicon;
    }
    // Khởi taọ phương thức tính tổng giá trị
    total(){
        return this.amount * this.price;
    }
}

// Khởi tạo các đối tượng từ Constructor function
var book = new Product("Book", 10, 10000, "BKACAD");
var pen = new Product("Pen", 20, 11000, "BKACAD");
var paper = new Product("Paper", 30, 5000, "BKACAD");

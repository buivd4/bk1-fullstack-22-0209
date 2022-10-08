/*
    Prototype là một đối tượng (object) dùng để tạo ra các đối tượng khác;
    Mục đích của prototype là tạo ra các đối tượng có cùng một hoặc nhiều thuộc tính, phương thức;
*/

function ConMeo(name){
    this.name = name;
    this.sound = function(){
        console.log("Meow");
    }
}

// Hoặc có thể sử dụng từ khoá class
class ConMeo{
    // Hàm khởi tạo
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log( this.name + " meow");
    }
    catchJerry(){
        
    }
}

// Tạo một đối tượng ConMeo
var tom = new ConMeo("Tom");
var buddy = new ConMeo("Buddy");

/*
 Thuộc tính prototype cho phép "đăng ký" thêm các thuộc tính cho Prototype đó
*/

ConMeo.prototype.scream = function (){
    console.log("Gruzz")
}
var tom = new ConMeo("Tom");
tom.scream()
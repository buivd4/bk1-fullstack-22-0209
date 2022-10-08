/*
Một đối tượng là một tập hợp các dữ liệu không có thứ tự, bao gồm các dữ liệu nguyên thuỷ, hàm hoặc các
đối tượng khác

Một đối tượng có 2 phần:
- Thuộc tính: là tập hợp các giá trị được định nghĩa theo cặp khoá - giá trị
- Phương thức: là tập hợp các hàm được định nghĩa theo cặp tên - hàm
*/
var tom = {
    name: "Tom",
    sound: function(){
        console.log("Meow");
    }
}

// Lấy thuộc tính của đối tượng
console.log(tom.name);
// Gọi phương thức của đối tượng;
tom.sound()


/*
    Một đối tượng có thể được thêm hoặc xoá thuộc tính/phương thức một cách linh hoạt
 */

// Thêm phương thức mới cho tom
tom.catchJerry = ()=>{
    console.log("Catch ya!");
}
tom.catchJerry();

var buddy = new ConMeo("Buddy");
buddy.catchJerry();
// buddy.catchJerry is not a function.

// Xoá phương thức của Tom
tom.catchJerry = null;
// Hoặc
delete tom.catchJerry;
// Xoá Tom (thường được thực hiện tự động bới compiler)
tom = null;
// Hoặc
delete tom



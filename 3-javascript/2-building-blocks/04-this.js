/*
Trong JavaScript, từ khoá this được sử dụng để trỏ đến một đối tượng. Đối tượng được trỏ tới
phụ thuộc vào việc this được gọi ở đâu và gọi như thế nào.

Một số trường hợp điển hình của việc sử dụng "this":
*/

/*
- Trong một phương thức của object, this trỏ tới object đó
*/
function HocSinh(ten, tuoi, lop){
    this.ten = ten;
    this.tuoi = tuoi;
    this.lop = lop;
    // In ra this de kiem tra
    console.log(this);
}

/*
- Khi được gọi ở chương trình chính, this trỏ tới global object - một giá trị đặc biệt - trỏ tới Window object
*/
console.log(this);

/*
- Khi được gọi trong một hàm, this trỏ tới global object hoặc undefined, tuỳ vào trình compiler
*/
function example(){
    console.log(this);
}

/*
- Trong một event, this trỏ tới element đang được xử lý
*/
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
/////////////////////////////////////////////////////////////////////
//                 Chuỗi trong JavaScript                          //
/////////////////////////////////////////////////////////////////////


// Chuỗi được đặt trong cặp dấu "" hoặc '' hoặc ``
var chuoi = "Day la chuoi";
var chuoi = 'Day cung la chuoi';
var chuoi = `Day cung la chuoi`;

// Khai báo chuỗi với đối tượng String
var chuoi = new String("Day cung la mot chuoi");

/*
    Thuộc tính: length
    Ý nghĩa: Trả về độ dài của chuỗi 
*/
console.log(chuoi.length);


/*
    Escape character
    Ý nghĩa: Đôi khi chuỗi chứa các dấu " hoặc ' bên trong, cần phải bổ sung
             một kí tự \ trước các dấu này để việc hiển thị được chính xác

    Code	Result	Description
    \'	    '	    Single quote
    \"	    "	    Double quote
    \\	    \	    Backslash
*/
var chuoi = 'Day cung \'dung\' la mot chuoi';

// Hoặc có thể đổi cặp dấu '' thành ""
var chuoi = "Day cung 'dung' la mot chuoi";


/*
    Một số ký tự đặc biệt
    Code	Result
    \b	    Backspace
    \f	    Form Feed
    \n	    New Line
    \r	    Carriage Return
    \t	    Horizontal Tabulator
    \v	    Vertical Tabulator
*/
var chuoi = "Xuong dong \n va tab ra mot \t chut";


/////////////////////////////////////////////////////////////////////
//               Một số hàm xử lý chuỗi cơ bản                     //
/////////////////////////////////////////////////////////////////////

/////////////////////       Cắt chuỗi      /////////////////////

//  Sử dụng slice
//      slice(start, end)
//      start:  bắt đầu cắt từ đâu
//      end:    kết thúc cắt ở đâu (lấy tới ký tự thứ end-1)
//  Ví dụ: lấy ra Banana
var str = "Apple, Banana, Kiwi";
var part = str.slice(7, 13);

// Nếu tham số là số âm, tính từ kết thúc của dãy
var str = "Apple, Banana, Kiwi";
var part = str.slice(-12, -6);

// Nếu chỉ truyền 1 tham số, tham số đó được coi là start và sẽ lấy từ start đến hết chuỗi
var part = str.slice(7);
var part = str.slice(-12);


// Sử dụng substring
//      substring(start, length)
//      start:  bắt đầu cắt từ đâu
//      length: lấy bao nhiêu ký tự
var str = "Apple, Banana, Kiwi";
var part = str.substring(7, 6);


/////////////////////       Thay thế đoạn văn bản      /////////////////////

// Sử dụng replace
//      replace(specified_value, target_value)
//      specified_value:    giá trị cần được thay
//      target_value:       giá trị mới
// Lưu ý:
//      mặc định replace chỉ thay thế lần xuất hiện đầu tiên của specified_value
//      các ký tự viết hoa/thường sẽ ảnh hưởng đến hoạt động của hàm replace
//      specified_value có thể là một regex expression (biểu thức chính quy)
var text = "Please visit Microsoft!";
var newText = text.replace("Microsoft", "BKACAD");

// Trường hợp không thay thế được vì in hoa
var text = "Please visit Microsoft!";
var newText = text.replace("MICROSOFT", "W3Schools");

// Biểu thức chính quy
var text = "Please visit Microsoft and Microsoft!";
var newText = text.replace(/Microsoft/g, "W3Schools");


/////////////////////       Biến đổi văn bản      /////////////////////

// In hoa
var text1 = "Hello World!";
var text2 = text1.toUpperCase();

// In thường
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// Ghép chuỗi
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// Có thể ghép chuỗi bằng phép cộng
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


// Xoá bỏ các khoảng trắng ở hai phía của chuỗi
var text1 = "      Hello World!      ";
var text2 = text1.trim();

// Hoặc chỉ đầu hoặc cuối
var text1 = "     Hello World!     ";
var text2 = text1.trimStart();

var text1 = "     Hello World!     ";
var text2 = text1.trimEnd();


// Bổ sung ký tự vào đầu hoặc cuối
var text = "5";
var padded = text.padStart(4,"x");

var text = "5";
var padded = text.padEnd(4,"x");


/////////////////////       Lấy chuỗi con      /////////////////////

// Lấy ký tự tại vị trí
var text = "HELLO WORLD";
var char = text.charAt(0);
var char = text.charAt(2);
var char = text.charAt(4);
// Hoặc
var text = "HELLO WORLD";
var char = text[0];


/////////////////////       Tách chuỗi thành mảng      /////////////////////
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe


/////////////////////       Tìm kiếm sự xuất hiện của chuỗi      /////////////////////
// Lần xuất hiện đầu tiên
var str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

// Lần xuất hiện cuối cùng
var str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");

// Return -1 vì không thấy
var str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");

// Bắt đầu tìm từ vị tri 15
var str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);

// Phương thức search()
// Search có thể nhận đầu vào là một regex
// Search không thể bắt đầu tìm từ vị trí xác định
var str = "Please locate where 'locate' occurs!";
str.search("locate");


/////////////////////////////////////////////////////////////////////
//                       String template                           //
/////////////////////////////////////////////////////////////////////
var firstName = "John";
var lastName = "Doe";

var text = `Welcome ${firstName}, ${lastName}!`;

//  Viết code trực tiếp trong template
var price = 10;
var VAT = 0.25;

var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// Ví dụ về sinh ra đoạn HTML
var header = "Templates Literals";
var tags = ["template literals", "javascript", "es6"];

var html = `<h2>${header}</h2><ul>`; 
for (var x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

/////////////////////////////////////////////////////////////////////
//                          References                             //
/////////////////////////////////////////////////////////////////////
// for more:
//      https://www.w3schools.com/jsref/jsref_obj_string.asp





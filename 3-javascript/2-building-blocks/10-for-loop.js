var cars = ["Merc", "BMW", "Mazda", "Volvo"]
var text="";
// Thay vì
text += cars[0] + "<br>"; 
text += cars[1] + "<br>"; 
text += cars[2] + "<br>"; 
text += cars[3] + "<br>"; 

// Với vòng lặp
for (let i = 0; i < cars.length; i++) { 
  text += cars[i] + "<br>";
}

// For-In

// Duyệt một mảng
var numbers = [45, 4, 9, 16, 25];

var txt = "";
for (var x in numbers) {
  txt += numbers[x];
}


// Duyệt một đối tượng
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
for (var x in person) {
  text += person[x];
}

// For-each
// Duyệt một mảng
var numbers = [45, 4, 9, 16, 25];

// numbers la 1 doi tuong kieu Array()
// forEach()

var txt = "";
numbers.forEach(myFunction); // <- đối số là một hàm (phân biệt rõ hàm != lời gọi hàm)

function myFunction(value, index, array) {
  console.log(value);
  array.push(value + 10);
  console.log(array);
}

// Hoặc
var numbers = [45, 4, 9, 16, 25];

var txt = "";
numbers.forEach(myFunction);

function myFunction(value) {        // Không dùng tham số index và array
  txt += value; 
}

// Hoặc

var numbers = [45, 4, 9, 16, 25];

var txt = "";
numbers.forEach((value)=>{
    txt += value;
});



// For-of
var cars = ["BMW", "Volvo", "Mini"];

var text = "";
for (var x of cars) {
  text += x;
}



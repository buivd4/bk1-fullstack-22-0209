// While
// Trước khi thực hiện, check điều kiện trong while
while (condition) {
  // code block to be executed
}

// Ví dụ
var i = 0;
var text = "";
while (i < 10) {
    text += "The number is " + i + "\n";
    i++;
}

var i = 0;
var text = "";
while(true){
  text += "The number is " + i + "\n";
  i++;
  if (i==10){
    break;
  }
}


// Do-while
// Thực hiện Do trước khi check điều kiện trong while
do {
    // code block to be executed
}
while (condition);

// Ví dụ
var i = 0;
var text = "";
do {
    text += "The number is " + i;
    i++;
  }
while (i < 10);
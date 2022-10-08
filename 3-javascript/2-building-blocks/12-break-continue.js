// Dùng "break" để thoát ra khỏi vòng lặp
// Dùng "continue" để bỏ qua một vòng

// Ví dụ
for (var i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
}


for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        continue; // <- quay trở lại vòng tiếp theo (vòng i=4)
    }
    text += "The number is " + i + "\n";
}
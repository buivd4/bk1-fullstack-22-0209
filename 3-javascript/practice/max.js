///////////////////////////////////////////////////////////////////////////
//                      Bài tập phần vòng lặp                            //
///////////////////////////////////////////////////////////////////////////

/*
        Bài số 1:
            Tìm giá trị lớn nhất trong mảng
                var n = []
            Yêu cầu: In ra màn hình giá trị lớn nhất trong mảng
*/
var n = [1,2,3,4,5,10,7,5,0];
function max(n){
    var max = n[0];
    for(i=0;i<n.length;i++){
        if(n[i]>max){
            max=n[i];
        }
    }
    return max;
}
console.log(max(n));

/*
        Bài số 2:
            Tìm giá trị lớn nhất trong ma trận
                var n = [
                    [1,2,3,4,5],
                    [6,7,8,9,10],
                    [2,5,6,0,13],
                ]
            Yêu cầu: In ra màn hình vị trí và giá trị lớn nhất trong ma trận
            Ví dụ: Trong ma trận n, kết quả sẽ là:
                    GT lon nhat: 13 o vi tri (3,5)
            Giải thích:
                    Giá trị lớn nhất trong ma trận là số 13, ở hàng 3 cột 5
*/

var n = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [2,5,6,0,13],
]

function max_matrix(n){
    var output = {
        vt_x: 0,
        vt_y: 0
    }
    for(i=0; i<n.length; i++){
        for(j=0; j<n[i].length; j++){
            if (n[i][j] > n[output.vt_x][output.vt_y]){
                output.vt_x = i;
                output.vt_y = j;
            }
        }
    }
    return output;
}
var vtln = max_matrix(n);
var print_to_console = "GT lon nhat: " + n[vtln.vt_x][vtln.vt_y] + " o vi tri (" + (vtln.vt_x+1) + "," + (vtln.vt_y+1) + ")";
console.log(print_to_console);
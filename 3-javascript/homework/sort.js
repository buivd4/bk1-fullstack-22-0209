///////////////////////////////////////////////////////////////////////////
//                      Bài tập phần vòng lặp                            //
///////////////////////////////////////////////////////////////////////////

/*
        Bài số 1:
            Sử dụng vòng lặp, sắp xếp các phần tử trong mảng n theo độ lớn
            tăng dần:
                var n = [1,4,1,3,7,8]
            Yêu cầu: In ra mảng n sau khi đã sắp xếp
            (Từ khoá tham khảo: Bubble sort)
*/


/*
Thuật toán sắp xếp nổi bọt thực hiện sắp xếp dãy số bằng cách 
lặp lại công việc đổi chỗ 2 số liên tiếp nhau nếu chúng đứng 
sai thứ tự(số sau bé hơn số trước với trường hợp sắp xếp tăng dần) 
cho đến khi dãy số được sắp xếp.

Ví dụ minh họa
Giả sử chúng ta cần sắp xếp dãy số [5 1 4 2 8] này tăng dần.
Lần lặp đầu tiên:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Ở đây, thuật toán sẽ so sánh hai 
phần tử đầu tiên, và đổi chỗ cho nhau do 5 > 1.
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Đổi chỗ do 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Đổi chỗ do 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Ở đây, hai phần tử đang xét đã 
đúng thứ tự (8 > 5), vậy ta không cần đổi chỗ.

Lần lặp thứ 2:
i=1
j=0 -> 5-1-1 =3
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Đổi chỗ do 4 > 2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
Bây giờ, dãy số đã được sắp xếp, Nhưng thuật toán của chúng ta
không nhận ra điều đó ngay được. Thuật toán sẽ cần thêm một lần lặp
nữa để kết luận dãy đã sắp xếp khi và khi khi nó đi từ đầu tới cuối
mà không có bất kỳ lần đổi chỗ nào được thực hiện.

Lần lặp thứ 3:
i=2
j=0->2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
*/


function hoanVi(a, vtx, vty){
    // Hoán vị vị trí vtx cho vty của mảng a
    var temp = a[vtx];  // Biến tạm
    a[vtx] = a[vty];
    a[vty] = temp;
}

function sapXep(a)
{
    var i, j;
    for (i = 0; i < a.length-1; i++)
    {
        for (j = 0; j < a.length-i-1; j++)
        {
            if (a[j] > a[j+1])
            {
                hoanVi(a,j,j+1);
            }
        }
    }
}
var a = [6,5,3,1,8,7,2,4]
sapXep(a)




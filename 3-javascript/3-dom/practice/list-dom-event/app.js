var items=[
    {id: "l1", label: "Item 1"}
]

// Add một item vào trong một element
function addItem(item, elem){
    // Tạo ra một element mang thông tin của item
    // Tạo ra một element li rỗng
    var newNode = document.createElement("li");
    // Gán id cho element vừa được tạo ra
    newNode.id = item.id;
    // Tạo ra một textNode với label của item
    var textNode = document.createTextNode(item.label);
    // Gán textNode vào làm con của thẻ li
    newNode.appendChild(textNode);

    // Sau khi có newNode = một thẻ li mang đủ thông tin
    // Đưa nó vào làm con của thẻ ul
    elem.appendChild(newNode);
    return elem;
}

var target_list = document.getElementById("target-list");
// Xoá text-node <No data..>
// Lấy text-node đó ra với target_list.firstChild
// (bởi vì target_list chỉ có 01 con là <No data..>)
// Sau đó xoá con với phương thức target_list.removeChild
target_list.removeChild(target_list.firstChild);

// Với từng phần tử của mảng items
for(var item of items){
    // Đưa phần tử vào list
    addItem(item, target_list);
}


function whenSubmit(){
    // Xử lý khi người dùng click vào nút Add Item

    // Lấy thông tin từ nhập liệu của người dùng
    // Bao gồm 2 phần: id và label
    var id1, label1;
    id1 = document.getElementById("item_id").value;
    label1 = document.getElementById("item_label").value;
    // Tạo ra một item
    var item = {
        "id": id1,
        label: label1
    }

    // Đưa item vào element UL
    addItem(item, target_list);
}
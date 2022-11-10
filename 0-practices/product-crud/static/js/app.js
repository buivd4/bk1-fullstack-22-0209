
/// Khi trình duyệt tải trang -> gọi hàm reloadTable lần đầu
/// Trong quá trình người dùng sử dụng, luồng xử lý sẽ diễn ra như sau
///  Sự kiện --> Dữ liệu bị thay đổi (biến products) --> reloadTable() --> Hiển thị dữ liệu
///    |_____________________________________________________________________|

/// Cách thức hiển thị dữ liệu như sau
/// Với từng product trong mảng products
///     Tạo Element tương ứng với dữ liệu (là 1 hàng trong bảng)
///     Đưa Element vào bảng với phương thức appendChild()



// Biến chứa dữ liệu
var products = [
    {
        id: 1,
        name: "Mặt hàng 1",
        description: "Mô tả 1",
        price: 2.99
    },
    {
        id: 11,
        name: "Mặt hàng 2",
        description: "Mô tả 2",
        price: 2.99
    },
    {
        id: 2,
        name: "Mặt hàng 3",
        description: "Mô tả 3",
        price: 2.99
    }
]

// Hàm dùng để hiển thị/cập nhật lại bảng
function reloadTable(){
    var table = document.getElementById("main-table");
    // Xoá dữ liệu cũ
    table.innerHTML=`
        <th class="border-collapse border border-slate-300" style="width:5%">ID</th>
        <th class="border-collapse border border-slate-300" style="width:20%">Name</th>
        <th class="border-collapse border border-slate-300" style="width:20%">Description</th>
        <th class="border-collapse border border-slate-300" style="width:10%">Price</th>
        <th class="border-collapse border border-slate-300" style="width:35%">Action</th>
    `;
    for(var product of products){
        // Create Product DOM dùng để tạo ra một DOM cho product tương ứng
        // Mục đích: Tạo ra một row dữ liệu trong bảng
        table.append(createProductDOM(product));
        // ^ đưa dữ liệu vào bảng   ^ tạo ra dữ liệu
    }
}


// Hàm tạo ra một dòng trong bảng
// Đầu vào: 1 product object
// Đầu ra:  một Element để chèn vào DOM
function createProductDOM(product){
    console.log("Create DOM for product: "+ product.id)
    // Tạo ra một thẻ tr rỗng
    var proDOM = document.createElement("tr");
    // Với từng thuộc tính của product
    for(var attr in product){
        // Tạo ra thẻ td để chứa thuộc tính tương ứng
        var td = document.createElement("td");
        td.className = "border-collapse border border-slate-300";
        // Đưa text vào thẻ td
        var textNode = document.createTextNode(product[attr]);
        td.appendChild(textNode);
        // Thêm thẻ td vào thẻ tr
        proDOM.appendChild(td);
    }
    // --> Đến bước này thì đã có thẻ tr chứa đầy đủ thông tin
    // Cần thêm phần Action
    // Tạo thẻ td
    var td = document.createElement("td");
    td.className = "border-collapse border border-slate-300";
    // Đưa phần tử để hiển thị phần Action (3 nút xem, sửa và xoá) vào trong td
    td.appendChild(actionBtnDOM(product))
    //  ^ đưa dữ liệu vào   ^ Tạo ra Element cho phần Action
    // Đưa td vào thẻ tr
    proDOM.append(td);
    // --> Đến bước này ta đã có 1 hàng đầy đủ thông tin (tr)
    // Trả về thẻ tr
    return proDOM;
}

// Tạo ra phần action gồm 3 nút
function actionBtnDOM(product){
    // Tạo ra thẻ div chứa nội dung
    var div = document.createElement("div");
    div.className="flex px-4 space-x-2";

    // Tạo ra nút Read
    var readBtn = document.createElement("button");
    readBtn.className="w-1/4 h-4 text-xs text-white bg-blue-200 rounded-md"
    readBtn.appendChild(document.createTextNode("Read"))
    // Thêm sự kiện onclick -> khi bấm hiển thị
    readBtn.onclick=function() { onViewBtnClick(product.id) }

    // Tạo ra nút edit
    var editBtn = document.createElement("button");
    editBtn.className="w-1/4 h-4 text-xs text-white bg-blue-700 rounded-md"
    editBtn.appendChild(document.createTextNode("Edit"))

    // Delete 
    var deleteBtn = document.createElement("button");
    deleteBtn.className="w-1/4 h-4 text-xs text-white bg-red-500 rounded-md"
    deleteBtn.appendChild(document.createTextNode("Delete"))

    //  Bind event

    // Đưa nút vào thẻ div
    div.appendChild(readBtn);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    // Trả về thẻ div
    return div;
}

reloadTable()


/// Khi làm việc với product, cần tương tác với dữ liệu product
// Làm việc với dữ liệu
// Thêm dữ liệu
function addItem(id, name, desc, price){
    var newProduct = {
        id: id,
        name: name,
        description: desc,
        price: price
    };
    products.push(newProduct);
    console.log(products);
    // Cập nhật hiển thị
    reloadTable();
}

// Xoá dữ liệu
function removeItemById(id){
    for(var i in products){
        if (products[i].id===id){
            // Delete 1 item from ith
            products.splice(i,1);
        }
    }
    reloadTable()
}

// Tìm theo id
function findItemById(id){
    for(var i in products){
        if (products[i].id===id){
            // Delete 1 item from ith
            return products[i];
        }
    }
}


/// Lắng nghe sự kiện để hiển thị tương ứng
function onCreateBtnClick(){
    // Làm sạch dữ liệu trong form
    document.getElementById("inp_create_id").value=null;
    document.getElementById("inp_create_name").value=null;
    document.getElementById("inp_create_desc").value=null;
    document.getElementById("inp_create_price").value=null;
    // Hiển thị modal bằng cách bỏ class hidden khỏi element tương ứng với phần modal
    document.getElementById("create_modal").classList.remove("hidden");
}

function onCreateCancelBtnClick(){
    document.getElementById("create_modal").classList.add("hidden");
}

// Tương ứng với việc người dùng submit dữ liệu lên
function onCreateSubmitBtnClick(){
    // Lấy dữ liệu từ form ra
    var id = document.getElementById("inp_create_id").value;
    var name = document.getElementById("inp_create_name").value;
    var desc = document.getElementById("inp_create_desc").value;
    var price = document.getElementById("inp_create_price").value;
    // Thêm dữ liệu vào mảng products
    addItem(id, name, desc, price);
    // Ẩn modal tạo product bằng cách thêm class hidden vào modal
    document.getElementById("create_modal").classList.add("hidden");
}



function onViewBtnClick(id){
    var showItem = findItemById(id);
    document.getElementById("inp_view_id").value=showItem.id;
    document.getElementById("inp_view_name").value=showItem.name;
    document.getElementById("inp_view_desc").value=showItem.description;
    document.getElementById("inp_view_price").value=showItem.price;
    document.getElementById("view_modal").classList.remove("hidden");
}
function onViewOKBtnClick(){
    document.getElementById("view_modal").classList.add("hidden");
}

//reloadTable()



/// bắt được sự kiện người dùng bấm vào nút Create new product
/// -> Mở modal cho người dùng nhập liệu
/// Sau người dùng điền thông tin 
/// -> bắt sự kiện người dùng bấm nút Create
/// -> thêm dữ liệu người dùng đã nhập vào trong mảng products
/// -> cập nhật lại hiển thị thông qua việc dùng hàm reloadTable()
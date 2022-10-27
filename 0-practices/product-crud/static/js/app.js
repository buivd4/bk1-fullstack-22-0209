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

    div.appendChild(readBtn);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    return div;
}

function createProductDOM(product){
    console.log("Create DOM for product: "+ product.id)
    var proDOM = document.createElement("tr");
    for(var attr in product){
        var td = document.createElement("td");
        td.className = "border-collapse border border-slate-300";
        var textNode = document.createTextNode(product[attr]);
        td.appendChild(textNode);
        proDOM.appendChild(td);
    }
    var td = document.createElement("td");
    td.className = "border-collapse border border-slate-300";
    td.appendChild(actionBtnDOM(product))
    proDOM.append(td);
    return proDOM;
}


function reloadTable(){
    var table = document.getElementById("main-table");
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
    }
}

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


function onCreateBtnClick(){
    // Làm sạch dữ liệu trong bảng
    document.getElementById("inp_create_id").value=null;
    document.getElementById("inp_create_name").value=null;
    document.getElementById("inp_create_desc").value=null;
    document.getElementById("inp_create_price").value=null;

    document.getElementById("create_modal").classList.remove("hidden");
}

function onCreateCancelBtnClick(){
    document.getElementById("create_modal").classList.add("hidden");
}

function onCreateSubmitBtnClick(){
    // Lấy dữ liệu từ form ra
    var id = document.getElementById("inp_create_id").value;
    var name = document.getElementById("inp_create_name").value;
    var desc = document.getElementById("inp_create_desc").value;
    var price = document.getElementById("inp_create_price").value;
    addItem(id, name, desc, price);
    console.log(products)
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

reloadTable()


/// Event --> Data (products) --> reload()
///    |______________________________|

/// Với từng product
///     Tạo DOM tương ứng (là 1 hàng trong bảng)
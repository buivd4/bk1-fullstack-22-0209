///////////////////////////////////////////////////////////////////////////
//                      Bài tập phần DOM                                 //
///////////////////////////////////////////////////////////////////////////

window.onload = () => {
    console.log("Web is loaded!---");
    // Thay đổi align, font, của một thẻ h1
    document.getElementById("main-title").style.textAlign="right";
    document.getElementById("main-title").style.fontFamily="Arial";
    document.getElementById("main-title").style.fontSize="30px";

    // Thay đổi màu nền của tất cả các thẻ div
    var divs=document.getElementsByTagName("div");
    console.log(divs);
    for(elem of divs){
        elem.style.backgroundColor="red";
    }

    // Thay đổi đoạn văn bản
    // CSS Selector cho thẻ <p> : p
    document.querySelector("p").style.textShadow = "10px 5px"
}

/*
AJAX viết tắt từ Asynchronous JavaScript and XML,
là bộ công nghệ giúp tạo ra các web động hay các ứng dụng
giàu tính Internet, cho phép tăng tốc độ ứng dụng web bằng
cách cắt nhỏ dữ liệu và chỉ hiển thị những gì cần thiết, 
thay vì tải đi tải lại toàn bộ trang web, làm như vậy trang 
của bạn sẽ muợt và đẹp hơn. 

AJAX không phải một công nghệ đơn lẻ mà là sự kết hợp một 
nhóm công nghệ với nhau. Trong đó:
- HTML (hoặc XHTML) và CSS đóng vai hiển thị thông tin, dữ liệu
- Mô hình DOM (Document Object Model) được thực hiện thông qua 
JavaScript, nhằm hiển thị thông tin động và tương tác với những 
thông tin được hiển thị
- Đối tượng XMLHttpRequest để trao đổi dữ liệu một cách không 
đồng bộ với máy chủ web. (Mặc dù, việc trao đổi này có thể được 
thực hiện với nhiều định dạng như HTML, văn bản thường, JSON và XML).
- XML/JSON thường là định dạng cho dữ liệu truyền, mặc dầu bất 
cứ định dạng nào cũng có thể dùng, bao gồm HTML định dạng trước, 
văn bản thuần (plain text).

With AJAX:
    Web Browser         Web Server
        |                   |
        |------get page---->|
        |<------content-----|
-event->|                   |
        |-----fetch data--->|
        |<----JSON/XML------|
*/
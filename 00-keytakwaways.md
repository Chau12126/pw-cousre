 ### **Tổng hợp bài DOM**

#### **1. DOM**
- Stand for Document Object Moment. Mỗi một phần tử gọi là 1 node/element
- Example:  Thẻ `<div>` - thẻ mở. Thẻ `</div>` - thẻ đóng
- Thẻ tự đóng: `<img />`
- Text thường nằm giữa 2 thẻ. Ví dụ thẻ span có text: `<span>k25 class</span>`
- Thuộc tính `<p id = "school" class = "k25-primary"></p>`. Thuộc tính là Id, class có giá trị (có thể có nhiều class) là school, k25-primary.

**1.1. Một số thẻ HTML thường gặp**
- Thẻ cấu trúc phân trang:
`<html>` -> Thẻ gốc của trang
`<head> </head>` -> Chứa metadata, hiển thị website
`<body> </body>` -> Nội dung của cả website hiển thị

`</html>`
- Thẻ bố cục và ngữ nghĩa. `<div>` -> divide: Khối/container chung được chưa thành các khối. `<section>`: Thẻ ngữ nghĩa
- Thẻ nội dung. Example: `<h1> đến <h6>` -> TIêu để. `<paragraph>` -> Đoạn văn. `<ul><ol><li>` -> Danh sách. 
----
#### **2. Playwright basic syntax**
- Test là đơn vị cơ bản 
- page.getByRole("link", {name:"Danh sách khóa học}).click(); -> Tìm đến phần tử có vai trò là gì: link, checkbox, textbox -> được gọi là locator. Sau link để filter ra tên link cụ thể
-*Note: Cách để fix khi trên DOM có nhiều element trùng nhau -> playwright ko biết click vào đâu. Ex: `page.getByRole("link", {name:"Danh sách khóa học}).first()click();` ->.last(), .nth(4)(index = 4 tại vị trí số 5)
##DTUDZ2 ADMIN![](https://github.com/Truongpyeo/DTURelifeLink/raw/master/assets/images/Reliefbanner.png)
## 📝 Giới thiệu
DTUDZ2 ADMIN là một ứng dụng quản trị được xây dựng bằng Appsmith, được thiết kế hỗ trợ, thực hiện cứu hộ cứu nạn trong các tình huống khẩn cấp, và hỗ trợ các hoạt động cứu trợ hiệu quả trong ứng dụng.
##### You can visit the application using the below link

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://dz1.dzfullstack.com/app/dtudz2-admin/master-admin-6750f0d8f0b1ed2b4a0eb5d6?branch=master)
## ⚡ Tính năng chính

1. MASTER ADMIN
    - Trang quản trị chính, dành cho admin cao cấp nhất
    - Có quyền truy cập và quản lý toàn bộ hệ thống
    - Có thể phân quyền cho các admin khác

2. PAGE ADMIN
    - Quản lý các admin của hệ thống
3. PAGE ĐĂNG NHẬP
    - Trang đăng nhập hệ thống
    - Xác thực người dùng
4. PAGE NGƯỜI DÙNG
    - Quản lý thông tin người dùng
    - Xem danh sách người dùng
    - Thêm/sửa/xóa thông tin người dùng
5. PAGE NGUỒN LỰC
    - Quản lý nguồn lực/tài nguyên
    - Báo cáo tình trạng nguồn lực
    - Thêm/sửa/xóa thông tin nguồn lực
6. PAGE NHÂN LỰC
    - Quản lý nhân lực cứu trợ
7. PAGE PHÂN QUYỀN
    - Cấu hình và phân quyền chức vụ
    - Thiết lập vai trò và quyền hạn
8. PAGE THÔNG TIN CÁ NHÂN
    - Trang thông tin cá nhân người dùng
    - Cập nhật thông tin cá nhân
    - Đổi mật khẩu
9. PAGE QUẢN LÝ CỨU TRỢ
    - Quản lý thông tin yêu cầu cứu trợ
10. PAGE THÔNG BÁO
    - Hiển thị thông báo hệ thống
    - Quản lý các loại thông báo
11. PAGE THỐNG KÊ
    - Thống kê số liệu
    - Báo cáo hoạt động
    - Biểu đồ và phân tích dữ liệu
12. PAGE YÊU CẦU CỨU TRỢ
    - Theo dõi trạng thái cứu trợ


## Tác dụng chính của hệ thống admin
1. Quản lý tổng thể hệ thống cứu trợ   
2. Quản lý người dùng và nhân lực
3. Quản lý nguồn lực và tài nguyên
4. Xử lý yêu cầu cứu trợ
5. Phân tích và báo cáo
6. Quản lý thông tin và truyền thông

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js >= 14
- Docker & Docker Compose 
- Appsmith Server

### Các bước triển khai
1. Fork các repository của ReliefLink:
   - [Repo Admin](https://github.com/Truongpyeo/DTUDZ2_Admin)

2. Import vào Appsmith:
   - Truy cập Appsmith workspace
   - Click **Create New** > **Import from Git repository**
   - Cấu hình Git và Deploy keys cho từng ứng dụng
   - Kết nối MongoDB với URI có sẵn

Chi tiết dự án xem tại [DTURelifeLink/setup](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)

## 🧩 Plugins
### DTU AppSmith Map
 -  NPM 
```
  npm install dtuappsmithmap
```
 -  CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js"></script>
```
  - AppSmith
    - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithMap](https://www.npmjs.com/package/dtuappsmithmap)

### DTU AppSmith RealTime
- NPM 
```
  npm install dtuappsmithrealtime
```
- CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js"></script>
```
  
- AppSmith
  - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithRealTime](https://www.npmjs.com/package/dtuappsmithrealtime/v/1.1.5)

Chi tiết cách cài đặt của AppSmith tại [AppSmith](https://docs.appsmith.com/core-concepts/writing-code/ext-libraries#prerequisites)

## ⚙️ Services
### DTU ServerSocket

- Xem chi tiết tại [DTUServerSocket](https://github.com/Truongpyeo/DTUServerSocket)

- Server Demo: [ServerDemo](https://socket.thanhtruongit.io.vn/login.html)

## 🐳 Docker Appsmith
### Yêu cầu tiên quyết
 - Docker (phiên bản 20.10.7 trở lên)  [Docker]( https://docs.docker.com/get-docker/)
 - Docker-Compose (phiên bản 1.29.2 trở lên) [Docker-Compose](https://docs.docker.com/compose/install/)

Bạn sẽ cần phải khởi động lại máy tính sau khi hoàn tất quá trình cài đặt.

- Clone repo của Appsmith từ GitHub về máy tính: 
``` 
    git clone https://github.com/appsmithorg/appsmith.git

```

- Nếu git clone về không có docker-compose.yml thì bạn cần tạo 1 file docker-compose.yml và cấu hình sau: 
	version: "3"

  ```
  services:
    appsmith:
        image: index.docker.io/appsmith/appsmith-ee
        container_name: appsmith
        ports:
            - "5555:80"
            - "444:443"
        volumes:
            - ./stacks:/appsmith-stacks
        restart: unless-stopped
    mysql:
        image: mysql:latest
        ports:
            - "33088:3306" 
        container_name: mysql
        environment:
            - MYSQL_ROOT_PASSWORD=admin
            - MYSQL_DATABASE=appsmith
        volumes:
            - mysql-data:/var/lib/mysql
        restart: unless-stopped
        volumes:
        mysql-data:
  ```



- Trong thư mục appsmith, chạy lệnh sau để khởi động Appsmith trong Docker:

``` 
  cd appsmith
  docker-compose up
```
Sau khi các container đã được khởi động, bạn có thể truy cập Appsmith qua trình duyệt.

- Mở trình duyệt và vào địa chỉ:

    - Truy cập Appsmith trên cổng http://localhost:5555 (HTTP) và http://localhost:444 (HTTPS).

    - Truy cập MySQL trên cổng http://localhost:33088.

Xem chi tiết tại [Docker Appsmith](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)



## 💡Nhà phát triển

- 📧 Email: thanhtruong23111999@gmail.com

- 📱 Hotline: 0376 659 652

*" 🏫 DTU_DZ - DUY TAN UNIVERSITY - SCS ✨"*

## 📞 Liên hệ
- Lê Thanh Trường       :  <u>thanhtruong23111999@gmail.com</u>
- Võ Văn Việt           :  <u>vietvo371@gmail.com</u>
- Nguyễn Ngọc Duy Thái  :  <u>kkdn011@gmail.com</u>

## 📚 Tài liệu
- [Hướng dẫn cài đặt](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)
- [Hướng dẫn đóng góp](CONTRIBUTING.md)

## 🤝 Đóng góp
Chúng tôi rất hoan nghênh mọi đóng góp! Xem [CONTRIBUTING](CONTRIBUTING.md) để biết thêm chi tiết.

## 🔄 Quy trình phát triển
1. Fork repo này
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`) 
5. Tạo Pull Request

## 🐛 Báo lỗi
Nếu bạn phát hiện lỗi, vui lòng tạo issue mới với:
- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots nếu có
- Môi trường (browser, OS...)

## 📜 Changelog
Xem [CHANGELOG](CHANGELOG.md) để biết lịch sử thay đổi.

## ⚖️ Code of Conduct
Xem [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) để biết các quy tắc và hành vi được chấp nhận.

## Báo cáo lỗi & Góp ý
- Issues: [GitHub Issues](https://github.com/Truongpyeo/DTURelifeLink/issues)
- Security: Đối với các vấn đề bảo mật nhạy cảm, vui lòng liên hệ trực tiếp qua email: <u>thanhtruong23111999@gmail.com</u>


### 📝 License
Dự án được phân phối dưới giấy phép [MIT License](LICENSE)

*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*

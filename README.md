# Nghiên cứu và ứng dụng môi trường ảo trong kiểm thử và đánh giá an toàn bảo mật phần mềm

## 1. Giới thiệu

Đề tài nghiên cứu việc ứng dụng môi trường ảo trong quá trình phát triển, kiểm thử và đánh giá an toàn bảo mật phần mềm.

Dự án sử dụng GitHub Codespaces kết hợp với Dev Container để tạo ra một môi trường phát triển thống nhất. Trong môi trường này, hệ thống được xây dựng và kiểm thử với các thành phần:

- Frontend: React + Vite
- Backend: Java 21 + Spring Boot
- Database: PostgreSQL 16
- Security Testing: kiểm thử và đánh giá các vấn đề an toàn bảo mật của ứng dụng

Mục tiêu của dự án là tạo ra một môi trường phát triển có cấu hình thống nhất, dễ thiết lập và có thể sử dụng cho quá trình kiểm thử bảo mật.

---

## 2. Mục tiêu đề tài

Các mục tiêu chính của dự án:

- Nghiên cứu môi trường Dev Container.
- Ứng dụng GitHub Codespaces trong phát triển phần mềm.
- Xây dựng ứng dụng web theo kiến trúc Frontend – Backend – Database.
- Xây dựng các chức năng CRUD cho sản phẩm.
- Thiết lập môi trường thống nhất cho quá trình phát triển và kiểm thử.
- Nghiên cứu các phương pháp kiểm thử an toàn bảo mật ứng dụng web.
- Thực hiện kiểm thử và đánh giá các vấn đề bảo mật của hệ thống.
- Đề xuất biện pháp cải thiện an toàn bảo mật.

---

## 3. Kiến trúc hệ thống

Kiến trúc tổng thể:

```text
GitHub
   │
   ▼
GitHub Codespaces
   │
   ▼
Dev Container
   │
   ├── React + Vite
   │       │
   │       ▼
   │   Spring Boot
   │   Java 21
   │       │
   │       ▼
   │   PostgreSQL 16
   │
   ▼
Security Testing
```
```text
| Thành phần                 | Công nghệ               |
| :------------------------- | :---------------------- |
| Development Environment    | GitHub Codespaces       |
| Development Container      | Dev Container           |
| Frontend                   | React 19 + Vite 8       |
| Backend                    | Java 21 + Spring Boot 4 |
| API                        | REST API                |
| ORM                        | Spring Data JPA         |
| Database                   | PostgreSQL 16           |
| HTTP Client                | Axios                   |
| Build Tool Backend         | Gradle                  |
| Package Management Frontend| npm                     |
```

## 4. Cấu trúc thư mục
```text
virtual-environment-web-project/
│
├── .devcontainer/
│   └── devcontainer.json
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── virtualweb/
│   │   │   │           └── backend/
│   │   │   │               ├── controller/
│   │   │   │               ├── entity/
│   │   │   │               ├── repository/
│   │   │   │               └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   └── test/
│   │
│   ├── build.gradle
│   ├── settings.gradle
│   └── gradlew
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```
## 5. Backend

Backend được xây dựng bằng Java 21 và Spring Boot.

Công nghệ
Java 21
Spring Boot 4.1.1
Spring Data JPA
Spring Validation
Spring WebMVC
PostgreSQL Driver
Gradle
Kiến trúc Backend

Backend sử dụng mô hình phân tầng:

ProductController
       │
       ▼
ProductService
       │
       ▼
ProductRepository
       │
       ▼
PostgreSQL
Controller

ProductController cung cấp REST API cho đối tượng Product.

Các API chính:

Method	Endpoint	Chức năng
GET	/api/products	Lấy danh sách sản phẩm
GET	/api/products/{id}	Lấy sản phẩm theo ID
POST	/api/products	Tạo sản phẩm
PUT	/api/products/{id}	Cập nhật sản phẩm
DELETE	/api/products/{id}	Xóa sản phẩm
## 6. Database

Hệ thống sử dụng PostgreSQL.

Thông tin kết nối hiện tại:

Host: localhost
Port: 5432
Database: virtual_web
Username: postgres
Password: postgres

Cấu hình trong:

backend/src/main/resources/application.properties

Hiện tại Hibernate được cấu hình:

spring.jpa.hibernate.ddl-auto=update

Điều này cho phép Hibernate cập nhật cấu trúc database dựa trên entity khi ứng dụng khởi động.

## 7. Frontend

Frontend được xây dựng bằng React và Vite.

Công nghệ
React 19.2.8
React DOM
Vite 8.2.2
Axios
ESLint

Frontend giao tiếp với Backend thông qua REST API.

API được sử dụng trong ứng dụng:

/api/products

Vite được cấu hình proxy để chuyển các request /api tới backend đang chạy tại:

http://localhost:8080
## 8. Dev Container

Dev Container cung cấp môi trường phát triển thống nhất cho dự án.

File cấu hình:

.devcontainer/devcontainer.json

Môi trường hiện tại sử dụng:

Java 21
Node.js 24
VS Code Java Extension Pack
Gradle Extension
ESLint

Dev Container giúp các thành viên sử dụng cùng phiên bản môi trường phát triển và giảm sự khác biệt giữa các máy.

## 9. GitHub Codespaces

GitHub Codespaces được sử dụng để cung cấp môi trường phát triển trên nền tảng đám mây.

Quy trình:

GitHub Repository
       │
       ▼
GitHub Codespaces
       │
       ▼
Dev Container
       │
       ├── Java 21
       ├── Node.js 24
       └── Development Tools

Sau khi mở repository bằng Codespaces, môi trường phát triển được thiết lập dựa trên cấu hình trong:

.devcontainer/devcontainer.json
## 10. Chạy Backend

Di chuyển vào thư mục backend:

cd backend

Cấp quyền thực thi cho Gradle Wrapper:

chmod +x gradlew

Chạy backend:

./gradlew bootRun

Backend chạy tại:

http://localhost:8080

Kiểm tra API:

curl http://localhost:8080/api/products
11. Chạy Frontend

Mở terminal mới:

cd frontend

Cài đặt dependency:

npm install

Chạy development server:

npm run dev

Frontend chạy tại:

http://localhost:5173
## 12. Build Backend

Để kiểm tra quá trình build:

cd backend
./gradlew clean build

Nếu build thành công, Gradle tạo các file build trong:

backend/build/
## 13. Build Frontend

Chạy:

cd frontend
npm run build

Kết quả build được tạo trong:

frontend/dist/
## 14. Kiểm thử chức năng

Các chức năng CRUD được kiểm thử thông qua REST API:

GET
GET /api/products

Mục đích:

Kiểm tra khả năng lấy danh sách sản phẩm.
Kiểm tra kết nối Backend với Database.
GET theo ID
GET /api/products/{id}

Mục đích:

Kiểm tra khả năng truy xuất một sản phẩm.
POST
POST /api/products

Mục đích:

Kiểm tra khả năng tạo sản phẩm mới.
PUT
PUT /api/products/{id}

Mục đích:

Kiểm tra khả năng cập nhật sản phẩm.
DELETE
DELETE /api/products/{id}

Mục đích:

Kiểm tra khả năng xóa sản phẩm.
## 15. Kiểm thử an toàn bảo mật

Đây là hướng phát triển chính của đề tài.

Các nhóm kiểm thử dự kiến gồm:

### 15.1 API Security

Kiểm tra các REST API của hệ thống nhằm phát hiện:

Request không hợp lệ.
Truy cập API không được kiểm soát.
Dữ liệu đầu vào không an toàn.
Xử lý lỗi không phù hợp.
### 15.2 Input Validation

Kiểm tra dữ liệu đầu vào của các API:

POST /api/products
PUT /api/products/{id}

Các trường cần kiểm tra:

name
price
description
quantity

Mục tiêu là xác định hệ thống xử lý như thế nào đối với dữ liệu không hợp lệ hoặc dữ liệu bất thường.

### 15.3 SQL Injection

Kiểm tra khả năng ứng dụng bị ảnh hưởng bởi SQL Injection thông qua dữ liệu đầu vào.

Đồng thời đánh giá cơ chế truy cập database của Spring Data JPA.

### 15.4 Cross-Site Scripting (XSS)

Kiểm tra khả năng dữ liệu do người dùng nhập vào được hiển thị lại trên giao diện mà không được xử lý phù hợp.

### 15.5 Error Handling

Kiểm tra response khi gửi:

ID không tồn tại.
Dữ liệu sai kiểu.
Request thiếu trường.
Dữ liệu không hợp lệ.

Mục tiêu là hạn chế việc tiết lộ thông tin nội bộ của hệ thống.

### 15.6 Dependency Security

Kiểm tra các dependency của:

Backend Gradle.
Frontend npm.

Mục tiêu là phát hiện các dependency có vấn đề bảo mật hoặc phiên bản cần cập nhật.

## 16. Kế hoạch kiểm thử bảo mật

Quy trình kiểm thử dự kiến:

Xác định chức năng
       ↓
Xác định điểm có thể tấn công
       ↓
Thiết kế Test Case
       ↓
Thực hiện Security Testing
       ↓
Ghi nhận kết quả
       ↓
Đánh giá mức độ ảnh hưởng
       ↓
Đề xuất biện pháp khắc phục
       ↓
Kiểm thử lại

Kết quả kiểm thử được ghi nhận theo dạng:
```text
Test Case |	Nội dung		              | Actual                                | Result	           | Status
SEC-01	  | Kiểm tra input không hợp lệ   | Request bị xử lý phù hợp              | Chưa thực hiện	   | TBD
SEC-02	  | Kiểm tra SQL Injection	      | Không thực thi truy vấn ngoài ý muốn  | Chưa thực hiện	   | TBD
SEC-03	  | Kiểm tra XSS	              | Dữ liệu nguy hiểm không được thực thi | Chưa thực hiện	   | TBD
SEC-04	  | Kiểm tra lỗi API	          | Không tiết lộ thông tin nội bộ	      | Chưa thực hiện	   | TBD
```
Các kết quả bảo mật sẽ được cập nhật sau khi thực hiện kiểm thử thực tế.

## 17. Môi trường phát triển

Dự án được phát triển trong môi trường:

GitHub
   ↓
GitHub Codespaces
   ↓
Dev Container
   ↓
Java 21 + Node.js 24

Ứng dụng sử dụng:

React + Vite
      ↓
Spring Boot
      ↓
PostgreSQL
## 18. Định hướng phát triển

Các công việc tiếp theo của dự án:

Hoàn thiện môi trường Dev Container.
Kiểm tra hoạt động của Backend.
Kiểm tra hoạt động của Frontend.
Hoàn thiện chức năng CRUD.
Xây dựng các Security Test Case.
Kiểm thử API Security.
Kiểm thử Input Validation.
Kiểm thử SQL Injection.
Kiểm thử XSS.
Kiểm tra dependency security.
Tổng hợp kết quả kiểm thử.
Đề xuất biện pháp khắc phục.
Kiểm thử lại sau khi sửa lỗi.
## 19. Kết luận

Dự án xây dựng một môi trường phát triển thống nhất sử dụng GitHub Codespaces và Dev Container.

Hệ thống bao gồm:

React + Vite ở phía Frontend.
Spring Boot + Java 21 ở phía Backend.
PostgreSQL ở phía Database.

Sau khi hoàn thiện phần xây dựng hệ thống, dự án tập trung vào việc kiểm thử và đánh giá an toàn bảo mật ứng dụng web.

Việc sử dụng Dev Container và GitHub Codespaces giúp môi trường phát triển được cấu hình thống nhất, tạo cơ sở cho quá trình thực hiện các bài kiểm thử bảo mật một cách có hệ thống.

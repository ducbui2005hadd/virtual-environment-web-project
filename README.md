# Virtual Environment Web Project

## 1. Giới thiệu

**Virtual Environment Web Project** là một dự án nghiên cứu và ứng dụng môi trường ảo trong quá trình phát triển phần mềm.

Dự án tập trung vào việc sử dụng **Docker, Docker Compose, Dev Container và GitHub Codespaces** để xây dựng một môi trường phát triển phần mềm độc lập, đồng nhất và dễ triển khai.

Hệ thống được xây dựng dưới dạng một ứng dụng web quản lý sản phẩm, bao gồm:

- Frontend
- Backend
- Database

Các thành phần được tổ chức và triển khai trong môi trường container nhằm giảm sự phụ thuộc vào cấu hình của máy phát triển.

---

## 2. Mục tiêu

Dự án hướng tới các mục tiêu:

- Xây dựng một ứng dụng web có đầy đủ Frontend, Backend và Database.
- Sử dụng Docker để container hóa các thành phần của hệ thống.
- Sử dụng Docker Compose để quản lý nhiều container.
- Sử dụng Dev Container để chuẩn hóa môi trường phát triển.
- Triển khai môi trường phát triển thông qua GitHub Codespaces.
- Kiểm thử hoạt động của hệ thống trong môi trường container.
- So sánh môi trường chạy trực tiếp trên máy với môi trường container.
- Đánh giá ưu điểm, hạn chế và khả năng ứng dụng của môi trường ảo trong phát triển phần mềm.

---

## 3. Công nghệ sử dụng

### Frontend

- React
- Vite
- Axios
- Node.js
- Nginx

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Gradle

### Database

- PostgreSQL 16

### Virtualization & Deployment

- Docker
- Docker Compose
- Dev Container
- GitHub Codespaces

### Version Control

- Git
- GitHub

---

## 4. Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình:

                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      + Vite         │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot       │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                         Spring Data JPA
                               │
                               ▼
                    ┌─────────────────────┐
                    │   PostgreSQL 16     │
                    │      Database       │
                    └─────────────────────┘
Backend Architecture

Backend sử dụng mô hình 3 lớp:

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

Trong đó:

Controller: tiếp nhận HTTP request và trả HTTP response.
Service: xử lý logic nghiệp vụ.
Repository: giao tiếp với database.
PostgreSQL: lưu trữ dữ liệu sản phẩm.
## 5. Cấu trúc thư mục
virtual-environment-web-project/
│
├── .devcontainer/
│   ├── devcontainer.json
│   └── devcontainer-lock.json
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   ├── gradle/
│   ├── build.gradle
│   ├── settings.gradle
│   ├── gradlew
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── nginx.conf
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
## 6. Chức năng hệ thống

Hệ thống hiện tại cung cấp các chức năng quản lý sản phẩm:

### 6.1. Hiển thị sản phẩm

Frontend gửi request:

GET /api/products

Backend lấy danh sách sản phẩm từ PostgreSQL và trả về dữ liệu JSON.

### 6.2. Thêm sản phẩm

Frontend gửi:

POST /api/products

Ví dụ:

{
  "name": "Laptop MSI",
  "price": 25000000,
  "description": "Gaming Laptop",
  "quantity": 10
}
### 6.3. Cập nhật sản phẩm

Frontend gửi:

PUT /api/products/{id}

Ví dụ:

PUT /api/products/1
### 6.4. Xóa sản phẩm

Frontend gửi:

DELETE /api/products/{id}

Ví dụ:

DELETE /api/products/1

## 7. REST API
Method	Endpoint	Chức năng
GET	/api/products	Lấy tất cả sản phẩm
GET	/api/products/{id}	Lấy sản phẩm theo ID
POST	/api/products	Thêm sản phẩm
PUT	/api/products/{id}	Cập nhật sản phẩm
DELETE	/api/products/{id}	Xóa sản phẩm

## 8. Docker

Dự án sử dụng Docker để đóng gói các thành phần thành các container độc lập.

Các service chính:

virtual-frontend
virtual-backend
virtual-postgres
virtual-devcontainer
Backend Container

Backend được build bằng Dockerfile nhiều giai đoạn:

Java 21 JDK
      │
      ▼
Gradle Build
      │
      ▼
Spring Boot JAR
      │
      ▼
Java 21 JRE

Điều này giúp tách môi trường build khỏi môi trường chạy ứng dụng.

Frontend Container

Frontend được build bằng Node.js sau đó chạy bằng Nginx:

Node.js
   │
   ▼
npm install
   │
   ▼
npm run build
   │
   ▼
React/Vite dist
   │
   ▼
Nginx
PostgreSQL Container

Database sử dụng:

PostgreSQL 16

Database:

virtual_web

Thông tin kết nối trong môi trường Docker:

Host: postgres
Port: 5432
Database: virtual_web
Username: postgres
Password: postgres

## 9. Docker Compose

Các service được quản lý bằng:

docker-compose.yml

Mô hình:

                    Docker Compose
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
   virtual-frontend  virtual-backend  virtual-postgres
          │               │               │
          │               │               │
          └───────────────┴───────────────┘
                          │
                          ▼
                   Docker Network

Database sử dụng Docker Volume để lưu trữ dữ liệu:

postgres_data

Nhờ đó dữ liệu PostgreSQL không phụ thuộc hoàn toàn vào vòng đời của container.

## 10. Dev Container

Dự án sử dụng Dev Container để tạo môi trường phát triển được chuẩn hóa.

Dev Container cung cấp môi trường:

Java 21
Node.js 24
Linux Debian Bookworm

Workspace của project:

/workspaces/virtual-environment-web-project

Mục đích của Dev Container:

Chuẩn hóa môi trường phát triển.
Giảm sự khác biệt giữa các máy.
Không cần cài đặt toàn bộ môi trường trực tiếp trên máy.
Có thể tạo lại môi trường khi cần.
Hỗ trợ phát triển trên GitHub Codespaces.
## 11. GitHub Codespaces

Project có thể được mở trực tiếp bằng GitHub Codespaces.

Khi Codespace được tạo, môi trường phát triển được thiết lập dựa trên:

.devcontainer/devcontainer.json

Dev Container sử dụng Docker Compose để kết nối các thành phần của hệ thống.

Mục tiêu:

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
        └── Docker Compose Environment

Điều này cho phép môi trường phát triển có thể được tái tạo trên các máy khác nhau mà không phải cấu hình thủ công từng thành phần.

## 12. Chạy Backend

Di chuyển vào thư mục backend:

cd backend

Build project:

./gradlew clean build

Chạy Spring Boot:

./gradlew bootRun

Backend sử dụng port:

8080

API:

http://localhost:8080/api/products
## 13. Chạy Frontend

Di chuyển vào thư mục frontend:

cd frontend

Cài dependencies:

npm install

Chạy môi trường development:

npm run dev -- --host 0.0.0.0

Frontend mặc định sử dụng:

http://localhost:5173

Trong GitHub Codespaces, port sẽ được GitHub forward thành một URL có dạng:

https://<codespace-name>-5173.app.github.dev
## 14. Kiểm thử API
GET
curl http://localhost:8080/api/products

Ví dụ kết quả:

[
  {
    "name": "Laptop MSI",
    "price": 25000000.00,
    "description": "Gaming Laptop",
    "quantity": 10,
    "id": 1
  }
]
POST
curl -X POST http://localhost:8080/api/products \
-H "Content-Type: application/json" \
-d '{"name":"Laptop MSI","price":25000000,"description":"Gaming Laptop","quantity":10}'
PUT
curl -X PUT http://localhost:8080/api/products/1 \
-H "Content-Type: application/json" \
-d '{"name":"Laptop MSI Gaming","price":30000000,"description":"Gaming Laptop Pro","quantity":15}'
DELETE
curl -X DELETE http://localhost:8080/api/products/1
15. Kiểm thử giao diện

Frontend cung cấp giao diện quản lý sản phẩm:

Virtual Web
Product Management System

┌───────────────────────────────────────┐
│             Add Product               │
│                                       │
│ Product name       Price              │
│ Description        Quantity           │
│                                       │
│ [ Add Product ]                       │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│             Product List              │
│                                       │
│ ID | Name | Price | Description | ... │
│                                       │
│                 Edit | Delete         │
└───────────────────────────────────────┘

Các thao tác được kiểm thử:

 Hiển thị danh sách sản phẩm
 Thêm sản phẩm
 Sửa sản phẩm
 Xóa sản phẩm
 Reload trang và kiểm tra dữ liệu
 Kiểm tra kết nối Frontend → Backend
 Kiểm tra Backend → PostgreSQL
## 16. So sánh môi trường

Một mục tiêu của dự án là so sánh giữa chạy ứng dụng trực tiếp trên máy và chạy trong môi trường container.

| Tiêu chí              | Chạy trực tiếp             | Docker / Dev Container        |
| --------------------- | -------------------------- | ----------------------------- |
| Java                  | Cài trên máy               | Được cung cấp trong container |
| Node.js               | Cài trên máy               | Được cung cấp trong container |
| PostgreSQL            | Cài và cấu hình trên máy   | Chạy bằng Docker              |
| Cấu hình môi trường   | Phụ thuộc máy              | Được chuẩn hóa                |
| Khả năng tái tạo      | Thấp hơn                   | Cao hơn                       |
| Cô lập môi trường     | Thấp                       | Cao                           |
| Triển khai            | Cần cấu hình thủ công      | Có thể sử dụng Docker Compose |
| Phù hợp làm việc nhóm | Có thể phát sinh khác biệt | Đồng nhất hơn                 |

## 17. Ưu điểm
### Docker
Cô lập ứng dụng và dependencies.
Dễ triển khai.
Có thể tạo lại môi trường.
Giảm vấn đề khác biệt giữa các môi trường.
### Docker Compose
Quản lý nhiều service.
Đơn giản hóa việc khởi động hệ thống.
Các service có thể giao tiếp với nhau thông qua Docker network.
Dễ mô tả kiến trúc của hệ thống bằng một file cấu hình.
### Dev Container
Chuẩn hóa môi trường phát triển.
Giảm yêu cầu cài đặt thủ công.
Dễ chuyển project sang máy khác.
Phù hợp với GitHub Codespaces.
### GitHub Codespaces
Có thể phát triển trực tiếp trên cloud.
Không phụ thuộc hoàn toàn vào cấu hình máy local.
Môi trường có thể được tạo lại từ repository.
## 18. Hạn chế
Docker sử dụng thêm tài nguyên hệ thống.
Việc debug container có thể phức tạp hơn chạy trực tiếp.
Người mới cần thời gian làm quen với Docker và container.
Việc cấu hình network, port và volume cần được hiểu rõ.
GitHub Codespaces phụ thuộc vào kết nối Internet và tài nguyên được cấp.
## 19. Kết quả đạt được

Dự án đã xây dựng được một hệ thống web hoàn chỉnh gồm:

React Frontend
       │
       ▼
Spring Boot Backend
       │
       ▼
PostgreSQL Database

Các thành phần được container hóa và quản lý thông qua Docker Compose.

Dev Container được sử dụng để chuẩn hóa môi trường phát triển và project có thể được triển khai trong GitHub Codespaces.

Hệ thống hỗ trợ đầy đủ các thao tác CRUD đối với sản phẩm.

## 20. Hướng phát triển

Trong các giai đoạn tiếp theo, dự án có thể mở rộng:

Hoàn thiện kiểm thử tự động.
Bổ sung unit test cho Backend.
Bổ sung integration test.
So sánh hiệu năng giữa Local và Container.
Đo thời gian khởi động ứng dụng.
Đánh giá mức sử dụng CPU và RAM.
Hoàn thiện triển khai trên GitHub Codespaces.
Bổ sung CI/CD.
Bổ sung authentication và authorization.
Mở rộng hệ thống quản lý sản phẩm.

## 21. Kết luận

Dự án minh họa việc ứng dụng môi trường ảo vào quá trình phát triển phần mềm thông qua Docker, Docker Compose, Dev Container và GitHub Codespaces.

Việc container hóa Frontend, Backend và Database giúp tạo ra một môi trường phát triển có tính độc lập và đồng nhất hơn.

Dev Container và GitHub Codespaces tiếp tục mở rộng khả năng tái tạo môi trường, giúp quá trình phát triển có thể được thực hiện trên nhiều máy hoặc môi trường khác nhau mà giảm sự phụ thuộc vào cấu hình local.

Qua dự án, có thể đánh giá được vai trò của môi trường ảo trong việc chuẩn hóa môi trường phát triển, triển khai ứng dụng và hỗ trợ làm việc nhóm.

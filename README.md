# Nghiên cứu và ứng dụng môi trường ảo trong phát triển phần mềm

## 1. Giới thiệu đề tài

Đề tài nghiên cứu và ứng dụng môi trường phát triển ảo trong quá trình xây dựng phần mềm web. Dự án sử dụng Dev Container và GitHub Codespaces để tạo ra môi trường phát triển có cấu hình thống nhất, giúp giảm sự khác biệt giữa các máy tính và đơn giản hóa quá trình thiết lập dự án.

Ứng dụng minh họa là một hệ thống quản lý sản phẩm, được xây dựng theo mô hình Frontend - Backend - Database, sử dụng React, Spring Boot và PostgreSQL.

Thông qua dự án, nhóm nghiên cứu việc thiết lập môi trường, triển khai ứng dụng, kiểm tra khả năng hoạt động và so sánh giữa môi trường phát triển trực tiếp trên máy tính với môi trường Dev Container.

## 2. Mục tiêu

Các mục tiêu chính của đề tài:

- Tìm hiểu khái niệm, đặc điểm và vai trò của môi trường phát triển ảo trong phát triển phần mềm.
- Nghiên cứu Dev Container và GitHub Codespaces.
- Xây dựng môi trường phát triển có cấu hình thống nhất cho ứng dụng web.
- Phát triển ứng dụng web gồm Frontend, Backend và Database.
- Kiểm tra khả năng khởi chạy, kết nối và vận hành các thành phần trong môi trường phát triển.
- So sánh việc phát triển trực tiếp trên máy tính với phát triển trong Dev Container.
- Đánh giá ưu điểm, hạn chế và khả năng áp dụng của môi trường phát triển ảo.

## 3. Công nghệ sử dụng

| Thành phần | Công nghệ | Vai trò |
|---|---|---|
| Frontend | React | Xây dựng giao diện người dùng |
| Công cụ Frontend | Vite | Chạy máy chủ phát triển và hỗ trợ xây dựng giao diện |
| Backend | Java 21, Spring Boot | Xây dựng API và xử lý nghiệp vụ |
| ORM | Spring Data JPA, Hibernate | Truy cập và quản lý dữ liệu |
| Database | PostgreSQL | Lưu trữ thông tin sản phẩm |
| Môi trường phát triển | Dev Container | Chuẩn hóa môi trường lập trình |
| Nền tảng phát triển trực tuyến | GitHub Codespaces | Cung cấp môi trường phát triển trên nền tảng đám mây |
| Quản lý mã nguồn | Git, GitHub | Lưu trữ và quản lý lịch sử mã nguồn |

## 4. Kiến trúc hệ thống

Dự án được tổ chức thành ba thành phần chính:

```text
Người dùng
    |
    v
Frontend - React + Vite
    |
    | HTTP Request / Response
    v
Backend - Spring Boot + Java 21
    |
    | Spring Data JPA / Hibernate
    v
Database - PostgreSQL
```

Các thành phần được phát triển trong môi trường Dev Container và có thể được mở thông qua GitHub Codespaces.

```text
GitHub Repository
        |
        v
GitHub Codespaces
        |
        v
Dev Container
        |
        +-- Frontend
        |
        +-- Backend
        |
        +-- PostgreSQL
```

Dev Container cung cấp môi trường phát triển được cấu hình sẵn. GitHub Codespaces cung cấp môi trường làm việc trực tuyến dựa trên cấu hình của repository.

Lưu ý: Dev Container là môi trường phát triển, không phải một thành phần nghiệp vụ của ứng dụng web. Việc sử dụng Dev Container cũng không đồng nghĩa với việc ứng dụng phải được đóng gói bằng Dockerfile hoặc Docker Compose.

## 5. Cấu trúc dự án

Cấu trúc chính của repository:

```text
virtual-environment-web-project/
├── .devcontainer/
│   └── devcontainer.json
├── backend/
│   ├── gradlew
│   ├── build.gradle
│   └── src/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
└── README.md
```

Chức năng của từng thành phần:

- `.devcontainer/devcontainer.json`: khai báo cấu hình môi trường phát triển.
- `backend/`: mã nguồn ứng dụng Spring Boot, API và xử lý dữ liệu.
- `frontend/`: mã nguồn giao diện React và cấu hình Vite.
- `README.md`: tài liệu mô tả, hướng dẫn chạy và đánh giá dự án.

## 6. Chức năng ứng dụng

Ứng dụng minh họa chức năng quản lý sản phẩm.

Các chức năng chính:

- Hiển thị danh sách sản phẩm.
- Xem thông tin một sản phẩm theo mã.
- Thêm sản phẩm mới.
- Cập nhật thông tin sản phẩm.
- Xóa sản phẩm.

Mỗi sản phẩm có các thuộc tính cơ bản:

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---|---|
| `id` | Long | Mã sản phẩm |
| `name` | String | Tên sản phẩm |
| `price` | BigDecimal | Giá sản phẩm |
| `description` | String | Mô tả sản phẩm |
| `quantity` | Integer | Số lượng |

## 7. API của ứng dụng

Backend cung cấp API REST tại đường dẫn `/api/products`.

| Phương thức | Endpoint | Chức năng |
|---|---|---|
| GET | `/api/products` | Lấy danh sách sản phẩm |
| GET | `/api/products/{id}` | Lấy thông tin sản phẩm theo mã |
| POST | `/api/products` | Tạo sản phẩm mới |
| PUT | `/api/products/{id}` | Cập nhật sản phẩm |
| DELETE | `/api/products/{id}` | Xóa sản phẩm |

Ví dụ kiểm tra API lấy danh sách sản phẩm:

```bash
curl -i http://localhost:8080/api/products
```

Nếu Backend đang hoạt động và kết nối cơ sở dữ liệu thành công, API sẽ trả về phản hồi HTTP cùng dữ liệu sản phẩm.

## 8. Yêu cầu môi trường

Để chạy dự án trực tiếp trên máy tính, cần chuẩn bị:

- Git.
- Java Development Kit (JDK) 21.
- Node.js tương thích với cấu hình của dự án.
- PostgreSQL.
- Trình soạn thảo mã nguồn, chẳng hạn Visual Studio Code.

Để sử dụng GitHub Codespaces, cần có repository trên GitHub và quyền truy cập Codespaces phù hợp.

Trong môi trường Dev Container, các công cụ được khai báo trong cấu hình sẽ được chuẩn bị theo cấu hình môi trường. PostgreSQL vẫn cần được cài đặt hoặc cung cấp và phải hoạt động để Backend có thể kết nối.

## 9. Khởi chạy dự án trên máy tính

### 9.1. Lấy mã nguồn

```bash
git clone https://github.com/ducbui2005hadd/virtual-environment-web-project.git
cd virtual-environment-web-project
```

### 9.2. Chuẩn bị PostgreSQL

Khởi động PostgreSQL và đảm bảo đã có cơ sở dữ liệu `virtual_web`.

Cấu hình kết nối hiện tại trong Backend:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/virtual_web
spring.datasource.username=postgres
spring.datasource.password=postgres
```

Thông tin tài khoản phải khớp với PostgreSQL đang sử dụng. Các giá trị trên là cấu hình phát triển hiện tại, không nên dùng nguyên trạng trong môi trường sản xuất.

Hibernate được cấu hình với `ddl-auto=update` để cập nhật cấu trúc bảng theo entity khi ứng dụng khởi động. Cấu hình này không thay thế cho việc sao lưu và quản lý thay đổi cơ sở dữ liệu trong hệ thống thực tế.

### 9.3. Khởi chạy Backend

Mở terminal tại thư mục gốc của repository:

```bash
cd backend
chmod +x gradlew
./gradlew bootRun
```

Backend mặc định sử dụng cổng `8080`.

Để kiểm tra, mở terminal khác và chạy:

```bash
curl -i http://localhost:8080/api/products
```

### 9.4. Khởi chạy Frontend

Mở một terminal khác:

```bash
cd frontend
npm install
npm run dev
```

Vite thường cung cấp địa chỉ phát triển `http://localhost:5173/`.

Nếu chạy trên máy chủ từ xa hoặc Codespaces, sử dụng lệnh:

```bash
npm run dev -- --host 0.0.0.0
```

Frontend sử dụng đường dẫn `/api` và cấu hình proxy trong Vite để chuyển yêu cầu API tới Backend tại cổng `8080`.

## 10. Sử dụng GitHub Codespaces

### Bước 1. Mở repository

Truy cập repository:

https://github.com/ducbui2005hadd/virtual-environment-web-project

Mở menu Code và tạo hoặc mở Codespace tương ứng với nhánh `main`.

### Bước 2. Mở môi trường phát triển

Codespaces sử dụng cấu hình trong `.devcontainer/devcontainer.json` để chuẩn bị môi trường.

Cấu hình hiện tại khai báo môi trường Java 21, Node.js 24, một số extension VS Code và các cổng cần sử dụng cho ứng dụng.

### Bước 3. Kiểm tra công cụ

Trong terminal của Codespace, chạy:

```bash
java -version
node -v
npm -v
git status
```

Đảm bảo Java và Node.js có thể sử dụng, đồng thời mã nguồn đang ở trạng thái mong muốn.

### Bước 4. Kiểm tra PostgreSQL

Nếu PostgreSQL được cài trực tiếp trong Codespace, kiểm tra trạng thái bằng:

```bash
pg_isready -h 127.0.0.1 -p 5432
```

Nếu dịch vụ chưa chạy và PostgreSQL đã được cài đặt, có thể khởi động bằng:

```bash
sudo service postgresql start
```

Sau đó kiểm tra lại cơ sở dữ liệu `virtual_web`, tài khoản kết nối và cấu hình Backend.

### Bước 5. Chạy ứng dụng

Khởi chạy Backend và Frontend theo hướng dẫn tại mục 9. Mở mục Ports trong Codespaces để truy cập các cổng được chuyển tiếp, thường là `8080` và `5173`.

### Bước 6. Kiểm tra hoạt động

- Truy cập giao diện Frontend.
- Kiểm tra API Backend.
- Kiểm tra dữ liệu trả về từ PostgreSQL.
- Thử các chức năng quản lý sản phẩm.
- Ghi nhận lỗi phát sinh nếu có.

## 11. Phương pháp nghiên cứu và thực nghiệm

Đề tài sử dụng phương pháp thực nghiệm và so sánh.

Hai môi trường được xem xét:

**Môi trường A - Chạy trực tiếp trên máy tính**

Các công cụ và dịch vụ được cài đặt, cấu hình trên máy tính cá nhân. Người phát triển tự đảm bảo các phiên bản công cụ, cấu hình và phụ thuộc cần thiết.

**Môi trường B - Dev Container / GitHub Codespaces**

Các cấu hình môi trường phát triển được khai báo trong repository. Người phát triển mở dự án trong Codespaces hoặc Dev Container và thực hiện các bước khởi chạy ứng dụng.

Cả hai môi trường cần sử dụng cùng phiên bản mã nguồn, cùng cấu hình ứng dụng và dữ liệu thử nghiệm tương đương để kết quả so sánh có ý nghĩa.

## 12. Tiêu chí đánh giá

| Tiêu chí | Nội dung đánh giá | Phương pháp |
|---|---|---|
| Thời gian thiết lập | Thời gian từ khi bắt đầu chuẩn bị đến khi có thể phát triển | Ghi thời gian thực tế |
| Tính nhất quán | Mức độ đồng nhất của phiên bản công cụ và cấu hình | Kiểm tra cấu hình và phiên bản |
| Khả năng khởi chạy | Khả năng khởi động Frontend và Backend | Thực hiện khởi chạy nhiều lần |
| Kết nối cơ sở dữ liệu | Khả năng kết nối PostgreSQL và truy vấn dữ liệu | Kiểm tra API và dữ liệu |
| Tính thuận tiện | Mức độ đơn giản khi thiết lập môi trường mới | Ghi nhận các bước cần thực hiện |
| Tài nguyên | Mức sử dụng CPU, RAM và thời gian phản hồi | Quan sát và ghi số liệu thực nghiệm |
| Khả năng tái tạo | Khả năng tạo lại môi trường từ repository | Thử thiết lập lại trong môi trường mới |

Không đưa ra kết luận định lượng trước khi thực hiện đo đạc. Các số liệu thực nghiệm cần được ghi nhận từ những lần chạy thực tế.

## 13. Quy trình thực nghiệm

### Thực nghiệm 1: Chạy trực tiếp

1. Chuẩn bị các công cụ cần thiết.
2. Cài đặt hoặc khởi động PostgreSQL.
3. Cấu hình cơ sở dữ liệu và Backend.
4. Khởi chạy Backend.
5. Cài đặt phụ thuộc và khởi chạy Frontend.
6. Kiểm tra các chức năng chính.
7. Ghi nhận thời gian thiết lập, lỗi và các vấn đề phát sinh.

### Thực nghiệm 2: Chạy trong Dev Container / Codespaces

1. Mở repository trong môi trường đã cấu hình.
2. Kiểm tra các phiên bản công cụ.
3. Kiểm tra và khởi động PostgreSQL nếu cần.
4. Khởi chạy Backend và Frontend.
5. Kiểm tra các chức năng tương tự thực nghiệm 1.
6. Ghi nhận thời gian, lỗi và các bước cần thực hiện.
7. So sánh kết quả giữa hai môi trường.

### Thực nghiệm 3: Kiểm tra khả năng tái tạo

1. Tạo hoặc mở một môi trường phát triển mới.
2. Lấy mã nguồn từ repository.
3. Thực hiện các bước thiết lập theo tài liệu.
4. Khởi chạy ứng dụng.
5. Ghi nhận các bước cần can thiệp thủ công và các khác biệt về cấu hình.

## 14. Bảng ghi nhận kết quả

Bảng dưới đây là mẫu để điền sau khi thực nghiệm, không phải số liệu đã đo.

| Tiêu chí | Chạy trực tiếp | Dev Container / Codespaces |
|---|---|---|
| Thời gian thiết lập | Chưa đo | Chưa đo |
| Thời gian khởi chạy ứng dụng | Chưa đo | Chưa đo |
| Số bước cấu hình thủ công | Chưa đo | Chưa đo |
| Phiên bản công cụ | Ghi nhận thực tế | Ghi nhận thực tế |
| Kết nối PostgreSQL | Chưa kiểm tra trong phép so sánh | Chưa kiểm tra trong phép so sánh |
| Các lỗi phát sinh | Ghi nhận thực tế | Ghi nhận thực tế |
| Khả năng thiết lập lại | Chưa đánh giá | Chưa đánh giá |
| Mức sử dụng tài nguyên | Chưa đo | Chưa đo |

Sau khi hoàn thành thực nghiệm, sử dụng số liệu thu được để phân tích ưu điểm, hạn chế và mức độ phù hợp của từng phương pháp.

## 15. Ưu điểm và hạn chế cần đánh giá

### 15.1. Dev Container và GitHub Codespaces

Các lợi ích cần kiểm chứng qua thực nghiệm:

- Cấu hình môi trường có thể được lưu cùng repository.
- Giảm số bước cài đặt thủ công trên máy phát triển mới.
- Hạn chế khác biệt về công cụ giữa những người tham gia dự án.
- Hỗ trợ tiếp cận môi trường phát triển trực tuyến.
- Thuận tiện khi thiết lập lại môi trường từ cấu hình đã khai báo.

Các hạn chế cần xem xét:

- Cần kết nối Internet khi sử dụng Codespaces.
- Việc sử dụng tài nguyên trực tuyến có thể chịu giới hạn hoặc chi phí.
- Dịch vụ cơ sở dữ liệu có thể cần được cài đặt và cấu hình riêng.
- Cấu hình Dev Container không tự động đảm bảo mọi phụ thuộc bên ngoài đều có sẵn.
- Hiệu năng phụ thuộc vào tài nguyên máy tính hoặc cấu hình môi trường trực tuyến.

### 15.2. Chạy trực tiếp trên máy tính

Ưu điểm có thể bao gồm khả năng làm việc với công cụ và dịch vụ cục bộ, ít phụ thuộc vào môi trường phát triển trực tuyến và dễ quan sát tài nguyên của máy.

Hạn chế có thể bao gồm việc phải tự cài đặt, cập nhật và đồng bộ các công cụ, cũng như khả năng phát sinh khác biệt giữa các máy tính.

Các nhận định trên là cơ sở đánh giá ban đầu. Kết luận cuối cùng cần dựa trên kết quả thực nghiệm của dự án.

## 16. Kết luận dự kiến

Dự án sử dụng một ứng dụng web ba thành phần để nghiên cứu vai trò của môi trường phát triển ảo trong quy trình xây dựng phần mềm.

Thông qua việc triển khai ứng dụng trên môi trường chạy trực tiếp và Dev Container / GitHub Codespaces, đề tài hướng tới đánh giá tính nhất quán của môi trường, thời gian thiết lập, khả năng khởi chạy, khả năng tái tạo và mức độ thuận tiện trong quá trình phát triển.

Kết luận chính thức sẽ được hoàn thiện sau khi thu thập và phân tích dữ liệu thực nghiệm.

## 17. Hướng phát triển

- Hoàn thiện quy trình thiết lập môi trường từ repository.
- Chuẩn hóa thêm các bước khởi tạo cơ sở dữ liệu.
- Bổ sung hướng dẫn xử lý lỗi thường gặp.
- Thực hiện nhiều lần đo để tăng độ tin cậy của kết quả so sánh.
- Bổ sung biểu đồ và bảng tổng hợp số liệu thực nghiệm.
- Đánh giá khả năng áp dụng Dev Container cho các dự án có quy mô và cấu trúc khác nhau.

## 18. Tài liệu tham khảo

1. Dev Container Specification: https://containers.dev/
2. GitHub Codespaces Documentation: https://docs.github.com/en/codespaces
3. Visual Studio Code - Development Containers: https://code.visualstudio.com/docs/devcontainers/containers
4. Spring Boot Documentation: https://docs.spring.io/spring-boot/
5. React Documentation: https://react.dev/
6. Vite Documentation: https://vite.dev/
7. PostgreSQL Documentation: https://www.postgresql.org/docs/

---

**Repository:** https://github.com/ducbui2005hadd/virtual-environment-web-project
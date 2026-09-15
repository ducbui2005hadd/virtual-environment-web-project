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

```text
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

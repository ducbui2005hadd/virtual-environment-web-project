import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:8080/api/products";

function App() {
    const [products, setProducts] = useState([]);

    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        quantity: ""
    });

    const [editingId, setEditingId] = useState(null);

    // GET - Lấy danh sách sản phẩm
    const fetchProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Xử lý nhập dữ liệu
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    // POST / PUT
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const productData = {
                name: form.name,
                price: Number(form.price),
                description: form.description,
                quantity: Number(form.quantity)
            };

            if (editingId === null) {
                // POST - Thêm sản phẩm
                await axios.post(API_URL, productData);
            } else {
                // PUT - Cập nhật sản phẩm
                await axios.put(
                    `${API_URL}/${editingId}`,
                    productData
                );
            }

            // Xóa dữ liệu form
            setForm({
                name: "",
                price: "",
                description: "",
                quantity: ""
            });

            setEditingId(null);

            // Cập nhật danh sách
            fetchProducts();

        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm:", error);
        }
    };

    // Chọn sản phẩm để sửa
    const handleEdit = (product) => {
        setEditingId(product.id);

        setForm({
            name: product.name,
            price: product.price,
            description: product.description || "",
            quantity: product.quantity
        });
    };

    // DELETE - Xóa sản phẩm
    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Bạn có chắc muốn xóa sản phẩm này?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await axios.delete(`${API_URL}/${id}`);

            fetchProducts();

        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
        }
    };

    // Hủy chỉnh sửa
    const handleCancel = () => {
        setEditingId(null);

        setForm({
            name: "",
            price: "",
            description: "",
            quantity: ""
        });
    };

    return (
        <div className="container">

            <h1>Virtual Web</h1>

            <p className="subtitle">
                Product Management System
            </p>

            <div className="form-section">

                <h2>
                    {editingId === null
                        ? "Add Product"
                        : "Edit Product"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Product name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        required
                    />

                    <div className="form-buttons">

                        <button type="submit">
                            {editingId === null
                                ? "Add Product"
                                : "Update Product"}
                        </button>

                        {editingId !== null && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </form>

            </div>

            <div className="list-section">

                <h2>Product List</h2>

                <table>

                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>

                    {products.length === 0 ? (

                        <tr>
                            <td colSpan="6">
                                No products found
                            </td>
                        </tr>

                    ) : (

                        products.map((product) => (

                            <tr key={product.id}>

                                <td>{product.id}</td>

                                <td>{product.name}</td>

                                <td>
                                    {product.price}
                                </td>

                                <td>
                                    {product.description}
                                </td>

                                <td>
                                    {product.quantity}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            handleEdit(product)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(product.id)
                                        }
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default App;
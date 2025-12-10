import { useParams } from "react-router-dom";
import { products } from "../data";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found.</h2>;

  return (
    <div className="page-container product-detail">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="detail-price">${product.price}</p>
        <p className="detail-desc">{product.description}</p>

        <button className="btn btn-primary">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

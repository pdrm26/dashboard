import { Link } from "react-router-dom";

export default function ProductItem({ product, onEdit, onRemove }) {
  const editItemHandler = (productId) => onEdit(productId);
  const removeItemHandler = (productId) => onRemove(productId);
  return (
    <tr className={product.editMode ? "selected-product" : ""}>
      <th scope="row">{product.id}</th>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm me-1"
          onClick={removeItemHandler.bind(null, product.id)}
        >
          Remove
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning me-1"
          onClick={editItemHandler.bind(null, product.id)}
        >
          Edit
        </button>
        <Link to={`/products/${product.id}`} className="btn btn-sm btn-info"> {/*can use useHistory to push the address history(`/products/${product.id}`) **same result*/}
          Info
        </Link>
      </td>
    </tr>
  );
}

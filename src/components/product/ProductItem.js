import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductItem({ product, onEdit, onRemove }) {
  const editItemHandler = (productId) => onEdit(productId);
  const removeItemHandler = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(productId);
        Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      }
    });
  };
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
        <Link to={`/products/${product.id}`} className="btn btn-sm btn-info">
          {" "}
          {/*can use useHistory to push the address history(`/products/${product.id}`) **same result*/}
          Info
        </Link>
      </td>
    </tr>
  );
}

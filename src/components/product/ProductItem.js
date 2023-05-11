export default function ProductItem({ product, onEdit }) {
  const editItemHandler = (productId) => onEdit(productId);
  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button type="button" className="btn btn-danger me-1">
          Remove
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={editItemHandler.bind(null, product.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

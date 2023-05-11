import ProductItem from "./ProductItem";

export default function ProductList({ products, onEditProduct }) {
  const onEditHandler = productId => onEditProduct(productId)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Group</th>
          <th scope="col">Price</th>
          <th scope="col">Management</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} onEdit={onEditHandler}/>
        ))}
      </tbody>
    </table>
  );
}

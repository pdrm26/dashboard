import { useHistory, useParams } from "react-router-dom";
import HelmetWrapper from "../components/HelmetWrapper";
import { products } from "../InitialData";

export default function Product() {
  const { productId } = useParams();
  const history = useHistory();
  const product = products.find((product) => product.id === Number(productId));

  return (
    <>
      <HelmetWrapper title={`Product - ${product.id}`} />
      <ul>
        <li>{product.id}</li>
        <li>{product.title}</li>
        <li>{product.category}</li>
        <li>{product.categoryId}</li>
        <li>{product.price}</li>
        <li>{product.editMode ? "true" : "false"}</li>
        <button onClick={() => history.goBack()}>Back</button>
      </ul>
    </>
  );
}

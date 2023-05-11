import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import { products, categories } from "../../InitialData";
import { useState } from "react";

export default function ProductContainer() {
  const [productsList, setProductsList] = useState(products);
  const [currentEditProduct, setCurrentEditProduct] = useState(productsList[0]);
  const [lastEditProduct, setlastEditProduct] = useState(productsList[0]);
  const onEditProductHandler = (productId) => {
    const productIndex = productsList.findIndex(
      (product) => product.id === productId
    );
    const newEditableProduct = productsList[productIndex];
    if (lastEditProduct) {
      lastEditProduct.editMode = false;
    }
    newEditableProduct.editMode = true;
    setlastEditProduct(newEditableProduct);
    setCurrentEditProduct(newEditableProduct);
  };
  const setProductsDataHandler = (productData) => {
    const productIndex = productsList.findIndex(
      (product) => product.id === Number(productData.id)
    );

    if (productIndex < 0) {
      setProductsList((prevProducts) => [productData, ...prevProducts]);
      return;
    }

    setProductsList((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === Number(productData.id)) {
          return productData;
        }
        return product;
      })
    );
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Manage Products</div>
        <div className="card-body">
          <div className="row my-4">
            <div className="col-md-7">
              <ProductList
                products={productsList}
                onEditProduct={onEditProductHandler}
              />
            </div>
            <div className="col-md-5">
              <ProductInfo
                categories={categories}
                currentProduct={currentEditProduct}
                onSetProductData={setProductsDataHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

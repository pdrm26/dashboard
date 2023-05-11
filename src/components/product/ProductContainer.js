import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import { products, categories, emptyProduct } from "../../InitialData";
import { useState } from "react";

export default function ProductContainer() {
  const [productsList, setProductsList] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(emptyProduct);
  const [lastEditProduct, setlastEditProduct] = useState(emptyProduct);

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
    setSelectedProduct(newEditableProduct);
  };

  const onRemoveProductHandler = (productId) => {
    const newProduct = productsList.filter(
      (product) => product.id !== productId
    );
    setProductsList(newProduct);
  };

  const setProductsDataHandler = (productData) => {
    if (productData.id === 0) {
      // Add a new product
      let lastProductIndex = productsList.at(-1).id
      setProductsList((prevProducts) => [...prevProducts, {...productData, id: lastProductIndex += 1}]);
    } else {
      // Edit the current product
      setProductsList((prevProducts) =>
        prevProducts.map((product) => {
          if (product.id === Number(productData.id)) {
            return productData;
          }
          return product;
        })
      );
    }

    setSelectedProduct(emptyProduct);
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
                onRemoveProduct={onRemoveProductHandler}
              />
            </div>
            <div className="col-md-5">
              <ProductInfo
                categories={categories}
                selectedProduct={selectedProduct}
                onSetProductData={setProductsDataHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

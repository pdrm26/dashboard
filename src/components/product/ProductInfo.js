import { useForm } from "react-hook-form";

export default function ProductInfo({ categories, currentProduct }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitFormHandler = (data) => console.log(data, errors);
  // console.log(watch("productPrice"));
  return (
    <form className="row g-3" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="col-md-6">
        <label htmlFor="productCode" className="form-label">
          Product Code
        </label>
        <input
          type="text"
          className="form-control"
          id="productCode"
          name="productCode"
          value={currentProduct.id}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="productTitle" className="form-label">
          Product Title
        </label>
        <input
          type="text"
          className="form-control"
          id="productTitle"
          name="productTitle"
          value={currentProduct.title}
        />
      </div>
      <div className="col-8">
        <label htmlFor="productsGroup" className="form-label">
          Group of Products
        </label>
        <select id="productsGroup" className="form-select" name="productsGroup">
          {categories.map(({ id, title }) => (
            <option value={id} key={id} selected={id === currentProduct.categoryId}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="col-4">
        <label htmlFor="productPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          value={currentProduct.price}
          {...register("productPrice", {
            required: "product price is required",
            pattern: /\d+/,
            maxLength: 6,
          })}
        />
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

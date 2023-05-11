import { useEffect  } from "react";
import { useForm } from "react-hook-form";

export default function ProductInfo({
  categories,
  currentProduct,
  onSetProductData,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitFormHandler = (formData) => {
    const categoryName = categories.find(
      (category) => category.id === Number(formData.categoryId)
    );
    const newFormData = {
      ...formData,
      category: categoryName.title,
      editMode: false,
    };
    onSetProductData(newFormData);
  };
  // console.log(watch("productPrice"));
  return (
    <form className="row g-3" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="col-md-3">
        <label htmlFor="productCode" className="form-label">
          Product Code
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          disabled
          readOnly
          {...register("id", { required: true, pattern: /\d+/ })}
        />
      </div>
      <div className="col-md-9">
        <label htmlFor="title" className="form-label">
          Product Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <p className="text-danger mt-1">Write a title for your product.</p>
        )}
      </div>
      <div className="col-9">
        <label htmlFor="categoryId" className="form-label">
          Group of Products
        </label>
        <select
          id="categoryId"
          className="form-select"
          name="categoryId"
          {...register("categoryId")}
        >
          {categories.map(({ id, title }) => (
            <option value={id} key={id}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="col-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          {...register("price", {
            required: true,
            pattern: /\d+/,
            maxLength: 6,
          })}
        />
        {errors.price?.type === "required" && (
          <p className="text-danger mt-1">The product price is required.</p>
        )}
        {errors.price?.type === "pattern" && (
          <p className="text-danger mt-1">Enter only numbers.</p>
        )}
        {errors.price?.type === "maxLength" && (
          <p className="text-danger mt-1">
            Max length of price is just 6 digits.
          </p>
        )}
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

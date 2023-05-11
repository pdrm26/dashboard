export default function ProductManagement() {
  return (
    <div className="container border mt-5 rounded overflow-hidden">
      <div className="row">
        <h2 className="col bg-light py-3 px-2">Manage Products</h2>
      </div>
      <div className="row my-4">
        <div className="col-md-7">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button type="button" className="btn btn-danger me-1">
                    Remove
                  </button>
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button type="button" className="btn btn-danger me-1">
                    Remove
                  </button>
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button type="button" className="btn btn-danger me-1">
                    Remove
                  </button>
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="productCode" className="form-label">
                Product Code
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="productTitle" className="form-label">
                Product Title
              </label>
              <input
                type="password"
                className="form-control"
                id="productTitle"
              />
            </div>
            <div className="col-8">
              <label htmlFor="productsGroup" className="form-label">
                Group of Products
              </label>
              <select id="productsGroup" className="form-select">
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input type="text" className="form-control" id="price" />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email.includes("@")) {
    errors.email = "Enter a valid mail";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be greater or equal to 8";
  }

  return errors;
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                  {formik.errors.email ? (
                    <div className="login-vlaidation-message">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {formik.errors.password ? (
                    <div className="login-vlaidation-message">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-google btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    <i className="me-2"></i> Sign in with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

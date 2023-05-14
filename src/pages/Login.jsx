import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import HelmetWrapper from "../components/HelmetWrapper";


export default function Login() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      if (values.email === "ped@me" && values.password === "behappyPedram26") {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: "pedram", token: "1024lj%)(Q#KJDF" })
        );
        history.push("/");
      } else {
        console.log(values);
      }
    },
  });
  return (
    <>
      <HelmetWrapper title="Login" />
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
                      id="floatingInput"
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      {...formik.getFieldProps("email")}
                      // onChange={formik.handleChange}
                      // value={formik.values.email}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    {formik.errors.email ? (
                      <div className="login-vlaidation-message">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      id="floatingPassword"
                      className="form-control"
                      placeholder="Password"
                      {...formik.getFieldProps("password")}
                      // onChange={formik.handleChange}
                      // value={formik.values.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.errors.password ? (
                      <div className="login-vlaidation-message">
                        {formik.errors.password}
                      </div>
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
    </>
  );
}

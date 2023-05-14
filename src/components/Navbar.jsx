import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand"
              exact
              to="/"
              activeClassName="menu-active"
            >
              Home
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/products"
                    activeClassName="menu-active"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/todos"
                    activeClassName="menu-active"
                  >
                    Todos
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

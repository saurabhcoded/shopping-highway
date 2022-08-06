import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" shadow-sm sticky-top">
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link href={"/"}>
            <a className="navbar-brand">
              <div className="d-flex align-items-center fw-bold">
                <Image
                  src={"/img/cart-logo.webp"}
                  width="60px"
                  height={"60px"}
                />
                ShopCart
              </div>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-sm-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <div className="lh-1 text-end">
                    <h5 className="fw-semibold text-dark">
                      Call us :+91 93183 12854
                    </h5>
                    <small>From 06:00AM to 06:00PM (Mon-Sat)</small>
                  </div>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href={"/about"}>
                  <a className="nav-link " aria-current="page" href="#">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/contact"}>
                  <a className="nav-link " aria-current="page" href="#">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/signin"}>
                  <a className="nav-link fw-bold">Sign in</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/register"}>
                  <a className="btn btn-dark rounded-pill px-4 py-2 fw-semibold">
                    Register
                  </a>
                </Link>
              </li>
              <li className="nav-item ms-sm-5">
                <Link href={"/cart"}>
                  <a className="nav-link ">
                    <i className="bi bi-bag fs-3"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

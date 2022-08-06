import Link from "next/link";
import React from "react";
import styles from "../styles/product.module.css";

const Product = (props) => {
  const product = props.data.attributes;
  const makeUrl = (url) => {
    return `http://localhost:1337` + `${url}`;
  };
  return (
    <div className={`${styles.product} m-3 bg-light rounded-2 p-4 shadow-sm`}>
      <Link href={`product/${product.slug}`}>
        <div className="d-flex flex-column align-items-center">
          <img
            src={makeUrl(product.images.data[0].attributes.url)}
            alt="image"
            height={"200px"}
            style={{ objectFit: "cover" }}
          />
          <div style={{ width: "200px" }}>
            <p>
              {product.title.slice(0, 20)}{" "}
              {product.title.length > 20 ? "..." : ""}
            </p>
            <p>
              {product.cod ? (
                <i className="bi bi-truck fs-6 text-white bg-success bg-opacity-75 px-2 pt-1 rounded">
                  {" "}
                  cash on delivery
                </i>
              ) : (
                <br />
              )}
            </p>
            <div>
              <h3 className="fw-semibold text-success">
                ₹{product.price}
                <span className="ms-2 fs-6 text-danger fw-regular">
                  <s>₹{product.mrp}</s>
                </span>
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-evenly">
              <button className="btn btn-sm btn-outline-dark rounded-0">
                Add Cart
              </button>
              <button className="btn btn-sm btn-dark rounded-0 ms-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

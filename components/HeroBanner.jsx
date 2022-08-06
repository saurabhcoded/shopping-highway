import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = (props) => {
  const banner = props.heroBanner.items.data.attributes;
  const imgurl =
    `http://localhost:1337` + `${banner.image.data.attributes.url}`;
  // console.log(imgurl);
  return (
    <div
      className="d-flex align-items-center"
      style={{
        minHeight: "60vh",
        overflow: "hidden",
      }}
    >
      <div className="row align-items-center justify-content-between">
        <div className="col-md-5 my-2 order-2 order-sm-1">
          <h2 className="fw-semibold">{banner.title}</h2>
          <p className="lh-sm text-secondary">{banner.description}</p>
          <Link href={banner.link}>
            <button className="btn btn-dark px-4 rounded-0 mt-4">
              Buy Now
            </button>
          </Link>
          <Link href={banner.link}>
            <button className="btn btn-outline-dark px-4 rounded-0 mt-4 ms-4">
              View More
            </button>
          </Link>
        </div>
        <div className="col-md-6 my-2 order-1 order-sm-2">
          <img
            className="rounded-4"
            src={imgurl}
            alt=""
            width={"100%"}
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

import React from "react";
import { fetchProductSlug } from "../../http";
import { useRouter } from "next/router";

const ProductDetails = ({ productData }) => {
  const { query } = useRouter();
  const param = query.slug;
  console.log(productData);
  return <div>{param}</div>;
};

export const getServerSideProps = async () => {
  // const { query } = useRouter();
  const product = await fetchProductSlug(
    "infinix-hot-12-pro-electric-blue-128-gb-8-gb-ram-1"
  );
  return {
    props: {
      productData: {
        items: product,
      },
    },
  };
};
export default ProductDetails;

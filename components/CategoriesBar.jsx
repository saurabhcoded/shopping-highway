import React from "react";
import styles from "../styles/category.module.css";

const CategoriesBar = (props) => {
  const categories = props.categories.items.data;
  const makeUrl = (url) => {
    return `http://localhost:1337` + `${url}`;
  };
  return (
    <div className="my-3 bg-white">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        {categories.map(function (data) {
          return (
            <div key={data.id} className={styles.category}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={makeUrl(data.attributes.icon.data.attributes.url)}
                  alt={data.attributes.title}
                  className={styles.categoryIcon}
                />
                <div className="mt-2  text-secondary">
                  <h6 className={styles.categoryText}>
                    {data.attributes.title}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesBar;

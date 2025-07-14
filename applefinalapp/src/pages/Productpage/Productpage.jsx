import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Productpage() {
  const { pid } = useParams(); // ✅ dynamic URL param
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((item) => item.product_url === pid);
        setProduct(found);
      });
  }, [pid]);

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const {
    product_name,
    product_brief_description,
    product_img,
    starting_price,
    price_range,
    product_description,
  } = product;

  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center bottom-50">
          <div className="col-12">
            <div className="title-wraper bold">{product_name}</div>
            <div className="brief-description">{product_brief_description}</div>
          </div>
        </div>

        <div className="row justify-content-center text-center product-holder h-100">
          <div className="col-sm-12 col-md-6 my-auto">
            <div className="starting-price">{`Starting at ${starting_price}`}</div>
            <div className="monthly-price">{price_range}</div>
            <div className="product-details">{product_description}</div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="product-image">
              <img src={product_img} alt={product_name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productpage;

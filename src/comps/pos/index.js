import React from "react";
import products from "../../../data/products.json";
import Cart from "./Cart";

export default function POSSection({ activeIndex }) {
  return (
    <div className={activeIndex == 2 ? "pos" : "none"}>
      <div className="products">
        <div className="nav">
          <div className="input_box">
            <input
              type="text"
              id="form-email"
              placeholder="Search for a product"
              name="email"
              // value={user.email}
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="list">
          <ul>
            {products.map((product, index) => {
              return (
                <li key={index}>
                  <div>
                    <h3>
                      {product.name} - {product.dosageForm}
                    </h3>
                    <p className="company">
                      <span className="company">Quanity Left: 18</span>
                      <span className="company">Sold: per sachet</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Cart />
    </div>
  );
}

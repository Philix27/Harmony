import React from "react";
import Link from "next/link";

export default function AdminSection({ activeIndex, setActiveIndex }) {
  return (
    <div className={activeIndex == 3 ? "admin" : "none"}>
      <a onClick={() => setActiveIndex(6)}>
        <div className="card">
          <h3>Add User</h3>
        </div>
      </a>
      <div className="card">
        <h3>Add Products</h3>
      </div>
      <a onClick={() => setActiveIndex(4)}>
        <div className="card">
          <h3>View User</h3>
        </div>
      </a>

      <a onClick={() => setActiveIndex(5)}>
        <div className="card">
          <h3>View All Products</h3>
        </div>
      </a>
      <div className="card">
        <h3>Printer Settings</h3>
      </div>
      <div className="card">
        <h3>All Orders</h3>
      </div>
      <div className="card">
        <h3>Daily Sales</h3>
      </div>
      <div className="card">
        <h3>Monthly Sales</h3>
      </div>
      <div className="card">
        <h3>Quarterly Sales</h3>
      </div>
      <div className="card">
        <h3>Fast moving products</h3>
      </div>
      <div className="card">
        <h3>Soon to expire</h3>
      </div>
    </div>
  );
}

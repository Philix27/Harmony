import React from "react";
import Sidebar from "../comps/sidebar/Sidebar";
import Home from "../comps/Home";
import POSSection from "../comps/pos";
import AdminSection from "../comps/admin";
import UsersSection from "../comps/users";
import ProductsSection from "../comps/products";
import TasksSection from "../views/tasks/task";

const styles = {
  display: "flex",
  flexDirection: "row",
};

export default function Index({ activeIndex, setActiveIndex }) {
  return (
    <div className="container">
      <Sidebar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <Home activeIndex={activeIndex} />
      <POSSection activeIndex={activeIndex} />
      <AdminSection activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <UsersSection activeIndex={activeIndex} />
      <ProductsSection activeIndex={activeIndex} />
      <TasksSection activeIndex={activeIndex} />
    </div>
  );
}

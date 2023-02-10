import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ activeIndex }) {
  return (
    <div className={activeIndex == 1 ? "home" : "none"}>
      <div className="section formsPage">
        <form action="#" className="form">
          {/* <form action="/api/auth/login" className="form" method="GET"> */}
          <div className="input_box">
            <label htmlFor="form-email" className="label">
              Email
            </label>
            <input
              type="text"
              id="form-email"
              placeholder="example@gmail.com"
              name="email"
              // value={user.email}
              // onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="form-password" className="label">
              Password
            </label>
            <input
              type="password"
              id="form-password"
              placeholder="Password"
              name="password"
              // value={user.password}
              // onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <input
              type="submit"
              value="Login"
              // onClick={handleSubmit}
              className="btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <header>HEADER</header>
      <ul>
        <li>
          <NavLink to={"/"}>Home </NavLink>
          <NavLink to={"/auth"}>Auth </NavLink>
          <NavLink to={"/feed"}>Feed </NavLink>
          <NavLink to={"/404"}>404 </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

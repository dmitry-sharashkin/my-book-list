import React from "react";

import { Outlet } from "react-router";

import BaseHeader from "./Header/BaseHeader";

export default function BaseLayout() {
  return (
    <>
      <BaseHeader />
      <Outlet />
    </>
  );
}

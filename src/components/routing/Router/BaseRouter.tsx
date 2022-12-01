import React from "react";

import { Route, Routes } from "react-router-dom";

import NotFound from "../../../pages/NotFound/NotFound";
import BaseLayout from "../../layout/BaseLayout/BaseLayout";

export default function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="auth" element={<div>Auth</div>} />
        <Route path="feed" element={<div>Feed</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

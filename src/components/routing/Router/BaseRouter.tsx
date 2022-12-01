import React from "react";

import { Route, Routes } from "react-router-dom";

import BookList from "@pages/BookList/BookList";
import NotFound from "@pages/NotFound/NotFound";
import BaseLayout from "@components/layout/BaseLayout/BaseLayout";

export default function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<BookList />} />
        <Route path="auth" element={<div>Auth</div>} />
        <Route path="feed" element={<div>Feed</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

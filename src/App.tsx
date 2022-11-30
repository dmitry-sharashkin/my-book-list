import React from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="auth" element={<div>Auth</div>} />
          <Route path="feed" element={<div>Feed</div>} />
          <Route
            path="*"
            element={
              <div>
                <h2> 404 Страница не найдена.</h2>
                <p>
                  Вернуться на <Link to={"/"}> главную</Link>.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

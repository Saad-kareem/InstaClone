import React from "react";
import Home from "./home/Home";
import SignUP from "./modules/autherization/SignUp";
import Login from "./modules/autherization/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Post from "./modules/createPost/Post";

const PrivateRoute = ({ children }) => {
  const IsUserLogin = window.localStorage.getItem("user:token") || false;
  const isFormPage = window.location.pathname.includes("acount");
  if (IsUserLogin && !isFormPage) {
    return children;
  } else if (!IsUserLogin && isFormPage) {
    return children;
  } else {
    const redirectUrl = IsUserLogin ? "/" : "/acount/login";
    return <Navigate to={redirectUrl} replace />;
  }
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/new-post"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />

          <Route
            path="/acount/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/acount/signup"
            element={
              <PrivateRoute>
                <SignUP />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

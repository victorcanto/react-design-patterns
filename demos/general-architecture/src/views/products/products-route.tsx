import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./products";
import AddProduct from "./add-product";
import EditProduct from "./edit-product";
import DeleteProduct from "./delete-product";
import ViewProduct from "./view-products";

const ProductsRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
          <Route path=":id/delete" element={<DeleteProduct />} />
          <Route path=":id" element={<ViewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProductsRoute;

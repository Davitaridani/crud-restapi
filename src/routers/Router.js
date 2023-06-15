import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "../components/ListTable";
import Create from "../components/Create";
import Update from "../components/Update";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default Router;

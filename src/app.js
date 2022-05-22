import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Mail from "./pages/Mail";
import FeedBack from './pages/FeedBack'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Layout>
        <Routes>
          <Route exact path="/dashboard" element={<Home/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/mail" element={<Mail/>} />
          <Route path="/feedback" element={<FeedBack/>} />

        </Routes>
    </Layout>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Cards from "./pages/Cards";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getProducts, getUser } from "./utils";
import { uid } from "uid";
import ProtectedRoute from "./components/ProtectedRoute";
import Single from "./components/Single";



function App() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const id = uid();

  const img = "https://picsum.photos/id/1/200/300";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState(getProducts("products"));

  const [user, setUser] = useState(getUser("user"));

  const login = () => {
    const newUser = { id: id, name: name, psw: psw };
    setUser(newUser);
  };

  const addProduct = () => {
    const newProduct = { id: id, img: img, title: title, price: price };
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("products", JSON.stringify(products));
  }, [user, products]);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add"
          element={
            <ProtectedRoute user={user}>
              <Add
                addProduct={addProduct}
                title={title}
                setTitle={setTitle}
                price={price}
                setPrice={setPrice}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/cards" element={<Cards products={products} />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/login"
          element={
            <Login
              login={login}
              name={name}
              setName={setName}
              psw={psw}
              setPsw={setPsw}
            />
          }
        />
        <Route path="/single/:id" element={<Single products={products} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

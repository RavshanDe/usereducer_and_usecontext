import React from "react";
import { storeData } from "../Data";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center font-semibold mt-2 py-4">
        useContext + useReducer Store
      </h1>
      <h2 className="text-4xl tracking-wide py-4 pl-8">New in</h2>
      <div className="flex flex-col item-center lg:grid lg:grid-cols-3 px-8">
        {storeData.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

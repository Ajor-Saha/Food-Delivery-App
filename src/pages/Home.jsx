import { FoodCard } from "../components/Card/FoodCard";
import { Delievery } from "../components/Delievery/Delievery";
import { Hero } from "../components/hero/Hero";
import foodCategoryImg01 from "../assets/imagesAll/hamburger.png";
import foodCategoryImg02 from "../assets/imagesAll/pizza.png";
import foodCategoryImg03 from "../assets/imagesAll/bread.png";
import whyImg from "../assets/imagesAll/location.png";

import products from "../assets/fake-data/products.js";
import { useEffect, useState } from "react";
import ProductCard from "../components/UI/product-card/ProductCard";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Testimonials from "../components/UI/slider/Testimonials";

function Home() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <div>
      <Hero />
      <FoodCard />
      <Delievery />
      <div className="mb-5">
        <div className="flex flex-col justify-center items-center gap-5 pb-5">
          <div>
            <h2 className="text-3xl text-red-500 font-bold">Popular Foods</h2>
          </div>
          <div className="bg-orange-100 flex w-9/12 gap-10 justify-center items-center px-5 py-5">
            <button
              className="bg-white px-5 py-2"
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button
              className="flex gap-2"
              onClick={() => setCategory("BURGER")}
            >
              <img src={foodCategoryImg01} alt="" width={30} height={30} />
              Burger
            </button>
            <button className="flex gap-2" onClick={() => setCategory("PIZZA")}>
              <img src={foodCategoryImg02} alt="" width={30} height={30} />
              Pizza
            </button>
            <button className="flex gap-2" onClick={() => setCategory("BREAD")}>
              <img src={foodCategoryImg03} alt="" width={30} height={30} />
              Bread
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {allProducts.map((item) => (
              <div>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row">
        <div className="md:w-[1200px] md:mt-10">
          <img src={whyImg} alt="" />
        </div>
        <div className="flex flex-col md:mt-32 lg:mt-52 px-5 ml-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-semibold">
              Why <b className="text-red-600">Ambrosyia</b>?
            </h3>
            <p className="text-sm">
              <span className="text-red-500">Ambrosyia</span> is a revolutionary
              food delivery app designed to make your dining experience more
              convenient, enjoyable, and hassle-free. With a wide range of
              restaurants, cuisines, and delivery options at your fingertips,
              you can satisfy your cravings in just a few taps.
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <div className="">
              <button className="mr-2">
                <AiOutlineCheckCircle size={15} />
              </button>
              <span>Fresh and tasty foods</span>
            </div>
            <div>
              <button className="mr-2">
                <AiOutlineCheckCircle size={15} />
              </button>
              <span>Quatity Support</span>
            </div>
            <div>
              <button className="mr-2">
                <AiOutlineCheckCircle size={15} />
              </button>
              <span>Order from any location</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28">
        <Testimonials/>
      </section>
    </div>
  );
}

export default Home;
 
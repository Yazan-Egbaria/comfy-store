import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  const carouselImages = [hero1, hero2, hero3, hero4];

  return (
    <div className="grid grid-cols-1 items-center gap-24 pt-20 md:grid-cols-2">
      {/* INFO */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold capitalize tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque id,
          nulla dicta tempore doloremque numquam accusantium. Debitis animi aut
          temporibus!
        </p>
        <Link to="/products" className="btn btn-primary mt-10">
          Our Products
        </Link>
      </div>
      {/* SLIDER */}
      <div className="h-[28rem carousel-center hidden space-x-4 rounded-box bg-neutral p-4 lg:carousel">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="h-full w-80 rounded-box object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

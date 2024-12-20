import { Link, useLoaderData } from "react-router-dom";

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group flex flex-col flex-wrap gap-y-4 rounded-lg bg-base-100 p-8 shadow-xl duration-300 hover:shadow-2xl sm:flex-row"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="text-md capitalize text-neutral-content">
                {company}
              </h4>

              {/* COLOR */}
            </div>

            <p className="ml-0 text-lg font-medium sm:ml-auto">
              ${price / 100}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;

import { Link } from "react-router-dom";

import { products } from "../../data/product";
import { stringToSlug } from "../../utils/stringToSlug";
export default function ProductList() {
  return (
    <section className='max-w-7xl mx-auto my-10 px-6'>
      <h2 className='text-xl font-semibold border-b pb-2 mb-6'>Products</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {products.map((product) => (
          <Link
            key={product.id}
            to={
              "/product/" + stringToSlug(product.name) // "Norton Crypto Miner Protection" -> "norton-crypto-miner-protection"
            }
          >
            <div className='border rounded-lg relative overflow-hidden bg-white hover:shadow-lg transition'>
              <span className='absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded'>
                -${product.discount}.00
              </span>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-40 object-contain p-4'
              />
              <div className='px-3 pb-4'>
                <p className='text-sm font-medium text-gray-800 truncate mb-2'>
                  {product.name.slice(0,22)}...
                </p>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-400 line-through text-sm'>
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className='text-lg font-bold text-gray-900'>
                    ${product.newPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

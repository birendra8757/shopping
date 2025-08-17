

import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import { stringToSlug } from "../utils/stringToSlug";
const ProductDetail = () => {
const { name } = useParams<{ name: string }>();
const product = products.find((p) => stringToSlug(p.name) == name);

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500">
        Product not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mobile-margin-top">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar Products */}
        <aside className="md:col-span-1 space-y-8  order-2 md:order-1">
          <div>
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-4">
              {products.slice(0, 5).map((item:any) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-2 hover:bg-gray-100 p-2 rounded transition"
                >
                  {/* Link to product details */}
                  <Link to={`/product/${stringToSlug(item.name)}`} className="flex items-center gap-3 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain border rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm truncate">{item.name.slice(0,22)}....</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-xs">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                        <span className="text-red-500 font-semibold text-sm">
                          ${item.newPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Tags */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-md">Norton 360 Deluxe</span>
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-md">Norton 360 Premium</span>
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-md">Norton 360 Standard</span>
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-md">Norton Antivirus</span>
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-md">Internet Security</span>
            </div>
          </div>
        </aside>

        {/* Main Product */}
        <main className="md:col-span-3 bg-white p-6 rounded-lg shadow md:order-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-82 h-82 transform transition duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="line-through text-gray-500 text-lg">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-red-600">
                  ${product.newPrice.toFixed(2)}
                </span>
              </div>

              {/* Features (Static) */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-sm">
                <li>Instant protection against viruses, spyware, ransomware and phishing</li>
                <li>Industry-leading protection at a ground-breaking price</li>
                <li>Powered by one of the world’s largest 24/7 threat monitoring networks</li>
                <li>Patented protection against zero day exploits and more</li>
                <li>Automatic silent updates ensure you have the latest protection</li>
                <li>Seamless upgrade options to additional protection as your needs grow</li>
                <li>Genuine license subscription</li>
                <li>Free 24/7 Norton customer support</li>
              </ul>

              {/* Quantity & Add to Cart */}
              {/* <div className="flex items-center gap-4">
                <div className="flex border rounded">
                  <button className="px-3 py-1">-</button>
                  <input
                    type="number"
                    defaultValue={1}
                    min="1"
                    className="w-16 text-center border-l border-r"
                  />
                  <button className="px-3 py-1">+</button>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold">
                  Add to cart
                </button>
              </div> */}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-t pt-6">
            <div className="flex gap-6 border-b pb-2 mb-4">
              <button className="font-semibold border-b-2 border-yellow-500 pb-1">
                Description
              </button>
              {/* <button className="text-gray-500">Meta Information</button>
              <button className="text-gray-500">Reviews (0)</button> */}
            </div>
            <div className="text-gray-700 space-y-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>
                Norton 360 Deluxe is the best antivirus software for 2022. By combining device
                security, online privacy, and identity protection, it lives up to its name:
                It’s a proper 360° security solution for your digital life.
              </p>
              <p>
                There is some room for improvement in its design. And the VPN could use a kill switch
                on Android, iOS, and macOS. But that’s all the imperfections we were able to find.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDetail;


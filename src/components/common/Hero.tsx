import { DollarSign, CheckCircle, User, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white rounded-2xl shadow-sm max-w-7xl mx-auto my-6 p-6 mobile-margin-top">
      {/* Top navigation links */}
      {/* <nav className="flex flex-wrap justify-center space-x-6 text-sm mb-6">
        {[
          "Home",
          "Shop",
          "About Us",
          "Cookies Policy",
          "FAQ",
          "Internet Based Ads",
          "Privacy Policy",
          "Disclaimer",
          "Contact Us",
          "Terms and Conditions",
        ].map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`${
              idx === 0 ? "text-yellow-500 font-medium" : "text-gray-800"
            } hover:text-yellow-500`}
          >
            {item}
          </a>
        ))}
      </nav> */}

      {/* Norton Logo & Phone */}
      <div className="flex flex-col items-center space-y-6">
        <img src="/banner.png" alt="Norton" className="h-auto w-full" />

        <div className="flex items-center bg-[#001F4D] text-white px-6 py-3 rounded-lg border-2 border-yellow-400 shadow-lg">
          <div className="bg-yellow-400 text-[#001F4D] p-2 rounded-full mr-3">
            <Phone className="h-6 w-6" />
          </div>
          <span className="text-lg md:text-2xl font-bold">
            +1 (844) 403-3240
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="flex items-center p-4 border rounded-lg">
          <DollarSign className="h-6 w-6 text-yellow-500 mr-3" />
          <div>
            <p className="font-semibold">Discount Available</p>
            <p className="text-sm text-gray-600">On all order over</p>
          </div>
        </div>

        {/* <div className="flex items-center p-4 border rounded-lg">
          <CheckCircle className="h-6 w-6 text-yellow-500 mr-3" />
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p className="text-sm text-gray-600">On all order over</p>
          </div>
        </div> */}

        <div className="flex items-center p-4 border rounded-lg">
          <User className="h-6 w-6 text-yellow-500 mr-3" />
          <div>
            <p className="font-semibold">Support 24*7</p>
            <p className="text-sm text-gray-600">On all order over</p>
          </div>
        </div>
      </div>
    </section>
  );
}

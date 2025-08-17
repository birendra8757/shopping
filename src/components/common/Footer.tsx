export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-800 border-t'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Contact Us */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Contact US</h3>

          <p className='mb-2'>
            Email :{" "}
            <a
              href='mailto:info@thequantumweb.shop'
              className='font-medium cursor-pointer hover:text-blue-600'
            >
              info@thequantumweb.shop
            </a>
          </p>

          <p className='mb-4'>
            Call :{" "}
            <a
              href='tel:+18444033240'
              className='font-medium cursor-pointer hover:text-blue-600'
            >
              +1 (844)-403-3240
            </a>
          </p>

          {/* Payment Logos */}
          <div className='flex space-x-2 mb-4'>
            <img src='/visa.png' alt='Visa' className='h-18 w-72 ' />
          </div>

          <img
            src='/Norton-Logo2.png'
            alt='Norton'
            className='h-16 mb-3 w-72'
          />
          <img
            src='/business.png'
            alt='Norton'
            className='h-18 w-64 mb-3 ml-4'
          />
        </div>

        {/* Product Tags */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Product tags</h3>
          <ul className='space-y-1'>
            <li>Norton 360 Deluxe</li>
            <li>Norton 360 Premium</li>
            <li>Norton 360 Standard</li>
            <li>Norton AntiVirus Basic</li>
            <li>Norton Internet Security</li>
          </ul>

          {/* <img src="/money-back3.jpg" alt="Norton" className="h-18  mb-3 " /> */}
        </div>
        <div>
          <img src='/money-back3.jpg' alt='Norton' className='h-18  mb-3 ' />
        </div>
        {/* My Account */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">My Account</h3>
          <ul className="space-y-1">
            <li>Cart</li>
            <li>Checkout</li>
            <li>My account</li>
            <li>Shop</li>
            <li>Wishlist</li>
            <li>FAQ</li>
          </ul>
          <img src="/moneyback.png" alt="Money Back" className="h-20 mt-4" />
        </div> */}

        {/* Site Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Site Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Cookies Policy</li>
            <li>Disclaimer</li>
            <li>FAQ</li>
            <li>Internet Based Ads</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation</li>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className='bg-gray-200 text-center py-4 text-sm'>
        Copyright © 2015-2025 thequantumweb.shop. All rights reserved.
      </div>
    </footer>
  );
}

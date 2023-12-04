import React from 'react'
import Image from "next/image";
export default function footer() {
  return (
    <div className="flex space-x-32 pt-6 bg-orange-100 md:flex-row flex-col">
      <div className="flex space-x-16">
        <span className="font-serif">
          <p className="font-bold text-xl font-serif">INFORMATION</p>
          <p>Home</p>
          <p>Blog</p>
          <p>About </p>
          <p>Menu</p>
          <p>Contact Us</p>
        </span>

        <span className="font-serif">
          <p className="font-bold text-xl font-serif">TOP ITEMS</p>
          <p>Pepperoni</p>
          <p>Swiss Mushroom</p>
          <p>Barbeque Chicken</p>
          <p>Vegetarian</p>
          <p>Ham & Cheese</p>
        </span>

        <span>
          <p className="font-bold text-xl font-serif">OTHERS</p>
          <p>Checkout</p>
          <p>Cart</p>
          <p>Product</p>
          <p>Locations</p>
          <p>Legal</p>
        </span>
      </div>
      <div>
        <span>
          <p className="font-bold text-xl font-serif">SOCIAL MEDIA</p>
          <div className="flex flex-row space-x-4">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={80}
              height={50}
            />
            <Image
              src="/pinterest.webp"
              alt="pinterest logo"
              width={80}
              height={50}
            />
            <Image
              src="/twitter.webp"
              alt="twitter logo"
              width={80}
              height={50}
            />
            <Image
              src="/instagram.webp"
              alt="instagram logo"
              width={80}
              height={50}
            />
          </div>
        </span>

        <p className="font-serif mt-6">
          Signup and get exclusive offers and coupon codes
        </p>
        <button className="px-4 py-2 bg-orange-500 text-white mt-6 rounded-full">
          SIGN UP
        </button>
      </div>
    </div>
  )
}

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Image from "next/image";
import { FaAmazonPay } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { PiPackageBold } from "react-icons/pi";
//import { CartItem } from './CartItem';

const tracking = () => {
  const trackingItems = [
    {
      name: "Burga pizza",
      extra: "",
      price: 40,
      quantity: 4,
      total: 160,
    },
  ];

  const subtotal = trackingItems.reduce((acc, item) => acc + item.total, 0);
  const discount = 79.6;
  const total = subtotal - discount;

  return (
    <>
    <NavBar/> 
    <div className="flex w-full bg-white">
      <div className="bg-white  w-full">
       
          <table className="w-full  border">
            <thead className=" border">
              <tr>
                <th className=" text-gray-700 font-medium text-left">
                  Order Id
                </th>
                <th className=" text-gray-700 font-medium text-left">
                  Customer
                </th>
                <th className=" text-gray-700 font-medium text-left">
                  Address
                </th>
                <th className="text-gray-700 font-medium text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                6553e94e699e1964952785a2
                <td>08132308959</td>
                <td>10 Abijo street</td>
              </tr>
            </tbody>
          </table>
        
        <div className="flex space-x-16">
          <FaAmazonPay className="w-20 h-12 mt-4" />
          <Image
            src="/preparing.png"
            alt="meal preparation"
            width={80}
            height={50}
          />
          <Image
            src="/bike-delivery.png"
            alt="delivery"
            width={80}
            height={50}
          />
          <PiPackageBold className="w-20 h-12 mt-4" />
        </div>
      </div>
      <div className=" bg-black w-[25%] pl-6 py-8">
        <h1 className="text-lg font-bold text-white pb-4">CART TOTAL</h1>
        <p className="text-white text-sm font-medium mb-2">
          Subtotal: {subtotal}
        </p>
        <p className="text-white text-sm font-medium mb-2">
          Discount: {discount}
        </p>
        <p className="text-white text-sm font-bold mb-4">Total: {total}</p>

        <button className=" bg-amber-600 text-white py-2 pb-2 px-6 rounded w-[80%]">
          PAID
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default tracking;

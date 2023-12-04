import Image from "next/image";
import NavBar from "@/NavBar/NavBar";
import Footer from "@/NavBar/footer";
import { FaCcPaypal } from "react-icons/fa6";

const CheckoutPage = () => {
  const cartItems = [
    {
      name: "Burga pizza",
      extra: "",
      price: 40,
      quantity: 4,
      total: 160,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const discount = 79.6;
  const total = subtotal - discount;

  return (
    <>
    <NavBar/>
    <div className="bg-white lg:flex">
      <div className="lg:w-[80%] w-[100%]">
        <table className="w-full  border">
          <thead className=" border">
            <tr>
              <th className=" text-gray-700 font-medium text-left">
                Product
              </th>
              <th className=" text-gray-700 font-medium text-left">
                Name
              </th>
              <th className=" text-gray-700 font-medium text-left">
                Extra
              </th>
              <th className="text-gray-700 font-medium text-left">
                Price
              </th>
              <th className=" text-gray-700 font-medium text-left">
                Quantity
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image src="/Burger.jpg" alt="order burger" width={80} height={50} />
              </td>
              <td>
                Burger pizza
              </td>
              <td>
               none
              </td>
          
              <td >
               $40
              </td>
              <td>
               4
              </td>
              <td>
              $160
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-black lg:w-[20%] w-[50%] pl-6 py-8 mr-10">
        <h1 className="text-lg font-bold text-white pb-4">CART TOTAL</h1>
        <p className="text-white text-sm font-medium mb-2">Subtotal: {subtotal}</p>
        <p className="text-white text-sm font-medium mb-2">Discount: {discount}</p>
        <p className="text-white text-sm font-bold mb-4">Total: {total}</p>
        <div className="flex flex-col space-y-4  ">
          <div><button className="bg-white text-blue-800 py-2 pb-2 px-6 rounded w-[80%]">
         CASH ON DELIVERY!
        </button></div>
        <div><button className="bg-amber-500 text-blue py-2 pb-2 px-6 rounded w-[80%]">
       <span className="text-blue-800">Pay</span> <span> Pal</span>
        </button></div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default CheckoutPage;

import Image from "next/image";
//import Menu from "./menu";
import NavBar from "@/NavBar/NavBar";
import Footer from "@/NavBar/footer";


import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
export default function page() {
  return (
    <>
    <NavBar/>
      <section className="">
        <div className="grid grid-cols-3">
          <div className="pt-10 pl-6 justify-around">
            <h1 className="text-6xl font-bold mt-4 mb-5">
              Handmade, <br />
              With an extra <br />
              Pinch of <i className="text-red-600">Love</i>
            </h1>


            <p className="text-4xl pt-5 text-gray-600 mb-8">
              Your best pizza app, you cannot go wrong with pizzon
            </p>
            <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-8 flex justify-center gap-2 text-md hover:text-gray-800">
              <FaShoppingCart className="text-2xl" />
              ORDER NOW
            </button>
          </div>
          <div className="flex flex-col pl-10 col-span-1 relative">
            <Image
              className=" block mx-auto top-1/4 transform -translate-y-1/8 translate-x-1/2 "
              src="/pizza.png"
              alt="Pizza"
              width={500}
              height={50}
              priority
            
            />
            <div className="flex pt-6 transform -translate-y-1/6 translate-x-1/2 gap-4 justify-between">
              <Image
                className=" block mx-auto"
                src="/pizza-onion.png"
                alt="Pizza"
                width={100}
                height={3}
                priority
    
              />
              <Image
                className=" block mx-auto  "
                src="/pizza2.png"
                alt="Pizza"
                width={200}
                height={50}
                priority
           
              />
            </div>
          </div>
          <div className="bg-yellow-500  rounded-l-full"></div>
        </div>
        <div className="flex gap-9">
          <div>
            <Image
              className="ml-6"
              src="/pizza3.png"
              alt="Pizza"
              width={400}
              height={50}
              priority
           
            />
          </div>
          <div className="pl-9 pt-7">
            <h2 className="text-3xl font-bold mt-11">
              Daily Fresh and <br />
              always tasty
            </h2>
            <p className="text-xl text-gray-600 mt-8 flex gap-7">
              We have many variations of pizza
              <br /> feel free to make your choice <br />
              they are all very tasty{" "}
              <Image
                className=" block mx-auto ml-8"
                src="/garlic.png"
                alt="Pizza"
                width={100}
                height={50}
                priority
               
              />
            </p>
          </div>
        </div>
        <div className="pl-6 pt-8">
          <h5 className="text-red-600 text-2xl font-bold">Popular Dishes</h5>
          <h2 className="font-bold text-4xl">Browse our Menu</h2>
        </div>
        {/* <Menu /> */}


        <div className="pl-8 pt-10 mt-6 bg-pink-50 mb-6">
          <h5 className="text-red-600 text-2xl font-bold mb-5">Our Strength</h5>
          <div className="flex justify-between">
            <h2 className="font-bold text-4xl">Why We Are The Best</h2>
            <Image
              className=""
              src="/pizza-strength.png"
              alt="pizza"
              width={200}
              height={50}
              priority
            
            />
          </div>
          <div className="flex justify-between pr-5 pb-8">
            <div>
              <Image
                className="mb-5"
                src="/food.png"
                alt="food"
                width={50}
                height={50}
                priority
                object-contain
              />
              <h6 className="font-bold mb-4">All Kinds Of Food</h6>
              <h6>
                We offer the best at affordable prices <br /> A trial will
                convince you
              </h6>
            </div>
            <div>
              <Image
                className="mb-5"
                src="/fresh-foods.png"
                alt="food"
                width={50}
                height={50}
                priority
           
              />
              <h6 className="font-bold mb-4">All Kinds Of Food</h6>
              <h6>
                We offer the best at affordable prices <br /> A trial will
                convince you
              </h6>
            </div>
            <div>
              <Image
                className="mb-5"
                src="/best-taste.png"
                alt="foods1"
                width={50}
                height={50}
                priority
              
              />
              <h6 className="font-bold mb-4">All Kinds Of Food</h6>
              <h6>
                We offer the best at affordable prices <br /> A trial will
                convince you
              </h6>
            </div>
            <div>
              <Image
                className="mb-5"
                src="/on-time-delivery.png"
                alt="foods1"
                width={50}
                height={50}
                priority
                object-contain
              />
              <h6 className="font-bold mb-4">All Kinds Of Food</h6>
              <h6>
                We offer the best at affordable prices <br /> A trial will
                convince you
              </h6>
            </div>
          </div>
        </div>
        <div className="pl-6">
          <Image
            className=""
            src="/leaf.png"
            alt="Pizza"
            width={150}
            height={100}
            priority
          
          />
          <h5 className="text-red-600 text-2xl font-bold">Customer Feedback</h5>
          <h2 className="font-bold text-4xl mt-3 mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-2 sm:px-3">
            <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
              <div className="">
                <Image
                  className="max-h-auto max-h-50 block mx-auto rounded-full"
                  src="/client-2.jpg"
                  alt="clients"
                  width={150}
                  height={50}
                  priority
                
                />
              </div>
              <div className="">
                <h3 className="font-bold text-xl ml-9 mt-4">Takar Bowa</h3>
                <p className="text-gray-600 my-6 text-xl ">
                  I have been ordering <br />my pizza from Pizzon <br />for about two
                  years now <br /> they have never disappointed me
                </p>
              </div>
            </div>
            <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
              <div className="">
                <Image
                  className="max-h-auto max-h-50 block mx-auto rounded-full"
                  src="/client-3.jpg"
                  alt="clients"
                  width={150}
                  height={50}
                  priority
                
                />
              </div>
              <div className="">
                <h3 className="font-bold text-xl ml-9 mt-4">Takar Bowa</h3>
                <p className="text-gray-600 my-6 text-xl ">
                  I have been ordering <br />my pizza from Pizzon <br />for about two
                  years now <br /> they have never disappointed me
                </p>
              </div>
            </div>
            <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
              <div className="">
                <Image
                  className="max-h-auto max-h-50 block mx-auto rounded-full"
                  src="/client-4.jpg"
                  alt="clients"
                  width={150}
                  height={50}
                  priority
                 
                />
              </div>
              <div className="">
                <h3 className="font-bold text-xl ml-9 mt-4">Takar Bowa</h3>
                <p className="text-gray-600 my-6 text-xl ">
                  I have been ordering <br />my pizza from Pizzon <br />for about two
                  years now <br /> they have never disappointed me
                </p>
              </div>
            </div>
            <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
              <div className="">
                <Image
                  className="max-h-auto max-h-50 block mx-auto rounded-full"
                  src="/client-2.jpg"
                  alt="clients"
                  width={150}
                  height={50}
                  priority
                 
                />
              </div>
              <div className="">
                <h3 className="font-bold text-xl ml-9 mt-4">Takar Bowa</h3>
                <p className="text-gray-600 my-6 text-xl ">
                  I have been ordering <br />my pizza from Pizzon <br />for about two
                  years now <br /> they have never disappointed me
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

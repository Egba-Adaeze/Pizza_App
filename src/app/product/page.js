import Image from "next/image";
import { GiFullPizza } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

export default function Page() {
  return (
    <>
      <div className="flex flex-row bg-white pt-12 gap-8">
        <div>
          <Image
            src="/Burger.jpg"
            alt="Burger image"
            width={500}
            height={200}
          />
        </div>
        <div className="grid">
          <p className="text-xl font-bold">Burger Pizza</p>
          <p className="flex flex-row gap-4">
            <span className="text-red-600 font-bold">$20</span>
            <span>8 Review</span>
          </p>
          <p>This is burger pizza</p>
          <p>Category: Chicken, lunch, pizza, burger</p>
          <p>Tags: Healthy, Organic, Chicken, sauce</p>
          <p className="font-bold">Choose Pizza Size</p>
          <div className="flex">
            <button>
              <GiFullPizza className="w-12 h-7" />
            </button>
            <button>
              <GiFullPizza className="w-12 h-10" />
            </button>
            <button>
              <GiFullPizza className="w-12 h-16" />
            </button>
          </div>
          <p>Choose additional ingredients</p>
          <div>
            <input type="checkbox" />
            <label>Sauce</label>
            <div className="flex flex-row gap-6">
              <div className="border-black rounded-md p-2">
                <input type="number" className="w-full " />
              </div>

              <div className="flex flex-row ">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-red-500">
                  ADD TO CART
                </button>
              </div>
              <div className="border rounded-full">
                <CiHeart className="w-10 h-7 pt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

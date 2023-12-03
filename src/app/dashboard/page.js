import Image from "next/image";
function Extra() {
  return (
    <section>
      
      <div className="flex gap-3 md:flex-row flex-col">
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg font-medium ">Products</h2>
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      {["Image", "Id", "Title", "Price", "Action"].map(
                        (i, k) => (
                          <th
                            key={k}
                            scope="col"
                            className="text-sm font-medium text-gray-900 text-left"
                          >
                            {i}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                        <Image
                          src="/Burger.jpg"
                          alt="order burger"
                          width={80}
                          height={50}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light truncate max-w-0 overflow-hidden">
                        Mark
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        @mdo
                      </td>
                      <td className="flex gap-1 text-sm text-gray-900 font-light  whitespace-nowrap">
                        <button className="p-1 mt-4 text-white rounded bg-green-600">
                          Edit
                        </button>
                        <button className="p-1 mt-4 text-white rounded bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg  font-medium px-2">Orders</h2>
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      {[
                        "Id",
                        "Customer",
                        "Total",
                        "Payment",
                        "Status",
                        "Action",
                      ].map((i, k) => (
                        <th
                          key={k}
                          scope="col"
                          className="text-sm font-medium text-gray-900  text-left"
                        >
                          {i}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                        <Image
                          src="/Burger.jpg"
                          alt="order burger"
                          width={80}
                          height={50}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        @mdo
                      </td>
                      <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                        @mdo
                      </td>
                      <td className="flex gap-1 text-sm text-gray-900 font-light  whitespace-nowrap">
                        <button className="p-1 mt-4 text-white rounded bg-green-600">
                          Next Stage
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extra;

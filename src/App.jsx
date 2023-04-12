import React from "react";

function App() {
  const pages = [
    { href: "products", title: "Products" },
    { href: "orders", title: "Orders" },
    { href: "inventory", title: "Inventory" },
    { href: "customers", title: "Customers" },
    { href: "analytics", title: "Analytics" },
    { href: "coupons", title: "Coupons" },
  ];
  const href = pages.find((page) => page.href === "orders");
  return (
    <div className="flex flex-col -m-px scroll-px-0">
      <aside className="flex flex-col w-full p-4 text-center bg-gray-800 scroll-mx-72">
        <img
          className="self-center w-24 h-24"
          src="/logo.png"
          alt="healthy juice bar logo"
        ></img>
        <h1 className="my-4 text-2xl font-medium tracking-wider text-white uppercase">
          Healthy Juice Bar
        </h1>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.href}>
              <>
                <a
                  href={page.href}
                  className="p-2 text-gray-200 rounded hover:bg-gray-700 hover:text-white"
                >
                  {page.title}
                </a>
                <span
                  className={` text-sm text-green-900 bg-green-100 p-1.5 rounded-full ${
                    href.href !== page.href ? "hidden" : null
                  }`}
                >
                  5
                </span>
              </>
            </li>
          ))}
        </ul>
        <span>&#9881;</span>
      </aside>
      <main>
        <div className="flex justify-center mt-4 text-transparent from-amber-400 to-orange-600 bg-gradient-to-br bg-clip-text place-items-center ">
          <img
            className="w-8 h-8 rounded-full backdrop:bg-emerald-900 drop-shadow backdrop-blur-xl"
            src="/mango.jpg"
          />
          <small className="mx-4 ">mango boy</small>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/*  container for all main content */}
          <h1 className="mt-6">All Products</h1>
          <div className="flex-row mb-4 drop-shadow-xl">
            {/*container to align buttons */}
            <button className="px-4 py-2 mt-4 font-bold text-white rounded bg-gradient-to-bl from-red-500 to-black ">
              &#43; Add
            </button>
            <select
              name="bulk"
              id="bulk"
              className="py-2 ml-2 text-red-600 capitalize border-2 border-red-200 border-solid rounded scroll-y focus:outline-none focus:border-rose-600"
            >
              <option>- bulk actions -</option>
              <option className="text-right">&#9998; edit</option>
              <option>&#8722; delete</option>
            </select>
          </div>
          <section className="overflow-x-auto drop-shadow">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="flex px-6 text-xs font-medium tracking-wider text-left uppercase bg-red-400">
                    <th className="flex px-6 py-4 text-xs font-medium tracking-wider uppercase ">
                      <input type="checkbox" className="mr-4 "></input>
                      item
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left uppercase ">
                      status
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left uppercase ">
                      category
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left uppercase ">
                      stock
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left uppercase ">
                      price
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left uppercase "></th>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex items-center p-6 py-4">
                    <input type="checkbox" />
                    <img src="" alt="" />
                    <p>Mango Smoothie</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import Pagination from "../Navigation/Pagination";
import Button from "../Button";

export default function Products() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);

    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 bg-gray-200 h-[100vh]">
      <ul className="px-4">
          <li>
            <div className="fontBold">Welcome Admin</div>
          </li>
          <li>
            <div className="p-4 hover:bg-slate-300 border-b">
              <Link to="/EditHomepage" className="text-black  ">
                <div>EditHomepage</div>
              </Link>
            </div>
            <div className="p-4 hover:bg-slate-300 border-b  ">
              <Link to="/Reports" className="text-black  ">
                <div>Analysis</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/EditOrder" className="text-black active">
                <div>Edit Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 bg-slate-400 border-b">
              <Link to="/Products" className="text-black ">
                <div>Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/NewProducts" className="text-black ">
                <div>New Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/Order" className="text-black ">
                <div>Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/" className="text-black ">
                <div>Logout</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-9 bg-white h-[100vh] overflow-scroll">
        <div className="p-4">
          <header>
            <div className=" my-4 items-center">
              <h1 className="font-bold text-lg block fontBold">Products</h1>
            <div className="block">
            <Button  text="Add New"/>
            </div>
            </div>
            <div className="my-4">
              <span className="text-sm">All (13)</span>
              <span className="ml-4 text-sm">Published (13)</span>
            </div>
          </header>
          <form className="bg-slate-200 rounded-lg shadow-lg p-4">
            <div className="flex flex-wrap mb-4 mt-4 items-center">
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Bulk Actions</option>
                  <option>Trash</option>

                </select>
              </div>
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Select a Category</option>
                </select>
              </div>
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Filter by Stock Status</option>
                  <option>in stock</option>
                  <option>out of stock</option>
                </select>
              </div>
              <div>
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Filter by Product Type</option>
                </select>
              </div>
              <div className="m-4">
                <button className="px-4 py-2 text-white bg-black rounded" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
          <table className="w-full border border-gray-300 bg-slate-200 rounded-lg shadow-lg p-4 mt-6">
            <thead>
              <tr>
                <th className="font-bold bg-slate-500 p-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="fontBold bg-slate-500  text-white p-4">Image</th>
                <th className="fontBold bg-slate-500  text-white p-4">Name</th>
                <th className="fontBold bg-slate-500  text-white p-4">SKU</th>
                <th className="fontBold bg-slate-500  text-white p-4">Stock</th>
                <th className="fontBold bg-slate-500  text-white p-4">Price</th>
                <th className="fontBold bg-slate-500  text-white p-4">Categories</th>
                <th className="fontBold bg-slate-500  text-white p-4">Tags</th>
                <th className="fontBold bg-slate-500  text-white p-4">Published</th>
              </tr>
            </thead>
            <tbody className="p-5 ">
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4 bg-white">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">SKU123</td>
                <td className="text-center p-4 bg-white">10</td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">Category A</td>
                <td className="text-center p-4 bg-white">Tag 1, Tag 2</td>
                <td className="text-center p-4 bg-white">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">SKU123</td>
                <td className="text-center p-4">10</td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">Category A</td>
                <td className="text-center p-4">Tag 1, Tag 2</td>
                <td className="text-center p-4">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4 bg-white">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">SKU123</td>
                <td className="text-center p-4 bg-white">10</td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">Category A</td>
                <td className="text-center p-4 bg-white">Tag 1, Tag 2</td>
                <td className="text-center p-4 bg-white">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">SKU123</td>
                <td className="text-center p-4">10</td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">Category A</td>
                <td className="text-center p-4">Tag 1, Tag 2</td>
                <td className="text-center p-4">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4 bg-white">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">SKU123</td>
                <td className="text-center p-4 bg-white">10</td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">Category A</td>
                <td className="text-center p-4 bg-white">Tag 1, Tag 2</td>
                <td className="text-center p-4 bg-white">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">SKU123</td>
                <td className="text-center p-4">10</td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">Category A</td>
                <td className="text-center p-4">Tag 1, Tag 2</td>
                <td className="text-center p-4">2023/08/19 at 4:15pm</td>
              </tr>
              
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>
                <td className="text-center p-4 bg-white">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">SKU123</td>
                <td className="text-center p-4 bg-white">10</td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">Category A</td>
                <td className="text-center p-4 bg-white">Tag 1, Tag 2</td>
                <td className="text-center p-4 bg-white">2023/08/19 at 4:15pm</td>
              </tr>
            </tbody>
          </table>
        </div>
         <div className="my-14">
         <Pagination/>
         </div>
      </div>
    </div>
  );
}

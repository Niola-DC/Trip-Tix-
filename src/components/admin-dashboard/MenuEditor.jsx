import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import yourJsonData from "../Navigation/menuOrder.json";

export default function MenuEditor() {
  const [activeDropdown1, setActiveDropdown1] = useState(false);
  const [activeDropdown2, setActiveDropdown2] = useState(false);
  const [showDeleteModal1, setShowDeleteModal1] = useState(false);
  const [showDeleteModal2, setShowDeleteModal2] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMenuTitle, setNewMenuTitle] = useState("");
  const [newMenuSubtitle, setNewMenuSubtitle] = useState("");
  const [newMenuItems, setNewMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({ text: "", link: "" });
  const [editedMenuData, setEditedMenuData] = useState(yourJsonData);

  const toggleDropdown1 = () => {
    setActiveDropdown1(!activeDropdown1);
    setActiveDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setActiveDropdown2(!activeDropdown2);
    setActiveDropdown1(false);
  };

  const openDeleteModal1 = () => {
    setShowDeleteModal1(true);
  };

  const closeDeleteModal1 = () => {
    setShowDeleteModal1(false);
  };

  const openDeleteModal2 = () => {
    setShowDeleteModal2(true);
  };

  const closeDeleteModal2 = () => {
    setShowDeleteModal2(false);
  };

  const deleteCard1 = () => {
    // Implement delete logic for card 1
    setShowDeleteModal1(false);
  };

  const deleteCard2 = () => {
    // Implement delete logic for card 2
    setShowDeleteModal2(false);
  };

  const [showEditModal1, setShowEditModal1] = useState(false);
  const [editContent1, setEditContent1] = useState({
    title: "New in",
    subtitle: "Frontpage",
    items: ["Tops", "Bottoms", "Accessories"],
  });

  const [showEditModal2, setShowEditModal2] = useState(false);
  const [editContent2, setEditContent2] = useState({
    title: "Gift",
    subtitle: "Frontpage",
    items: ["Tops", "Bottoms", "Accessories"],
  });
  const openEditModal1 = (subMenu) => {
    setShowEditModal1(true);
    const filteredCategories = editedMenuData.data.Categories.filter(
      (category) => category.subMenu === subMenu
    );
    setEditContent1(filteredCategories);
  };

  const closeEditModal1 = () => {
    setShowEditModal1(false);
  };

  const openEditModal2 = () => {
    setShowEditModal2(true);
  };

  const closeEditModal2 = () => {
    setShowEditModal2(false);
  };

  const saveEditedContent1 = () => {
    setShowEditModal1(false);
  };

  const saveEditedContent2 = () => {
    setShowEditModal2(false);
  };

  const openCreateModal = () => {
    console.log("Open create modal clicked");
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
    // Resets the input fields for next use
    setNewMenuTitle("");
    setNewMenuSubtitle("");
    setNewMenuItems([]);
    setNewMenuItem({ text: "", link: "" });
  };

  const saveNewMenu = () => {
    // Creates a newMenuData object to hold the form data
    const newMenuData = {
      title: newMenuTitle,
      subtitles: newMenuSubtitles.map((subtitle) => ({
        text: subtitle.text,
        items: subtitle.items.map((item) => ({
          text: item.text,
          link: item.link,
        })),
      })),
    };

    // Log the form data to the console
    console.log("New Menu Data:", newMenuData);

    closeCreateModal();
  };

  // Add these state variables
  const [newMenuSubtitles, setNewMenuSubtitles] = useState([
    {
      text: "",
      items: [{ text: "", link: "" }],
    },
  ]);

  // Update the addNewItem function
  const addNewItem = (subtitleIndex) => {
    setNewMenuSubtitles((prevSubtitles) => {
      const newSubtitles = [...prevSubtitles];
      newSubtitles[subtitleIndex].items.push({ text: "", link: "" });
      return newSubtitles;
    });
  };

  // Update the addNewSubtitle function
  const addNewSubtitle = () => {
    setNewMenuSubtitles((prevSubtitles) => [
      ...prevSubtitles,
      { text: "", items: [{ text: "", link: "" }] },
    ]);
  };

  // Update the updateSubtitle function
  const updateSubtitle = (subtitleIndex, newText) => {
    setNewMenuSubtitles((prevSubtitles) => {
      const newSubtitles = [...prevSubtitles];
      newSubtitles[subtitleIndex].text = newText;
      return newSubtitles;
    });
  };

  // Update the updateItem function
  const updateItem = (subtitleIndex, itemIndex, newValue, field) => {
    setNewMenuSubtitles((prevSubtitles) => {
      const newSubtitles = [...prevSubtitles];
      newSubtitles[subtitleIndex].items[itemIndex][field] = newValue;
      return newSubtitles;
    });
  };

  const removeItem = (subtitleIndex, itemIndex) => {
    setNewMenuSubtitles((prevSubtitles) => {
      const newSubtitles = [...prevSubtitles];
      newSubtitles[subtitleIndex].items.splice(itemIndex, 1);
      return newSubtitles;
    });
  };

  const groupedCategories = editedMenuData.data.Categories.reduce(
    (grouped, category) => {
      if (!grouped[category.subMenu]) {
        grouped[category.subMenu] = [];
      }
      grouped[category.subMenu].push(category.categories);
      return grouped;
    },
    {}
  );

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
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
            <div className="p-4 bg-slate-400 border-b">
              <Link to="/MenuEditor" className="text-white  ">
                <div>MenuEditor</div>
              </Link>
            </div>
            <div className="p-4  border-b hover:bg-slate-300 ">
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
            <div className="p-4  hover:bg-slate-300 border-b">
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
      <div className="main-content flex-1 bg-white h-[100vh] overflow-scroll p-4">
        <header>
          <div className="flex my-4 items-center">
            <h1 className="font-bold text-lg fontBold">Edit Menu </h1> &nbsp;
            <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white">
              <span>&#63;</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">
            You've reached the editing dashboard homepage, where you can modify
            and personalize your dashboard experience
          </p>
        </header>
        <div className="main-content flex-1 p-4">
          <div onClick={openCreateModal}>
            <Button text="Create new Menu" />
          </div>

          <div className="menu-structure">
            <div className="bg-white p-4 rounded-lg shadow-md my-4">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdown1}
              >
                <span className="text-xl font-semibold">New in</span>
                <span className="text-xl font-semibold">Frontpage</span>
                <div className="flex">
                  <span onClick={openDeleteModal1} className="mr-4">
                    <Button text="Delete" />
                  </span>
                  <span onClick={openEditModal1}>
                    <Button text="Edit" />
                  </span>
                  <span className="text-4xl ml-4 cursor-pointer">&#8964;</span>
                </div>
              </div>
              {activeDropdown1 && (
                <div className="mt-2">
                  <ul className="my-4">
                    <h1> Men's New Arrivals</h1>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Accessories</li>
                  </ul>
                  <ul>
                    <h1> Women's New Arrivals</h1>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md my-4">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdown2}
              >
                <span className="text-xl font-semibold">Gift</span>
                <span className="text-xl font-semibold">Frontpage</span>
                <div className="flex ">
                  <span onClick={openDeleteModal2} className="mr-4">
                    <Button text="Delete" />
                  </span>
                  <span onClick={openEditModal2}>
                    <Button text="Edit" />
                  </span>
                  <span className="text-4xl ml-4 cursor-pointer">&#8964;</span>
                </div>
              </div>
              {activeDropdown2 && (
                <div className="mt-2">
                  <ul className="my-4">
                    <h1> Men's New Arrivals</h1>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Accessories</li>
                  </ul>
                  <ul>
                    <h1> Women's New Arrivals</h1>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div>
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className=" py-4 fontBold text-2xl">Order Actions</h2>
            <p></p>
          </div>
          <button className="bg-black text-white  m-4 p-2 ">
            Move to Trash
          </button>
        </div>
      </div> */}
      {showDeleteModal1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay">
            <div className="bg-slate-400 p-4 rounded-lg shadow-md">
              <p className="mb-4">Are you sure you want to delete this card?</p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2"
                  onClick={deleteCard1}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2"
                  onClick={closeDeleteModal1}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDeleteModal2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-slate-400 p-4 rounded-lg shadow-md">
            <p className="mb-4">Are you sure you want to delete this card?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2"
                onClick={deleteCard2}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2"
                onClick={closeDeleteModal2}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay">
            <form
              className="bg-white p-4 rounded-lg shadow-md overflow-scroll h-[70vh] w-[70vh]"
              onSubmit={saveEditedContent1}
            >
              <h2 class="text-lg font-semibold mb-4">Edit Cards Content</h2>
              {Object.entries(groupedCategories).map(
                ([subMenu, categories]) => (
                  <div
                    key={subMenu}
                    className="bg-white p-4 rounded-lg shadow-md my-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">{subMenu}</span>
                      {/* ... (other controls) */}
                    </div>
                    <div className="mt-2">
                      <ul>
                        {categories.map((category, categoryIndex) => (
                          <li key={categoryIndex}>
                            <input
                              className="border m-4"
                              type="text"
                              value={category}
                              onChange={(e) =>
                                handleCategoryChange(
                                  subMenu,
                                  categoryIndex,
                                  e.target.value
                                )
                              }
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2"
                  onClick={closeEditModal1}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay">
            <form
              className="bg-white p-4 rounded-lg shadow-md"
              onSubmit={saveEditedContent2}
            >
              <h2 className="text-lg font-semibold mb-4">Edit Cards Content</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">
                  Title:
                </label>
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  value={editContent2.title}
                  onChange={(e) =>
                    setEditContent2((prevContent) => ({
                      ...prevContent,
                      title: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">
                  Items:
                </label>
                {editedMenuData.data.categories.length > 0 && (
                  <div>
                    {editedMenuData.data.categories.map((category) => (
                      <div
                        key={category.categories}
                        className="bg-white p-4 rounded-lg shadow-md my-4"
                      >
                        <div
                          className="flex justify-between items-center"
                          onClick={() => toggleDropdown(category.subMenu)}
                        >
                          <span className="text-xl font-semibold">
                            {category.subMenu}
                          </span>
                          {/* ... (other controls) */}
                        </div>
                        {activeDropdown === category.subMenu && (
                          <div className="mt-2">
                            <ul>
                              {category.categories.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2"
                  onClick={closeEditModal2}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay w-[800px] h-[50vh] overflow-scroll">
            <form className="bg-slate-400 p-4 rounded-lg shadow-md">
              {/* ... */}

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">
                  Title:
                </label>
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  value={newMenuTitle}
                  onChange={(e) => setNewMenuTitle(e.target.value)}
                />
              </div>

              {/* Add More Subtitles and Items */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">
                  Subtitles and Items:
                </label>
                {newMenuSubtitles.map((subtitle, subtitleIndex) => (
                  <div key={subtitleIndex} className="mb-2">
                    <input
                      type="text"
                      className="border rounded w-full p-2"
                      value={subtitle.text}
                      onChange={(e) =>
                        updateSubtitle(subtitleIndex, e.target.value)
                      }
                      placeholder={`Subtitle ${subtitleIndex + 1}`}
                    />
                    {subtitle.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-2 flex mt-4">
                        <input
                          type="text"
                          className="border rounded w-full p-2"
                          value={item.text}
                          onChange={(e) =>
                            updateItem(
                              subtitleIndex,
                              itemIndex,
                              e.target.value,
                              "text"
                            )
                          }
                          placeholder={`Item ${itemIndex + 1}`}
                        />
                        <button
                          type="button"
                          className="bg-red-500 text-white px-2 py-1 ml-2"
                          onClick={() => removeItem(subtitleIndex, itemIndex)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 mt-2"
                      onClick={() => addNewItem(subtitleIndex)}
                    >
                      Add Item
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 mt-2"
                  onClick={addNewSubtitle}
                >
                  Add Subtitle
                </button>
              </div>
              {/* ... */}
              <div className="flex justify-end">
                <span onClick={saveNewMenu} className="mr-4">
                  <Button text="Create Menu" />
                </span>

                <span onClick={closeCreateModal}>
                  <Button text="Cancel" />
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

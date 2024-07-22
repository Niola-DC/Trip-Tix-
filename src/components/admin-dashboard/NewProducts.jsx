import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function Layout() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [frontImage, setFrontImage] = useState("");
  const [alternateImage, setAlternateImage] = useState("");
  const [sizes, setSizes] = useState([]);
  const [upsell, setUpsell] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    price: "",
    salePrice: "",
    startDate: "",
    endDate: "",
    tags: "",
    gender: "",
  });

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory("");
    setShowModal(false);
  };
  const handleSubmit = () => {
    const data = {
      ...formData,
      categories,
      galleryImages,
      frontImage,
      alternateImage,
      sizes,
      upsell,
      gender,
    };
    console.log("Submitted data:", data);
    // Add your submission logic here

    // Reset the form and sidebar data
    setFormData({
      title: "",
      details: "",
      price: "",
      salePrice: "",
      startDate: "",
      endDate: "",
      tags: "",
    });
    setCategories([]);
    setGalleryImages([]);
    setFrontImage("");
    setAlternateImage("");
    setSizes([]);
    setUpsell("");
  };

  const handlePublish = () => {
    handleSubmit();
    // Add additional logic for publishing, e.g., show a success message, redirect, etc.
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
            <div className="p-4 hover:bg-slate-300 border-b">
              <Link to="/Products" className="text-black ">
                <div>Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 bg-slate-400 border-b">
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
      <div className="main-content flex-1 bg-white h-[100vh] p-4 ">
        <header>
          <div className="flex my-4 items-center">
            <h1 className="fontBold text-lg">Add New Products</h1>
          </div>
        </header>

        <div className="bg-slate-200 rounded-lg shadow-lg p-4">
          <form className="border border-gray-300 p-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="fontBold">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="details" className="fontBold">
                Product Details
              </label>
              <textarea
                id="details"
                name="details"
                rows="4"
                value={formData.details}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              ></textarea>
            </div>
            <div>
              <label htmlFor="price" className="fontBold">
                Product Price ₦
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="salePrice" className="fontBold">
                Sale Price ₦<span>(promo)</span>
              </label>
              <input
                type="text"
                id="salePrice"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              />
            </div>
            <div className="border-b border-gray-300 p-4 fontBold">
              <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
                Upsell
              </h2>
              <div>
                <input
                  type="text"
                  value={upsell}
                  onChange={(e) => setUpsell(e.target.value)}
                  className="border border-gray-300 w-full p-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="schedule" className="fontBold block">
                Schedule
              </label>
              <button
                type="button"
                onClick={handleScheduleClick}
                className="text-blue-500 underline"
              >
                {showSchedule ? "Choose Date" : "Cancel Schedule"}
              </button>
              {showSchedule && (
                <div>
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="border border-gray-300 w-full p-2"
                  />
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="border border-gray-300 w-full p-2"
                  />
                </div>
              )}
            </div>

            <Button text=" Add Product" />
          </form>
        </div>
      </div>

      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div className="">
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
              Publish
            </h2>
            <p>
              <span className="fontBold">Published</span> on August 20, 2023 at
              4:30pm
            </p>
          </div>
          <button
            className="bg-black text-white  m-4 p-2 "
            onClick={handlePublish}
          >
            Submit
          </button>
          <button className="bg-black text-white  m-4 p-2">
            Save to draft
          </button>
        </div>
        <div className="border-b border-gray-300 p-4 fontBold">
  <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
    Gender
  </h2>
  <div>
    <label className="mr-2">
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={handleGenderChange}
      />
      <span className="ml-1">Male</span>
    </label>
    <label className="mr-2">
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={handleGenderChange}
      />
      <span className="ml-1">Female</span>
    </label>
  </div>
</div>



        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Sizes
          </h2>
          <div className="flex items-center border-b">
            <label className="mr-2">
              <input
                type="checkbox"
                value="XL"
                checked={sizes.includes("XL")}
                onChange={(event) => {
                  const size = event.target.value;
                  if (sizes.includes(size)) {
                    setSizes(sizes.filter((s) => s !== size));
                  } else {
                    setSizes([...sizes, size]);
                  }
                }}
              />
              <span className="ml-1">XL</span>
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="L"
                checked={sizes.includes("L")}
                onChange={(event) => {
                  const size = event.target.value;
                  if (sizes.includes(size)) {
                    setSizes(sizes.filter((s) => s !== size));
                  } else {
                    setSizes([...sizes, size]);
                  }
                }}
              />
              <span className="ml-1">L</span>
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="M"
                checked={sizes.includes("M")}
                onChange={(event) => {
                  const size = event.target.value;
                  if (sizes.includes(size)) {
                    setSizes(sizes.filter((s) => s !== size));
                  } else {
                    setSizes([...sizes, size]);
                  }
                }}
              />
              <span className="ml-1">M</span>
            </label>
          </div>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Image
          </h2>
          <div>
            <label htmlFor="frontImage" className="fontBold">
              Front Image
            </label>
            <input
              type="file"
              id="frontImage"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                setFrontImage(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="alternateImage" className="fontBold">
              Alternate Image
            </label>
            <input
              type="file"
              id="alternateImage"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                setAlternateImage(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="image-preview flex my-4">
            {frontImage && (
              <img
                src={frontImage}
                alt="Front Image"
                className="image h-14 mr-4 "
              />
            )}
            {alternateImage && (
              <img
                src={alternateImage}
                alt="Alternate Image"
                className="image h-14"
              />
            )}
          </div>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Gallery
          </h2>
          <div>
            <input
              type="file"
              multiple
              onChange={(event) => {
                const files = event.target.files;
                const imagesArray = Array.from(files).map((file) =>
                  URL.createObjectURL(file)
                );
                setGalleryImages([...galleryImages, ...imagesArray]);
              }}
            />
          </div>
          <div className="gallery-images flex">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="gallery-image h-16 mr-4 my-4"
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Categories
          </h2>
          <div>
            <label>
              <input
                type="checkbox"
                value="Uncategorised"
                onChange={handleCategoryChange}
              />{" "}
              Uncategorised
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Casual"
                onChange={handleCategoryChange}
              />{" "}
              Casual
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Travel"
                onChange={handleCategoryChange}
              />{" "}
              Travel
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="text-blue-500 underline"
            >
              Create New Category
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Tags
          </h2>
          <label className="fontBold">Tags</label>
<div>
  <input
    type="text"
    className="border border-black"
    value={formData.tags}
    name="tags"  
    onChange={handleChange}
  />
</div>
        </div>
      </div>

      {/* Category Modal */}
      {showModal && (
        <div className="modal-overlay p-4">
          <div className="modal">
            <h2 className="fontBold text-2xl">Create New Category</h2>
            <form onSubmit={handleNewCategorySubmit}>
              <div>
                <label htmlFor="newCategory" className="fontBold">
                  Category Name
                </label>
                <input
                  type="text"
                  id="newCategory"
                  name="newCategory"
                  value={newCategory}
                  className="border border-black block"
                  onChange={(event) => setNewCategory(event.target.value)}
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="bg-black text-white mr-4 p-2">
                  Add Category
                </button>
                <button
                  className="bg-black text-white m-4 p-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

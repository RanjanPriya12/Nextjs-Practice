"use client";
import React, { useState } from "react";

export default function CreateProduct() {
  const categories = [
    { label: "Men", value: "men", name: "category" },
    { label: "Women", value: "women", name: "category" },
    { label: "Babies", value: "babies", name: "category" },
  ];
  const subCategories = [
    { label: "Jeans", value: "jeans", name: "subCategory" },
    { label: "Tops/Tshirts", value: "tops", name: "subCategory" },
    { label: "Shirts", value: "shirts", name: "subCategory" },
    { label: "Ethenic Dress", value: "ethenic", name: "subCategory" },
    { label: "Shoes", value: "shoes", name: "subCategory" },
    { label: "Cosmetic", value: "cosmetic", name: "subCategory" },
    { label: "Pants/Trausers", value: "pants", name: "subCategory" },
    { label: "Slipers", value: "sliper", name: "subCategory" },
  ];
  const sizes = [
    { label: "XS", value: "xs" },
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
  ];
  const colors = [
    { value: "white", name: "White" },
    { value: "black", name: "Black" },
    { value: "blue", name: "Blue" },
    { value: "gray", name: "Gray" },
    { value: "oily green", name: "Oily Green" },
    { value: "off white", name: "Off White" },
  ];
  const brands = [
    { label: "Levi's", value: "levis", name: "brand" },
    { label: "Road-Star", value: "roadstar", name: "brand" },
    { label: "Lee Cooper", value: "leecooper", name: "brand" },
    { label: "Flying Machine", value: "flyingMachine", name: "brand" },
    { label: "Denim Jeans", value: "denim", name: "brand" },
  ];
  const initialState = {
    title: "", //text input
    description: "", //text input
    color: "", //select input
    category: "", //select input
    subCategory: "", //select input
    size: [], //multiple checkbox input
    brand: "", //select input
    price: "", //text input
    discount: 5,
    images: [],
    stock: 1,
  };
  const [product, setProduct] = useState(initialState);
  const [checkedSize, setCheckedSize] = useState(
    new Array(sizes.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedSize = checkedSize.map((item, index) =>
      index === position ? !item : item
    );
  };
  const handleChange = () => {};
  return (
    <div className="createContainer" style={{ marginTop: "150px" }}>
      <h3>Add Product into Database</h3>
      <form className="createProduct">
        <div className="inputField">
          <label>Product Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label>Color</label>
          <select>
            <option value="">Select Color</option>
            {colors.map((color) => (
              <option value={color.value}>{color.name}</option>
            ))}
          </select>
        </div>
        <div className="inputField">
          <label>Brand</label>
          <select>
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand.value} value={brand.value}>
                {brand.label}
              </option>
            ))}
          </select>
        </div>
        <div className="inputField">
          <label>Product Category</label>
          <div>
            {categories.map((category, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name={category.name}
                  value={category.value}
                />
                <label>{category.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="inputField">
          <label>Product Size</label>
          <div>
            {sizes.map((size, index) => (
              <div>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name="size"
                  value={size.value}
                  checked={checkedSize[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{size.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="inputField">
          <label>Product Sub-Category</label>
          <div>
            {subCategories.map((category, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name={category.name}
                  value={category.value}
                />
                <label>{category.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="inputField">
          <label>Product Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label>Product Discount</label>
          <input
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label>Product Stocks</label>
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label>Product Images</label>
          <input
            //hidden
            accept="image/*"
            type="file"
            name="images"
            multiple
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

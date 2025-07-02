import React from "react";
import { addProduct } from "../services/api";

function CreateProduct() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);

    try {
      await addProduct(payload);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter a title..."
        />
      </div>
      <div className="form-group mb-2">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          placeholder="Enter a price..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateProduct;

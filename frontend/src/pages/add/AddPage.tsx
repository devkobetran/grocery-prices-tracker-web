import React from "react";
import AddGroceryItemForm from "./AddGroceryItemForm";
import AddStoreForm from "./AddStoreForm";
import { GroceryItem, Store } from "../../types/types"; 

const AddPage: React.FC = () => {
  // Handler for grocery item submission
  const handleAddGroceryItem = (item: GroceryItem) => {
    console.log("Added Grocery Item:", item);
    // Add logic to store the item in a database or state
  };

  // Handler for store submission
  const handleAddStore = (store: Store) => {
    console.log("Added Store:", store);
    // Add logic to store the store information in a database or state
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Add New Items</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Grocery Item Form</h2>
        <AddGroceryItemForm onSubmit={handleAddGroceryItem} />
      </section>

      <h3>Don't See Your Store?</h3>
      <p>Add your store here!</p>
      <section >
        <h2>Store Form</h2>
        <AddStoreForm onSubmit={handleAddStore} />
      </section>

    </div>
  );
};

export default AddPage;
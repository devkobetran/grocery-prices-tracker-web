import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import { GroceryItem } from "../../types/types";

interface AddNewGroceryItemProps {
  onSubmit: (item: GroceryItem) => void;
}

const AddGroceryItemForm: React.FC<AddNewGroceryItemProps> = ({ onSubmit }) => {
  const [item, setItem] = useState<Partial<GroceryItem>>({
    id: uuidv4(),
    name: "",
    barcodeValue: 0,
    category: "",
    description: "",
    stores: [],
  });

  const [storeDetails, setStoreDetails] = useState<
    { storeId: number; storeName: string; price: number; unit: string; quality: string }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStore = () => {
    setStoreDetails([
      ...storeDetails,
      { storeId: Date.now(), storeName: "", price: 0, unit: "", quality: "" },
    ]);
  };

  const handleStoreChange = (index: number, field: string, value: string | number) => {
    const updatedStores = [...storeDetails];
    updatedStores[index] = { ...updatedStores[index], [field]: value };
    setStoreDetails(updatedStores);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item.name && item.category && storeDetails.length > 0) {
      onSubmit({ ...item, stores: storeDetails, id: uuidv4() } as GroceryItem);
      setItem({ name: "", category: "", description: "", stores: [] });
      setStoreDetails([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={item.name || ""}
        onChange={handleInputChange}
        placeholder="Item Name"
        required
      />
      <input
        name="barcodeValue"
        type="text"
        value={item.barcodeValue || ""}
        onChange={handleInputChange}
        placeholder="Barcode Value"
        required
      />
      <select
        name="category"
        value={item.category || ""}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          Select a Category
        </option>

        <option value="Meat">Meat</option>
        <option value="Seafood">Seafood</option>
        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
        <option value="Bakery">Bakery</option>
        <option value="Grains (Rice, Noodles)">Grains (Rice, Noodles)</option>
        <option value="Coffee & Tea">Coffee & Tea</option>
        <option value="Seasoning & Spices">Seasoning & Spices</option>
        <option value="Frozen Items">Frozen Items</option>
        <option value="Snacks">Snacks</option>
        <option value="Packaged Items">Packaged Items</option>
        <option value="Sauces">Sauces</option>
        <option value="To-go Food">To-go Food</option>
        <option value="Household Items">Household Items</option>
        <option value="Toiletries">Toiletries</option>
        <option value="Personal Care">Personal Care</option>
        <option value="OTC Medicines">OTC Medicines</option>
        <option value="Drinks">Drinks</option>
        <option value="Dairy">Dairy</option>
        <option value="Health & Wellness">Health & Wellness</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="description"
        value={item.description || ""}
        onChange={handleInputChange}
        placeholder="Description (Optional)"
        rows={3}
      />

      <h3>Store Details</h3>
      {storeDetails.map((store, index) => (
        <div key={store.storeId} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Store Name"
            value={store.storeName}
            onChange={(e) => handleStoreChange(index, "storeName", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={store.price}
            onChange={(e) => handleStoreChange(index, "price", parseFloat(e.target.value))}
            required
          />
          <input
            name="unit"
            value={store.unit}
            onChange={(e) => handleStoreChange(index, "unit", e.target.value)}
            placeholder="Unit (e.g., kg, pcs)"
            required
          />
          <input
            type="text"
            placeholder="Quality (e.g., Premium, Organic)"
            value={store.quality}
            onChange={(e) => handleStoreChange(index, "quality", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddStore}>
        Add Store
      </button>
      <button type="submit">Add Grocery Item</button>
    </form>
  );
};

export default AddGroceryItemForm;

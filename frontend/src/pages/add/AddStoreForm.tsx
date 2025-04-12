import React, { useState } from "react";
import { Store } from "../../types/types";

interface AddNewStoreProps {
  onSubmit: (store: Store) => void; 
}

const AddStoreForm: React.FC<AddNewStoreProps> = ({ onSubmit }) => {
  const [store, setStore] = useState<Partial<Store>>({
    name: "",
    location: "",
    isActive: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStore((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (store.name && store.location) {
      onSubmit({ ...store, id: Date.now(), isActive: true } as Store);
      setStore({ name: "", location: "", isActive: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={store.name || ""}
        onChange={handleInputChange}
        placeholder="Store Name"
      />
      <textarea
        name="location"
        value={store.location || ""}
        onChange={(e) =>
          setStore((prev) => ({ ...prev, location: e.target.value }))
        }
        placeholder="Enter address"
        rows={3} // Sets the height to approximately 3 lines
        style={{ resize: "vertical" }} // Optional: Allow users to resize vertically only
      />
      <button type="submit">Add Store</button>
    </form>
  );
};

export default AddStoreForm;

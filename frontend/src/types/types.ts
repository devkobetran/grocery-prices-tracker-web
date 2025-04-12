export interface Store {
    id: number;
    name: string;
    location: string;
    isActive: boolean;
}

export interface GroceryItem {
    id: string;
    name: string;
    barcodeValue: number;
    category: string;
    description?: string;
    stores: {
        storeId: number; // Unique identifier for the store
        storeName: string; // Store name for display purposes
        price: number; // Price of the item at the store
        unit: string; // pounds, kg, etc
        quality: string; // Optional: Quality description (e.g., "Premium", "Organic")
    }[];
}


  
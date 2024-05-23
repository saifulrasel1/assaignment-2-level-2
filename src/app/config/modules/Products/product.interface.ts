export type Tvariant = {
  type: string;
  value: string;
};

export type Tinventory = {
  quantity: number;
  inStock: boolean;
};

export type Tproduct = {
  id:string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Tvariant[];
  inventory: Tinventory;
};

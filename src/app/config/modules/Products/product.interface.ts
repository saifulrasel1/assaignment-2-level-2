export type Tvariant = {
  type: string;
  value: string;
};

export type Tinventory = {
  quantity: number;
  inStock: boolean;
};

export type Tproduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: [Tvariant];
  inventory: Tinventory;
};

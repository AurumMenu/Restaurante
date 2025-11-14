
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

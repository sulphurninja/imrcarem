interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  image: Image[]
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  orders: Order[];

  services: string[];

  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

interface Service {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "service";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  product: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

export interface Order{
  order: string;
  mobno: string;
  name: string;
  service: string;
  product:{
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
}
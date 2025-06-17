const products = [
  {
    id: '1',
    title: 'Remera Negra',
    price: 3500,
    category: 'cat1',
    description: 'Remera de algodón básica',
    pictureUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    title: 'Jean Azul',
    price: 7500,
    category: 'cat2',
    description: 'Jean corte clásico',
    pictureUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    title: 'Campera',
    price: 12000,
    category: 'cat3',
    description: 'Campera impermeable',
    pictureUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '4',
    title: 'Remera Blanca',
    price: 3400,
    category: 'cat1',
    description: 'Remera lisa manga corta',
    pictureUrl: 'https://via.placeholder.com/150'
  }
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(prod => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 1000);
  });
};

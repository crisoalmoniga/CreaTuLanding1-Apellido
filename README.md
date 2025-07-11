# 🛒 React E-commerce | Proyecto Final Coderhouse

Este proyecto es una aplicación web de e-commerce desarrollada como **proyecto final del curso de React JS** en Coderhouse. Permite navegar un catálogo de productos, ver detalles, agregar al carrito y finalizar la compra generando una orden en Firebase.

---

## 🚀 Tecnologías utilizadas

- **React JS**
- **React Router DOM**
- **Context API**
- **Firebase (Firestore)**
- **Bootstrap 5**
- **JavaScript (ES6+)**
- **HTML & CSS**

---

## 📁 Estructura del proyecto

```
src/
├── assets/
│   └── logo.webp
├── components/
│   ├── Cart.jsx
│   ├── CartWidget.jsx
│   ├── CheckoutForm.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   └── NavBar.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   ├── context/
│   │   └── CartContext.js
│   └── firebaseProducts.js
│   
├── firebase/
│   ├── config.js
│   ├── db.js
│   ├── firebaseConfig.js
│   └── firebaseHelpers.js
├── App.js
└── index.js
```

---

## 🔄 Funcionalidades principales

- 🛍️ Vista de listado de productos
- 📂 Filtrado por categorías
- 🔎 Detalle de producto
- ➕ Agregar productos al carrito con control de stock
- 🧺 Visualización y gestión del carrito
- 📤 Formulario de checkout con validaciones
- 📦 Generación de orden de compra en Firestore
- ☁️ Conexión con base de datos Firebase

---

## 🔧 Cómo ejecutar este proyecto

1. Cloná el repositorio:

```bash
git clone https://github.com/crisoalmoniga/CreaTuLanding1-Apellido.git
cd CreaTuLanding1-Apellido
```

2. Instalá las dependencias:

```bash
npm install
```

3. Agregá tus credenciales de Firebase en el archivo:

```
src/firebase/firebaseConfig.js
```

4. Iniciá el proyecto:

```bash
npm start
```

---

## 📝 Notas del autor

Este proyecto fue realizado como ejercicio final integrador del curso de React de Coderhouse. Se aplicaron conceptos como:

- Separación de componentes contenedores y de presentación
- Manejo de rutas con React Router
- Uso de hooks personalizados y `useEffect`
- Renderizado condicional y control de estados
- Context API para manejo del carrito
- Conexión y persistencia de datos en Firestore

---

## 👨‍💻 Autor

**Cristian Almóniga**  
LinkedIn -> https://www.linkedin.com/in/cristianalmoniga/
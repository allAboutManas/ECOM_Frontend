export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "fan", label: "Fan" },
      { id: "ac", label: "AirCondtioner" },
      { id: "cooler", label: "Cooler" },
      { id: "refrigerator", label: "Refrigerator" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "bajaj", label: "Bajaj" },
      { id: "orient", label: "Orient" },
      { id: "samsung", label: "Samsung" },
      { id: "lg", label: "LG" },
      { id: "havells", label: "Havells" },
      { id: "crompton", label: "Crompton" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "fan",
    label: "Fan",
    path: "/shop/listing",
  },
  {
    id: "ac",
    label: "AirCondtioner",
    path: "/shop/listing",
  },
  {
    id: "cooler",
    label: "Cooler",
    path: "/shop/listing",
  },
  {
    id: "refrigerator",
    label: "Refrigerator",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  fan: "Fan",
  ac: "AirConditioner",
  cooler: "Cooler",
  refrigerator: "Refrigerator",
  accessories: "Accessories",
};

export const brandOptionsMap = {
  bajaj: "Bajaj",
  orient: "Orient",
  samsung: "Samsung",
  lg: "LG",
  havells: "Havells",
  crompton: "Crompton",
};

export const filterOptions = {
  category: [
    { id: "fan", label: "Fan" },
    { id: "ac", label: "AirCondtioner" },
    { id: "cooler", label: "Cooler" },
    { id: "refrigerator", label: "Refrigerator" },
    { id: "accessories", label: "Accessories" },
  ],
  brand: [
    { id: "bajaj", label: "Bajaj" },
    { id: "orient", label: "Orient" },
    { id: "samsung", label: "Samsung" },
    { id: "lg", label: "LG" },
    { id: "havells", label: "Havells" },
    { id: "crompton", label: "Crompton" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];

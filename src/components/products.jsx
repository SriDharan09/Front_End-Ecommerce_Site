import pr1 from "../assets/images/products/f1.jpg";
import pr2 from "../assets/images/products/f2.jpg";
import pr3 from "../assets/images/products/f3.jpg";
import pr4 from "../assets/images/products/f4.jpg";
import pr5 from "../assets/images/products/f5.jpg";
import pr6 from "../assets/images/products/f6.jpg";
import pr7 from "../assets/images/products/f7.jpg";
import pr8 from "../assets/images/products/f8.jpg";
import pro1 from "../assets/images/products/n1.jpg";
import pro2 from "../assets/images/products/n2.jpg";
import pro3 from "../assets/images/products/n3.jpg";
import pro4 from "../assets/images/products/n4.jpg";
import pro5 from "../assets/images/products/n5.jpg";
import pro6 from "../assets/images/products/n6.jpg";
import pro7 from "../assets/images/products/n7.jpg";
import pro8 from "../assets/images/products/n8.jpg";
import img1 from "../assets/images/products/img1.png";
// import img2 from "../assets/images/products/img2.png";
import img3 from "../assets/images/products/img3.png";
// import img4 from "../assets/images/products/img4.png";
// import img5 from "../assets/images/products/img5.png";
import img6 from "../assets/images/products/img6.png";
import img7 from "../assets/images/products/img7.png";
// import img8 from "../assets/images/products/img9.png";
import flipkart from "../assets/images/products/flipkart.png";
import jogger1 from "../assets/images/jean.png";
import tshirt from "../assets/images/products/tshirt.png";
import gown from "../assets/images/products/gownn.png";

const ratingStar = () => {
  return Math.floor(Math.random() * 5) + 2;
};

const randomPrice = () => {
  return Math.floor(Math.random() * 351) + 50;
};

// console.log(randomPrice());
export const PRODUCTS = [
  {
    id: 0,
    image: pr1,
    name: " Printed Spread Collar Casual Shirt",
    price: 351,
    brand: "Calvin Klein",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 1,
    image: pr2,
    name: "Men Regular Fit Floral Print Casual Shirt",
    price: 329,
    brand: "Nike",
    status: "in stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 2,
    image: pr6,
    name: "UniSex Rebel Bold Multi-Color Sport Tee ",
    price: 999,
    brand: "H&M",
    status: "in stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },

  {
    id: 3,
    image: pr4,
    name: "Men slim Fit Printed Casual Shirt",
    price: 450,
    brand: "Levi s",
    status: "in stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 4,
    image: pr5,
    name: "Men's Short Sleeve Vacation Shirt",
    price: 499.9,
    brand: "Under Armour",
    status: "In stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },

  {
    id: 5,
    image: pr3,
    name: "Printed Cut Away Collar Casual Shirt    ",
    price: 299,
    brand: "Adidas",
    status: "in stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 6,
    image: pr7,
    name: "Women's Cotton Classic 3/4 Trousers",
    price: 750,
    brand: "Puma",
    status: "In stock",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 7,
    image: pr8,
    name: "Women's Classic Fit Crewneck Tee's",
    price: 1200,
    status: "In stock",
    brand: "Ralph Lauren",
    rate: "50% Off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },

  {
    id: 8,
    image: pro1,
    name: "Slim Fit Solid Mandarin Collar Casual Shirt",
    price: 689,
    brand: "Calvin Klein",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 9,
    image: pro2,
    name: "Checked Solid Spread Collar Formal Shirt",
    price: 1350,
    brand: "Nike",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 10,
    image: pro3,
    name: "White Regular fit Formal Shirt",
    price: 1099,
    brand: "Adidas",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 11,
    image: pro4,
    name: "Printed Half Sleeve Shirt for Men",
    price: 529,
    brand: "Levi s",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 12,
    image: pro5,
    name: "Denim Cut Away Collar Casual Shirt",
    price: 1450,
    brand: "Under Armour",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 13,
    image: pro6,
    name: "Solid Men White Chino Shorts",
    price: 780,
    brand: "H&M",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },

  {
    id: 14,
    image: pro7,
    name: "Men Slim Fit Solid Party Shirt",
    price: 1850,
    brand: "Puma",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 15,
    image: pro8,
    name: "Women's Classic Fit Long sleeve Shirt",
    price: 960,
    brand: "Ralph Lauren",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
];

export const PRODUCTS1 = [
  {
    id: 16,
    image: img1,
    name: "Men Printed Round Neck Polyester White T-Shirt",
    price: 350,
    brand: "Calvin Klein",
    status: "in stock",
    rate: "60% off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 17,
    image: flipkart,
    name: "Graphic Print Round Neck Cotton, Red T-Shirt",
    price: 420,
    brand: "Nike",
    status: "in stock",
    rate: "60% off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 18,
    image: img3,
    name: "Women's Badge of SweatShirt Tee",
    price: 1450,
    brand: "Adidas",
    status: "in stock",
    rate: "20% off",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 19,
    image: jogger1,
    name: "Men Slim Mid Rise Faded Blue Jeans",
    price: 2000,
    brand: "Levi s",
    status: "Coming Soon",
    rate: "",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 20,
    image: tshirt,
    name: "Typography Round Neck Blend Black T-Shirt",
    price: 2190,
    brand: "Under Armour",
    status: "Coming Soon",
    rate: "normal rates",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 21,
    image: img6,
    name: "Black Cotton Hooded Neck Sweatshirt",
    price: 880,
    brand: "H&M",
    status: "Coming Soon",
    rate: "normal rates",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 22,
    image: img7,
    name: "Girls Maxi/Full Length Party Black Dress ",
    price: 3150,
    brand: "Puma",
    status: "out of stock",
    rate: "normal rates",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
  {
    id: 23,
    image: gown,
    name: "Embroidered Georgette Flared Gown",
    price: 4199,
    brand: "Ralph Lauren",
    status: "out of stock",
    rate: "normal rates",
    star: ratingStar(),
    randomPrice: randomPrice(),
  },
];

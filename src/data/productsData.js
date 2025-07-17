import Img1 from "../assets/women/img1.jpg";
import Img2 from "../assets/women/img2.jpg";
import Img3 from "../assets/women/img3.jpg";
import Img4 from "../assets/women/img4.jpg";
import Img5 from "../assets/women/img5.jpg";
import Img6 from "../assets/women/img6.jpg";
import Img7 from "../assets/women/img7.jpg";
import Img8 from "../assets/women/img8.jpg";
import Img9 from "../assets/women/img9.jpg";
import Img10 from "../assets/women/img10.jpg";
import Img11 from "../assets/women/img11.jpg";
import Img12 from "../assets/women/img12.jpg";
import Img13 from "../assets/women/img13.jpg";
import Img14 from "../assets/women/img14.jpg";
import Img15 from "../assets/women/img15.jpg";
import Img16 from "../assets/women/img16.jpg";
import Img17 from "../assets/women/img17.jpg";
import Img18 from "../assets/women/img18.jpg";
import Img19 from "../assets/women/img19.jpg";
import Img20 from "../assets/women/img20.jpg";

import Img21 from "../assets/men/img21.webp";
import Img22 from "../assets/men/img22.webp";
import Img23 from "../assets/men/img23.webp";
import Img24 from "../assets/men/img24.webp";
import Img25 from "../assets/men/img25.webp";
import Img26 from "../assets/men/img26.webp";
import Img27 from "../assets/men/img27.webp";
import Img28 from "../assets/men/img28.webp";
import Img29 from "../assets/men/img29.webp";
import Img30 from "../assets/men/img30.webp";
import Img31 from "../assets/men/img31.webp";
import Img32 from "../assets/men/img32.webp";
import Img33 from "../assets/men/img33.webp";
import Img34 from "../assets/men/img34.webp";
import Img35 from "../assets/men/img35.webp";
import Img36 from "../assets/men/img36.webp";

const ProductsData = [
  { id: 1, img: Img1, title: "Women Ethnic", rating: 5.0, color: "White", oldprice: 1299, price: 999, aosDelay: "0", category: "women" },
  { id: 2, img: Img2, title: "Women Western", rating: 4.5, color: "Red", oldprice: 1499, price: 1099, aosDelay: "100", category: "women" },
  { id: 3, img: Img3, title: "Goggles", rating: 4.7, color: "Black", oldprice: 899, price: 699, aosDelay: "200", category: "women" },
  { id: 4, img: Img4, title: "Printed T-Shirt", rating: 4.4, color: "Blue", oldprice: 799, price: 599, aosDelay: "0", category: "women" },
  { id: 5, img: Img5, title: "Fashion T-Shirt", rating: 4.6, color: "White", oldprice: 899, price: 649, aosDelay: "100", category: "women" },
  { id: 6, img: Img6, title: "Casual Wear", rating: 4.3, color: "Green", oldprice: 999, price: 749, aosDelay: "200", category: "women" },
  { id: 7, img: Img7, title: "Party Gown", rating: 4.9, color: "Blue", oldprice: 1999, price: 1599, aosDelay: "0", category: "women" },
  { id: 8, img: Img8, title: "Formal Shirt", rating: 4.2, color: "Blue", oldprice: 1299, price: 1099, aosDelay: "100", category: "women" },
  { id: 9, img: Img9, title: "Denim Jacket", rating: 4.5, color: "Blue", oldprice: 1799, price: 1399, aosDelay: "200", category: "women" },
  { id: 10, img: Img10, title: "Kurti Set", rating: 4.6, color: "White", oldprice: 1199, price: 899, aosDelay: "0", category: "women" },
  { id: 11, img: Img11, title: "Crop Top", rating: 4.4, color: "Purple", oldprice: 799, price: 599, aosDelay: "100", category: "women" },
  { id: 12, img: Img12, title: "Floral Dress", rating: 4.7, color: "Pink", oldprice: 1499, price: 1199, aosDelay: "200", category: "women" },
  { id: 13, img: Img13, title: "Hoodie", rating: 4.8, color: "Grey", oldprice: 1599, price: 1299, aosDelay: "0", category: "women" },
  { id: 14, img: Img14, title: "Anarkali", rating: 4.5, color: "Green", oldprice: 2499, price: 1999, aosDelay: "100", category: "women" },
  { id: 15, img: Img15, title: "Oversized Tee", rating: 4.3, color: "Blue", oldprice: 999, price: 749, aosDelay: "200", category: "women" },
  { id: 16, img: Img16, title: "Linen Shirt", rating: 4.6, color: "Cream", oldprice: 1199, price: 899, aosDelay: "0", category: "women" },
  { id: 17, img: Img17, title: "Maxi Dress", rating: 4.7, color: "Peach", oldprice: 1799, price: 1399, aosDelay: "100", category: "women" },
  { id: 18, img: Img18, title: "Check Shirt", rating: 4.4, color: "Maroon", oldprice: 1299, price: 999, aosDelay: "200", category: "women" },
  { id: 19, img: Img19, title: "Dungaree", rating: 4.5, color: "Blue", oldprice: 1399, price: 1099, aosDelay: "0", category: "women" },
  { id: 20, img: Img20, title: "Skater Skirt", rating: 4.3, color: "Yellow", oldprice: 899, price: 699, aosDelay: "100", category: "women" },

  { id: 21, img: Img21, title: "Men's Formal Shirt", rating: 4.5, color: "White", oldprice: 1199, price: 899, aosDelay: "200", category: "men" },
  { id: 22, img: Img22, title: "Men's Denim Jeans", rating: 4.4, color: "Blue", oldprice: 1499, price: 1199, aosDelay: "0", category: "men" },
  { id: 23, img: Img23, title: "Men's Polo T-Shirt", rating: 4.6, color: "Navy", oldprice: 999, price: 749, aosDelay: "100", category: "men" },
  { id: 24, img: Img24, title: "Men's Hooded Jacket", rating: 4.7, color: "Olive", oldprice: 1999, price: 1599, aosDelay: "200", category: "men" },
  { id: 25, img: Img25, title: "Men's Casual Blazer", rating: 4.3, color: "Black", oldprice: 2499, price: 1999, aosDelay: "0", category: "men" },
  { id: 26, img: Img26, title: "Men's Slim Trousers", rating: 4.2, color: "Beige", oldprice: 1399, price: 1099, aosDelay: "100", category: "men" },
  { id: 27, img: Img27, title: "Men's Half T-Shirt", rating: 4.1, color: "Maroon", oldprice: 799, price: 599, aosDelay: "200", category: "men" },
  { id: 28, img: Img28, title: "Men's Check Shirt", rating: 4.5, color: "Green", oldprice: 1299, price: 999, aosDelay: "0", category: "men" },
  { id: 29, img: Img29, title: "Men's Cargo Pants", rating: 4.4, color: "Grey", oldprice: 1599, price: 1299, aosDelay: "100", category: "men" },
  { id: 30, img: Img30, title: "Men's Sleeveless Jacket", rating: 4.6, color: "Navy", oldprice: 1799, price: 1499, aosDelay: "200", category: "men" },
  { id: 31, img: Img31, title: "Men's Track Pants", rating: 4.3, color: "Grey", oldprice: 999, price: 799, aosDelay: "0", category: "men" },
  { id: 32, img: Img32, title: "Men's Casual Shirt", rating: 4.4, color: "White & green", oldprice: 1099, price: 849, aosDelay: "100", category: "men" },
  { id: 33, img: Img33, title: "Men's Printed Tee", rating: 4.2, color: "White", oldprice: 899, price: 699, aosDelay: "200", category: "men" },
  { id: 34, img: Img34, title: "Men's Zipper Hoodie", rating: 4.5, color: "Maroon", oldprice: 1399, price: 1099, aosDelay: "0", category: "men" },
  { id: 35, img: Img35, title: "Men's Round Neck Tee", rating: 4.3, color: "Brown", oldprice: 799, price: 599, aosDelay: "100", category: "men" },
  { id: 36, img: Img36, title: "Men's Joggers", rating: 4.6, color: "Grey", oldprice: 1299, price: 999, aosDelay: "200", category: "men" },
];



export default ProductsData;

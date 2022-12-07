import image1 from "../../Assets/beans Flour.jpg";
import image2 from "../../Assets/malt3.jpg";
import image5 from "../../Assets/orijin.jpg";
import image8 from "../../Assets/Aboliki.jpg";
import image9 from "../../Assets/MaggiKnown.jpg";
import image10 from "../../Assets/big_stout.jpg";

import { BsCartPlus } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Beans Flour",
    price: 30,
    image: image1,
    quantity: 1,
    add: <BsCartPlus />,
  },
  {
    id: 2,
    name: "Malt",
    price: 10,
    quantity: 1,
    image: image2,
    add: <BsCartPlus />,
  },

  {
    id: 3,
    name: "Orijin Bitters",
    price: 20,
    image: image5,
    quantity: 1,
    add: <BsCartPlus />,
  },

  {
    id: 4,
    name: "Aboliki",
    price: 23,
    image: image8,
    quantity: 1,
    add: <BsCartPlus />,
  },
  {
    id: 5,
    name: "Maggi Cube",
    price: 34,
    image: image9,
    quantity: 1,
    add: <BsCartPlus />,
  },
  {
    id: 6,
    name: "Big Stout",
    price: 12,
    image: image10,
    quantity: 1,
    add: <BsCartPlus />,
  },
];

export default data;

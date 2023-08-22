import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "@/components/header";
import Items from "@/components/items";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export interface ItemOrder {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  img: string;
}

export default function Home() {
  const [cartItems, setCartItems] = useState<ItemOrder[]>([]);

  const items: ItemOrder[] = [
    {
      id: 1,
      title: "Chair gray",
      description:
        "Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "grey.jpg",
    },
    {
      id: 2,
      title: "Chair white",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "white.jpg",
    },
    {
      id: 3,
      title: "Chair red",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "red.jpg",
    },
    {
      id: 4,
      title: "Chair black",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "black.jpg",
    },
    {
      id: 5,
      title: "Chair brown",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "brown.jpg",
    },
    {
      id: 6,
      title: "Chair yellow",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      category: "chairs",
      price: "49.99",
      img: "yellow.jpg",
    },
  ];

  const addToOrder = (item: ItemOrder) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromOrder = (item: ItemOrder) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Head>
        <title>Home Familia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="wrapper">
        <Header cartItems={cartItems} />
        <Items items={items} onAdd={addToOrder} onRemove={removeFromOrder} />
        <Footer />
      </div>
    </>
  );
}

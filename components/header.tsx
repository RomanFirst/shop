import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ItemOrder } from "@/pages";
import Link from "next/link";
import Order from "./order";

interface HeaderProps {
  cartItems: Array<ItemOrder>;
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsInCart, setCartItems] = useState<Array<ItemOrder>>(
    cartItems || []
  );

  const showOrders = () => {
    return (
      <div>
        {cartItems?.map((el: ItemOrder) => (
          <Order key={el.id} item={el} onDelete={removeFromOrder} />
        ))}
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>No products</h2>
      </div>
    );
  };

  const removeFromOrder = (item: ItemOrder) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <header>
      <div>
        <span className="logo">Home Familia</span>
        <ul className="nav">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contacts"}>Contacts</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {cartItems && cartItems.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;

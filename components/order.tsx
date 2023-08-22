import { ItemOrder } from "@/pages";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface OrderProps {
  item: ItemOrder;
  onDelete: (item: ItemOrder) => void;
}

const Order: React.FC<OrderProps> = ({ item, onDelete }) => {
  const { title, price, img } = item;

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <div className="item">
      <Image src={"/img/" + img} alt={title} width={200} height={100} />
      <h2>{title}</h2>
      <b>{price}$</b>
      <FaTrash className="delete-icon" onClick={handleDelete} />
    </div>
  );
};

export default Order;

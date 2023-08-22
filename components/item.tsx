import { ItemOrder } from "@/pages";
import Image from "next/image";
import React, { Component } from "react";

export default function Item({
  item,
  onAdd,
  onRemove,
}: {
  item: ItemOrder;
  onAdd: (item: ItemOrder) => void;
  onRemove: (item: ItemOrder) => void;
}) {
  return (
    <div className="item">
      <Image
        src={"/img/" + item.img}
        alt={item.title}
        width={400}
        height={200}
      />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}

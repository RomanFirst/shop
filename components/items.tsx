import React from "react";
import { ItemOrder } from "@/pages";
import Item from "./item";

export default function Items({
  items,
  onAdd,
  onRemove,
}: {
  items: Array<ItemOrder>;
  onAdd: (item: ItemOrder) => void;
  onRemove: (item: ItemOrder) => void;
}) {
  return (
    <main>
      {items.map((el) => (
        <Item key={el.id} item={el} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </main>
  );
}

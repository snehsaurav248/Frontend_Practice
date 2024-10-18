import React from "react";
import "./List.css"

function List({ items }) {
  return (
    <ol className="item-list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ol>
  );
}
export default List;

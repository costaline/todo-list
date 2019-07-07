import React from "react";

import ListItem from "../list-item";

const List = props => {
  const { data, onDel, onEdit } = props;

  const listElement = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={id}
      >
        <ListItem
          {...itemProps}
          onDel={() => onDel(id)}
          onEdit={txt => onEdit(id, txt)}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="list-group">{listElement}</ul>
    </section>
  );
};

export default List;

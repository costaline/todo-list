import React, { Component, Fragment } from "react";

import Header from "../header";
import List from "../list";
import Form from "../form";

class App extends Component {
  state = {
    appData: []
  };

  createListItem(itemContent) {
    return {
      itemContent: itemContent,
      id: Math.floor(Math.random() * 1000 + 1),
      editMode: false
    };
  }

  delItem = id => {
    this.setState(({ appData }) => {
      const idx = appData.findIndex(elem => elem.id === id);
      const newAppData = [...appData.slice(0, idx), ...appData.slice(idx + 1)];

      return {
        appData: newAppData
      };
    });
  };

  addItem = text => {
    const newItem = this.createListItem(text);

    this.setState(({ appData }) => {
      const newAppData = [...appData, newItem];

      return {
        appData: newAppData
      };
    });
  };

  changeItem = (id, txt) => {
    this.setState(({ appData }) => {
      const idx = appData.findIndex(elem => elem.id === id);
      const oldItem = appData[idx];
      const newItem = {
        ...oldItem,
        editMode: !oldItem.editMode,
        itemContent: txt
      };

      const newAppData = [
        ...appData.slice(0, idx),
        newItem,
        ...appData.slice(idx + 1)
      ];

      return {
        appData: newAppData
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Form onAdd={this.addItem} />
          <List
            data={this.state.appData}
            onDel={this.delItem}
            onEdit={this.changeItem}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;

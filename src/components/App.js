import React from "react";
import "./App.css";

import UsersLayout from "./UsersLayout/UsersLayout";
import Users from "./Users/Users";

function App() {
  return (
    <div className="App">
      <UsersLayout>
        <Users />
      </UsersLayout>
    </div>
  );
}

export default App;

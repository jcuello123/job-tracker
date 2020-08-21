import React from "react";
import "./App.css";
import Input from "./components/input";
import { handleRemove, handleChangeStatus } from "./components/util/methods";
import TableHeaders from "./components/tableheaders";

class App extends React.Component {
  state = {};

  componentDidMount() {
    //retrieve jobs
    const jobs = localStorage.getItem("jobs");
    document.querySelector(".jobs").innerHTML = jobs;

    //re-add event listeners to remove buttons
    const remove_btns = document.getElementsByClassName("btn-danger");
    if (remove_btns.length > 0) {
      for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener("click", () =>
          handleRemove(remove_btns[i])
        );
      }
    }

    //re-add event listeners to select
    const selects = document.getElementsByTagName("select");
    if (selects.length > 1) {
      for (let i = 1; i < selects.length; i++) {
        selects[i].addEventListener("change", () =>
          handleChangeStatus(selects[i])
        );
      }
    }
  }

  render() {
    return (
      <div className="container entire">
        <Input />
        <TableHeaders />
        <div className="container jobs"></div>
      </div>
    );
  }
}

export default App;

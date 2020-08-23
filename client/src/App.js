import React from "react";
import "./App.css";
import Input from "./components/input";
import { handleRemove, handleChangeStatus } from "./components/methods/util";
import TableHeaders from "./components/tableheaders";
import Logo from "./components/logo";

class App extends React.Component {
  state = {};

  componentDidMount() {
    //retrieve jobs
    const jobs = localStorage.getItem("jobs");
    document.querySelector(".jobs").innerHTML = jobs;

    //re-add event listeners to remove buttons
    const remove_btns = document.getElementsByClassName("btn-danger");
    if (remove_btns.length > 0) {
      Array.from(remove_btns).forEach((btn) =>
        btn.addEventListener("click", () => handleRemove(btn))
      );
    }

    //re-add event listeners to select
    let selects = document.getElementsByTagName("select");
    if (selects.length > 1) {
      selects = Array.from(selects);
      selects.shift();
      for (let i = 0; i < selects.length; i++) {
        if (selects[i].id !== "sort_select") {
          selects[i].addEventListener("change", () =>
            handleChangeStatus(selects[i])
          );
        }
      }
    }

    const jobs_container = document.querySelector(".jobs");
    const tableheaders = document.querySelector(".tableheaders_container");
    tableheaders.style.display =
      jobs_container.childElementCount === 0 ? "none" : "block";
  }

  render() {
    return (
      <div className="container entire">
        <Logo />
        <Input />
        <TableHeaders />
        <div className="container jobs"></div>
      </div>
    );
  }
}

export default App;

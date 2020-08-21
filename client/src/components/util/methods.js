function handleSubmit() {
  //input values
  const company_name = document.getElementById("company_name_inp").value;
  const job = document.getElementById("job_title_inp").value;
  const status_inp = document.getElementById("status_inp");
  const date_applied_inp = document.getElementById("date_applied_inp").value;

  if (company_name === "" || (date_applied_inp !== "" && !validatedate(date_applied_inp))) {
    if (company_name === "") alert("You must enter a company name");
    if (date_applied_inp !== "" && !validatedate(date_applied_inp))
      alert("Invalid date format.");
  } else {
    //main container
    const jobs_div = document.querySelector(".jobs");

    //container for job
    const job_div = document.createElement("div");
    job_div.classList.add("container", "job");

    //company name
    const company_div = document.createElement("div");
    company_div.classList.add("company_name");
    const company = document.createElement("p");
    company.innerHTML = company_name;
    company_div.appendChild(company);

    //job title
    const job_title_div = document.createElement("div");
    job_title_div.classList.add("job_title");
    const job_title = document.createElement("p");
    job_title.innerHTML = job;
    job_title_div.appendChild(job_title);

    //status
    const status_div = document.createElement("div");
    status_div.classList.add("status");

    const select = document.createElement("select");

    const defaultOption = document.createElement("option");
    defaultOption.value = "select";
    defaultOption.text = "Select a status";

    const awaiting_res_opt = document.createElement("option");
    awaiting_res_opt.value = "awaiting_res";
    awaiting_res_opt.text = "Awaiting Response";

    const no_res_opt = document.createElement("option");
    no_res_opt.value = "no_res";
    no_res_opt.text = "No Response";

    const hired_opt = document.createElement("option");
    hired_opt.value = "hired";
    hired_opt.text = "Hired";

    select.appendChild(defaultOption);
    select.appendChild(awaiting_res_opt);
    select.appendChild(no_res_opt);
    select.appendChild(hired_opt);

    //date applied
    const date_applied_div = document.createElement("div");
    const date_applied = document.createElement("p");
    date_applied_div.classList.add("date_applied");
    date_applied.innerHTML = date_applied_inp;
    date_applied_div.appendChild(date_applied);

    //set selected to true in order to save in local storage correctly
    const index = status_inp.selectedIndex;
    select.options[index].setAttribute("selected", true);
    
    //update bg color according to status
    const statusText = select.options[index].text;
    updateStatusColor(job_div, statusText);

    select.addEventListener("change", () => handleChangeStatus(select));

    status_div.appendChild(select);

    //remove button
    const remove_btn_div = document.createElement("div");
    remove_btn_div.classList.add("delete_btn");
    const remove_btn = document.createElement("button");
    remove_btn.innerHTML = "Remove";
    remove_btn.classList.add("btn", "btn-danger");
    remove_btn.addEventListener("click", () => handleRemove(remove_btn));
    remove_btn_div.appendChild(remove_btn);

    job_div.appendChild(company_div);
    job_div.appendChild(job_title_div);
    job_div.appendChild(status_div);
    job_div.appendChild(date_applied_div);
    job_div.appendChild(remove_btn_div);

    jobs_div.appendChild(job_div);

    //change select to proper value
    select.selectedIndex = status_inp.selectedIndex;

    //clear input after submission
    document.getElementById("company_name_inp").value = "";
    document.getElementById("job_title_inp").value = "";
    document.getElementById("status_inp").selectedIndex = 0;
    document.getElementById("date_applied_inp").value = "";

    //save jobs
    localStorage.setItem("jobs", jobs_div.innerHTML);
  }
}

function handleRemove(btn) {
  const jobs_div = document.querySelector(".jobs");
  btn.parentNode.parentNode.remove();
  localStorage.setItem("jobs", jobs_div.innerHTML);
}

function handleChangeStatus(select) {
  const jobs_div = document.querySelector(".jobs");
  const job_div = select.parentNode.parentNode;
  const index = select.selectedIndex;
  const statusText = select.options[index].text;

  //update bg color according to new status
  job_div.removeAttribute("class");
  updateStatusColor(job_div, statusText);

  //clear previous selected option
  for (let i = 0; i < select.options.length; i++) {
    select.options[i].removeAttribute("selected");
  }

  select.options[index].setAttribute("selected", true);

  localStorage.setItem("jobs", jobs_div.innerHTML);
}

//source: https://www.w3resource.com/javascript/form/javascript-date-validation.php#:~:text=2.,yyyy%20is%20a%20valid%20year.
function validatedate(inputText) {
  var dateformat = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
  // Match the date format through regular expression
  if (inputText.match(dateformat)) {
    //Test which seperator is used '/' or '-'
    var opera1 = inputText.split("/");
    var opera2 = inputText.split("-");
    var lopera1 = opera1.length;
    var lopera2 = opera2.length;
    // Extract the string into month, date and year
    if (lopera1 > 1) {
      var pdate
      pdate = inputText.split("/");
    } else if (lopera2 > 1) {
      pdate = inputText.split("-");
    }
    var mm = parseInt(pdate[0]);
    var dd = parseInt(pdate[1]);
    var yy = parseInt(pdate[2]);

    // Create list of days of a month [assume there is no leap year by default]
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mm === 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        return false;
      }
    }
    if (mm === 2) {
      var lyear = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        lyear = true;
      }
      if (lyear === false && dd >= 29) {
        return false;
      }
      if (lyear === true && dd > 29) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

function updateStatusColor(job_div, statusText){
    job_div.classList.add("alert");
    if (statusText === "Awaiting Response"){
      job_div.classList.add("alert-primary");
    }
    else if (statusText === "No Response"){
      job_div.classList.add("alert-danger");
    }
    else if (statusText === "Hired"){
      job_div.classList.add("alert-success");
    }
}

module.exports = {
  handleSubmit: handleSubmit,
  handleRemove: handleRemove,
  handleChangeStatus: handleChangeStatus,
};

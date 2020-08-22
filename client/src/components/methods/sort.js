module.exports = function handleSort(){
const select = document.getElementById('sort_select');
const index = select.selectedIndex;
const condition = select.options[index].text;
const jobs_div = document.querySelector('.jobs');
let jobs = Array.from(document.getElementsByClassName('job'));

if (condition === "None") return;

if (condition === "Status"){
    jobs = jobs.sort((a, b) => {
        if (a.classList.value < b.classList.value){
            return -1;
        }
        if (a.classList.value === b.classList.value){
            return 0;
        }
        return 1;
    });
}

else if (condition === "Date"){
    jobs = jobs.sort((a, b) => {
        a = new Date(a.children[3].children[0].textContent);
        b = new Date(b.children[3].children[0].textContent);
        if (a < b){
            return -1;
        }
        if (a === b){
            return 0;
        }
        return 1;
    });
}

jobs_div.innerHTML = "";

jobs.forEach((job) => {
    jobs_div.appendChild(job);
});
    
}
let interviewList = [];
let rejectedList = [];
let currentStatus = "";

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// console.log(total.innerText)

let tabTotalJobTxt = document.getElementById("total-jobs-tabs");

// card section Button
const totalJobCard = document.getElementById("job-cards");
const deleteBtns = document.querySelectorAll(".btn-delete");

deleteBtns.forEach(btn => {
    btn.addEventListener("click", function (e){
        let card = e.target.closest(".job-card-data")
        card.remove();
         total.innerText = totalJobCard.children.length+ 1 - 1;
         tabTotalJobTxt.innerText = totalJobCard.children.length+ 1 - 1;
    })
})

// totalJobCard.addEventListener("click", function (e) {
//   if (deleteBtn) {
//     let card = deleteBtn.closest(".job-card-data");
//     console.log(card);
//     card.remove();
//   }
// });

// interview button
// const interviewBtn = document.getElementById("btn-interview");
// rejected button
// const rejectedBtn = document.getElementById("btn-rejected" );
// Applied button
const isAppliedBtn = document.getElementById("btn-isApplied");
// Delete btn


const interviewField = document.getElementById("interview-field");

// main section
const main = document.querySelector("main");

// console.log(totalJobCard.innerText)

function totalCount() {
  total.innerText = totalJobCard.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}
totalCount();

// delete job

// deleteBtn.addEventListener("click", function(e){

// })

const noJob = document.getElementById("no-job-section");

// toggling button
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBTn = document.getElementById("rejected-filter-btn");

function toggleButton(id) {
  allFilterBtn.classList.add("text-gray-400", "bg-base-100");
  interviewFilterBtn.classList.add("text-gray-400", "bg-base-100");
  rejectedFilterBTn.classList.add("text-gray-400", "bg-base-100");

  allFilterBtn.classList.remove("text-base-100", "bg-blue-500");
  interviewFilterBtn.classList.remove("text-base-100", "bg-blue-500");
  rejectedFilterBTn.classList.remove("text-base-100", "bg-blue-500");

  const selected = document.getElementById(id);
  selected.classList.remove("text-gray-400", "bg-base-100");
  selected.classList.add("text-base-100", "bg-blue-500");

  currentStatus = id;
  console.log(currentStatus);

  if (id == "all-filter-btn") {
    noJob.classList.add("hidden");
    totalJobCard.classList.remove("hidden");
    interviewField.classList.add("hidden");
    tabTotalJobTxt.innerText = totalJobCard.children.length;
  } else if (id == "interview-filter-btn") {
    tabTotalJobTxt.innerText = interviewList.length;
    if (interviewList.length == 0) {
      noJob.classList.remove("hidden");
      totalJobCard.classList.add("hidden");
      interviewField.classList.add("hidden");
    } else {
      noJob.classList.add("hidden");
      totalJobCard.classList.add("hidden");
      interviewField.classList.remove("hidden");
      createInterview();
    }
  } else if (id == "rejected-filter-btn") {
    tabTotalJobTxt.innerText = rejectedList.length;
    if (rejectedList.length == 0) {
      noJob.classList.remove("hidden");
      totalJobCard.classList.add("hidden");
      interviewField.classList.add("hidden");
    } else {
      noJob.classList.add("hidden");
      totalJobCard.classList.add("hidden");
      interviewField.classList.remove("hidden");
      createRejected();
    }
  }
}

let interviewBtn = document.getElementById("btn-interview");

console.log(interview);

//    if(id == "all-filter-btn" ){
//     totalJobCard.classList.remove("hidden");
//     interviewField.classList.add("hidden")
//    }
//    else if(id == "interview-filter-btn"){
//     interviewField.classList.remove("hidden");
//     totalJobCard.classList.add("hidden")
//     createInterview()
//    }
//    else if(id == "rejected-filter-btn"){
//     interviewField.classList.remove("hidden");
//     totalJobCard.classList.add("hidden")
//     createRejected();
//    }





//*** Main section ***/
main.addEventListener("click", function (event) {
  // console.log(event.target.parentNode.parentNode)

  if (event.target.classList.contains("btn-interview")) {
    const parent = event.target.parentNode.parentNode;

    const company = parent.querySelector(".company").innerText;
    const skill = parent.querySelector(".skill").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const work = parent.querySelector(".work").innerText;

    const jobCard = {
      company,
      skill,
      salary,
      btnIsApplied: "Applied",
      work,
    };
    const companyExist = interviewList.find(
      (item) => item.company == jobCard.company,
    );
    if (!companyExist) {
      interviewList.push(jobCard);
      parent.querySelector(".btn-isApplied").innerText = "Applied";
      // console.log(interviewList)
    }
    rejectedList = rejectedList.filter(
      (item) => item.company != jobCard.company,
    );
    if (currentStatus == "rejected-filter-btn") {
      createInterview();
    }
    totalCount();
  } else if (event.target.classList.contains("btn-rejected")) {
    tabTotalJobTxt.innerText = interviewList.length-1;
    const parent = event.target.parentNode.parentNode;

    const company = parent.querySelector(".company").innerText;
    const skill = parent.querySelector(".skill").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const work = parent.querySelector(".work").innerText;

    const jobCard = {
      company,
      skill,
      salary,
      btnIsApplied: "Not-Applied",
      work,
    };
    interviewList = interviewList.filter(
      (item) => item.company != jobCard.company,
    );
    if (currentStatus == "interview-filter-btn") {
      createRejected();
      if (interviewList.length == 0) {
        noJob.classList.remove("hidden");
        totalJobCard.classList.add("hidden");
        interviewField.classList.add("hidden");
      } else {
        noJob.classList.add("hidden");
        totalJobCard.classList.add("hidden");
        interviewField.classList.remove("hidden");
        createInterview();
      }
    }
    const companyExist = rejectedList.find(
      (item) => item.company == jobCard.company );
    if (!companyExist) {
      rejectedList.push(jobCard);
      // console.log(interviewList)
    }
    totalCount();
  }
});

// Creating HTML file
function createInterview() {
  interviewField.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "job-card-data flex flex-col md:flex-row items-center md:items-start justify-between bg-base-100 p-6 rounded-xl shadow";
    div.innerHTML = `
         <div class="space-y-5">
                <div>
                 <h3 class="company font-bold mb-1">${interview.company}</h3>
                  <p class="skill text-gray-400">${interview.skill}</p>
                </div>
                <p class="salary text-gray-400">${interview.salary}</p>
                <div>
                <button id="btn-isApplied" class="btn btn-soft btn-success mb-2">${interview.btnIsApplied}</button>
                <p class="work">${interview.work}</p>
                </div>
                <div class="flex justify-around md:justify-start gap-4">
                    <button id="btn-interview" class="btn-interview btn btn-outline btn-success">interview</button>
                    <button id="btn-rejected" class="btn-rejected btn btn-outline btn-error">Rejected</button>
                </div>  
            </div>
            <div class="mt-7  md:mt-0">
                <img id="btn-delete" src="./asset/delete.png" alt="">
            </div>
        `;
    interviewField.appendChild(div);
  }
}

function createRejected() {
  interviewField.innerHTML = "";
  for (let reject of rejectedList) {
    console.log("reject", reject);
    let div = document.createElement("div");
    div.className = "job-card-data flex flex-col md:flex-row items-center md:items-start justify-between bg-base-100 p-6 rounded-xl shadow";
    div.innerHTML = `
         <div class="space-y-5">
                <div>
                 <h3 class="company font-bold mb-1"> ${reject.company}</h3>
                  <p class="skill text-gray-400">${reject.skill}</p>
                </div>
                <p class="salary text-gray-400">${reject.salary}</p>
                <div>
                <button id="btn-isApplied" class="btn btn-soft btn-error mb-2">${reject.btnIsApplied}</button>
                <p class="work">${reject.work}</p>
                </div>
                <div class="flex justify-around md:justify-start gap-4">
                    <button id="btn-interview" class="btn-interview btn btn-outline btn-success">interview</button>
                    <button id="btn-rejected" class="btn-rejected btn btn-outline btn-error">Rejected</button>
                </div>  
            </div>
            <div class="mt-7  md:mt-0">
                <img id="btn-delete" src="./asset/delete.png" alt="">
            </div>
        `;
    interviewField.appendChild(div);
  }
}



let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// console.log(total.innerText)
const totalJobCard = document.getElementById("job-cards");
// console.log(totalJobCard.innerText)

function totalCount(){
    total.innerText = totalJobCard.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
totalCount();


// toggling button 
const allFilterBtn = document.getElementById("all-filter-btn");
const  interviewFilterBtn= document.getElementById("interview-filter-btn");
const rejectedFilterBTn= document.getElementById("rejected-filter-btn");
function toggleButton(id){
   allFilterBtn.classList.add('text-gray-400','bg-base-100');
   interviewFilterBtn.classList.add('text-gray-400','bg-base-100');
   rejectedFilterBTn.classList.add('text-gray-400','bg-base-100');

   allFilterBtn.classList.remove('text-base-100','bg-blue-500');
   interviewFilterBtn.classList.remove('text-base-100','bg-blue-500');
   rejectedFilterBTn.classList.remove('text-base-100','bg-blue-500');

   const selected = document.getElementById(id);
   selected.classList.remove('text-gray-400','bg-base-100');
   selected.classList.add('text-base-100','bg-blue-500');
}

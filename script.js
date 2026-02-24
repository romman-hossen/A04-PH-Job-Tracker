let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// console.log(total.innerText)

// card section Button
const totalJobCard = document.getElementById("job-cards");
// interview button 
// const interviewBtn = document.getElementById("btn-interview");
// rejected button
// const rejectedBtn = document.getElementById("btn-rejected" );
// Applied button
const isAppliedBtn = document.getElementById("btn-isApplied");
// Delete btn 
const deleteBtn = document.getElementById("btn-delete");

// main section 
const main = document.querySelector("main");


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

//*** Main section ***/
main.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode)
    if(event.target.classList.contains("btn-interview")){

        const parent = event.target.parentNode.parentNode;
        
        const company = parent.querySelector('.company').innerText
        const skill  = parent.querySelector('.skill').innerText
        const salary = parent.querySelector('.salary').innerText
        const btnIsApplied = parent.querySelector('.btn-isApplied').innerText ="Applied";
        const work = parent.querySelector('.work').innerText

        const jobCard = {
            company,
            skill,
            salary,
            btnIsApplied :"Applied",
            work
        }
        const companyExist = interviewList.find(item => item.company == jobCard.company);
        if(!companyExist){
            interviewList.push(jobCard);
            // console.log(interviewList)
        }
    }
    
})

// Creating HTML file 
function createInterview(){
    

}
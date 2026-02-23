let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// console.log(total.innerText)
const totalJobCard = document.getElementById("job-cards");
// console.log(totalJobCard.innerText)
function totalCount(){
    total.innerText = totalJobCard.children.length;
}
totalCount()
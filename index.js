let currentTab = "tab-all"
const active = ["bg-blue-500", "text-white"]
const inactive = ["bg-white", "text-black"]

const allSection = document.getElementById("all-section")
const interviewSection = document.getElementById("interview-section")
const rejectedSection = document.getElementById("rejected-section")
const noJobs = document.getElementById("no-jobs")

const totalStatus = document.getElementById("totalStatus")
const interviewStatus = document.getElementById("interviewStatus")
const rejectedStatus = document.getElementById("rejectedStatus")
const availableStatus = document.getElementById("available-jobs")

function tabSwitch(tab) {
    currentTab = tab;
    tabs = ["tab-all", "tab-interview", "tab-rejected"]
    
    for (const t of tabs) {
        tabElement = document.getElementById(t);
        if (t === tab) {
            
            tabElement.classList.add(...active);
            tabElement.classList.remove(...inactive);
            
        }
        else {
            tabElement.classList.remove(...active);
            tabElement.classList.add(...inactive);
            
        }
    }
    const pages = [allSection, interviewSection, rejectedSection]
    for(page of pages){
        page.classList.add("hidden")
    }
    if(tab==="tab-all"){
        allSection.classList.remove("hidden");
        
    }
    else if(tab==="tab-interview"){
        interviewSection.classList.remove("hidden");
        
    }
    else if(tab==="tab-rejected"){
        rejectedSection.classList.remove("hidden");
        
    }
    updateStatus();
}

document.getElementById("jobs-section").addEventListener("click", function (event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    parent = card.parentNode;


    if(clickedElement.classList.contains("interview")){
        interviewSection.appendChild(card);
        status.innerText = "Interview";
        updateStatus();
    }
    else if(clickedElement.classList.contains("rejected")){
        rejectedSection.appendChild(card);
        status.innerText = "Rejected";
        
        updateStatus();
    }
    else if(clickedElement.classList.contains("delete")){
        parent.removeChild(card);
        updateStatus();
    }
})

function updateStatus(){
    totalStatus.innerText = allSection.children.length;
    interviewStatus.innerText = interviewSection.children.length;
    rejectedStatus.innerText = rejectedSection.children.length;

    if(currentTab==="tab-all"){
        availableStatus.innerText = allSection.children.length;
        if(allSection.children.length <1){
            noJobs.classList.remove("hidden")
        }
        else{
            noJobs.classList.add("hidden");
        }
        
    }
    else if(currentTab==="tab-interview"){
        availableStatus.innerText = interviewSection.children.length;
        if(interviewSection.children.length <1){
            noJobs.classList.remove("hidden")
        }
        else{
            noJobs.classList.add("hidden");
        }
    }
    else if(currentTab==="tab-rejected"){
        availableStatus.innerText = rejectedSection.children.length;
        if(rejectedSection.children.length <1){
            noJobs.classList.remove("hidden")
        }
        else{
            noJobs.classList.add("hidden");
        }
    }
}
updateStatus();
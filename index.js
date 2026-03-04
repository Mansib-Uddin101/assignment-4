active = ["bg-blue-500", "text-white"]
inactive = ["bg-white", "text-black"]

function tabSwitch(tab) {
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
            console.log(t);
            
        }
    }

    console.log(tabElement);

}
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content")
const sub_tabs = document.querySelectorAll(".sub-tab-btn")
const all_subcontent = document.querySelectorAll(".sub-content")

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", () => {
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active")

        all_content.forEach(content=>{content.classList.remove("active")})
        all_content[index].classList.add("active")
    })
})

sub_tabs.forEach((sub_tab, index)=>{
    sub_tab.addEventListener("click", () => {
        sub_tabs.forEach(sub_tab=>{sub_tab.classList.remove("active")})
        sub_tab.classList.add("active")

        all_subcontent.forEach(sub_content=>{sub_content.classList.remove("active")})
        all_subcontent[index].classList.add("active")
    })
})
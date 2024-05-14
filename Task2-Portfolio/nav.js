const getToggle = document.querySelector(".mobile-nav-toggle")
const getSideBar = document.querySelector(".sidebar")

getToggle.addEventListener("click", () =>   {
    const attrToggle = getToggle.getAttribute("data-visible");

    if(attrToggle === "false")  {
        getToggle.setAttribute("data-visible", true);
        getSideBar.setAttribute("data-visible", true);
    }
    else    {
        getToggle.setAttribute("data-visible", false);
        getSideBar.setAttribute("data-visible", false);
    }
})
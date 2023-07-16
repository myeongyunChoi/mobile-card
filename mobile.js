const userInformationBox = document.querySelectorAll(".user_information_box")[0];
const mobileContentsWrap = document.querySelectorAll(".mobile_contents_wrap")[0];
const topLogo = document.querySelectorAll(".top_logo")[0];
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
const userInformationBoxInner = document.querySelectorAll(".user_information_box_inner")[0];
const brandColorBar = document.querySelectorAll(".brand_color_bar")[0];
window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > previousScrollPosition) {
        // Scrolling down
        userInformationBox.classList.add("move_position");
        setTimeout(()=>{
            topLogo.classList.add("fade_in");
            brandColorBar.classList.add("to_right");
        },500)
    } else {
        // Scrolling up
        userInformationBox.classList.remove("move_position");
        topLogo.classList.remove("fade_in");
        brandColorBar.classList.remove("to_right");
    }

    previousScrollPosition = currentScrollPosition;
});


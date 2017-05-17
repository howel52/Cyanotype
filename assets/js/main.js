/**
 * Created by wuhow on 2017/5/12.
 */
"using strict";
function toggleClick() {
    function checkDisplay(value, lists) {
        const length = lists.length;
        for (let i = 0; i < length; i++) {
            if (value === lists[i])
                return false;
        }
        return true;
    };

    const site_info_dom = document.getElementById("site-info");
    const footer_dom = document.getElementById("footer");
    const articles_dom = document.getElementById("articles");
    const main_body_dom = document.getElementById("main-body");


    if (checkDisplay("hidden-block", site_info_dom.classList)) {
        site_info_dom.classList.add("hidden-block");
        if (null !== footer_dom)
            footer_dom.classList.remove("hidden-block");
        if (null !== articles_dom)
            articles_dom.classList.remove("hidden-block");
        if (main_body_dom !== null)
            main_body_dom.classList.remove("hidden-block");
    }
    else {
        site_info_dom.classList.remove("hidden-block");
        if (null !== footer_dom)
            footer_dom.classList.add("hidden-block");
        if (null !== articles_dom)
            articles_dom.classList.add("hidden-block");
        if (null !== main_body_dom)
            main_body_dom.classList.add("hidden-block");
    }
};

document.getElementById("toggle-button").addEventListener("click", () => {
    toggleClick();
});



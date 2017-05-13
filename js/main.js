/**
 * Created by wuhow on 2017/5/12.
 */
"using strict"
let toggleClick = function () {

    let checkDisply = function (value, lists) {
        let length = lists.length;
        for (let i = 0; i < length; i++) {
            if (value === lists[i])
                return false;
        }
        return true;
    };

    let site_info_dom = document.getElementById("site-info");
    let footer_dom = document.getElementById("footer");
    let articles_dom = document.getElementById("articles");
    let main_body_dom = document.getElementById("main-body");


    if (checkDisply("hidden-block", site_info_dom.classList)) {
        site_info_dom.classList.add("hidden-block");
        if (footer_dom != null)
            footer_dom.classList.remove("hidden-block");
        if (articles_dom != null)
            articles_dom.classList.remove("hidden-block");
        if (main_body_dom != null)
            main_body_dom.classList.remove("hidden-block");
    }
    else {
        site_info_dom.classList.remove("hidden-block");
        if (footer_dom != null)
            footer_dom.classList.add("hidden-block");
        if (articles_dom != null)
            articles_dom.classList.add("hidden-block");
        if (main_body_dom != null)
            main_body_dom.classList.add("hidden-block");
    }


};

document.getElementById("toggle-button").addEventListener("click", function () {
    toggleClick();
});



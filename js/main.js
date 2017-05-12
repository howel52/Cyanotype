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

    let class_list = document.getElementById("articles").classList;

    if (checkDisply("hidden-block", class_list)) {
        class_list.add("hidden-block");
        document.getElementById("footer").classList.add("hidden-block");
        //
        document.getElementById("site-info").classList.remove("hidden-block");
    }
    else {
        class_list.remove("hidden-block");
        document.getElementById("footer").classList.remove("hidden-block");
        //
        document.getElementById("site-info").classList.add("hidden-block");

    }


};

document.getElementById("toggle-button").addEventListener("click", function () {
    toggleClick();
});



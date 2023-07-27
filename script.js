function E(selector, parent){
    if (selector instanceof HTMLElement)
        return selector;

    return(parent || document).querySelectorAll(selector);
}

function hasClass(element, className){
    return element.classList.contains(className);
}
function radioClass(element, className){
    E("."+className).forEach((elem)=> 
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav){
    let navElem = E(nav)[0];
    navElem.addEventListener("click", (e) => {
        let target = e.target;
        if (hasClass(target, "tab"))
            radioClass(target, "active");
        let linkedTab = E("."+target.id)[0];
        radioClass(linkedTab, "visible");
    });
    let active = E(".tab.active")[0];
    if (active){
        radioClass(E("."+active.id)[0], "visible");
    }
}

tabs(".menu-nav")

function loadMore(loadMoreBtn, containerSelector, boxSelector) {
    let loadMoreBtnElement = document.querySelector(loadMoreBtn);
    let currentItem = 4;

    loadMoreBtnElement.onclick = () => {
        let boxes = [...document.querySelectorAll(`${containerSelector} ${boxSelector}`)];
        for (var i = currentItem; i < currentItem + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }
        currentItem += 4;
        if (currentItem >= boxes.length) {
            loadMoreBtnElement.style.display = 'none';
        }
    };
}

loadMore('#load-more-1', '.box-container-1', '.box-1');
loadMore('#load-more-2', '.box-container-2', '.box-2');
loadMore('#load-more-3', '.box-container-3', '.box-3');
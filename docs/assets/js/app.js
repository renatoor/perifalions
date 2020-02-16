
function showContent(event) {
    let section = event.target.tagName === "I" ?
        event.target.parentNode.parentNode.parentNode :
        event.target.parentNode.parentNode;

    let content = section.querySelector('.content');

    if (content.classList.contains('content-hidden')) {
        content.classList.remove('content-hidden');
    } else {
        content.classList.add('content-hidden');
    }

    let arrow = section.querySelector('.fas');

    if (arrow.classList.contains('fa-caret-right')) {
        arrow.classList.remove('fa-caret-right');
        arrow.classList.add('fa-caret-down');
    } else {
        arrow.classList.remove('fa-caret-down');
        arrow.classList.add('fa-caret-right');
    }
}

document.querySelectorAll('.title').forEach((element) => element.addEventListener('click', showContent));

document.querySelector('#subject').addEventListener('change', (event) => {
    let select = event.target;
    let input = document.querySelector('#other-input');

    if (select.selectedIndex === 4) {
        input.classList.remove('hide-other');
    } else {
        input.classList.add('hide-other');
    }
});

//https://docs.google.com/forms/d/e/1FAIpQLScTmKTQnJTyn_ivo7Quql8KM-SM3nmslDHEQ-lNGwtC3AsLfQ/viewform?usp=pp_url&entry.2100249264=Nome+Sobrenome&entry.1852815818=contato@email.com&entry.2082154678=(99)+9+9999-9999&entry.679539695=Outros&entry.1371439550=Lorem+ipsum

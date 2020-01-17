/*letting read more*/

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  });

let watchAll = document.getElementById("watchAll")
let newsBlockMore = document.getElementById("newsBlockMore")

watchAll.addEventListener('click', function () {
  /*newsBlockMore.hidden = !newsBlockMore.hidden;*/
  newsBlockMore.style.display = "block";
  watchAll.style.display = "none";
},);
const addBtn = document.getElementById("addBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// closeBtn.addEventListener("click", () => {
//    window.location.href = "index.html";
// });

let sub = document.querySelector(".sub");
let form = document.querySelector("form");
let createnote = document.querySelector(".createnote");

if(createnote && sub){
createnote.addEventListener("click", () => {
  sub.click();
});
}
if(form){
form.addEventListener("submit", function (e) {
  
  e.preventDefault();
 
  const title = e.target[0].value;
  const desc = e.target[1].value;
  
  const selected = document.querySelector('input[name="category"]:checked');
if (!selected) {
    alert("Please select a category");
    return;
}
const note = {
    title: title,
    desc:desc,
    category:selected.value
}

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.push(note);

localStorage.setItem("notes", JSON.stringify(notes));
window.location.href = "idx.html";
});
}
const notesContainer = document.querySelector(".notes");
if(notesContainer){

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    if(!Array.isArray(notes)){
        notes = [];
    }


notes.forEach((item) => {

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <h3>${item.category}</h3>
        <p>${item.title}</p>
        <div>${item.desc}</div>
    `;

    notesContainer.appendChild(note);

});
}
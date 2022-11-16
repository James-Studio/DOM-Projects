// getElementByClassName, getElementById

const profile = [
    {
        id: 0,
        name: "Kirby",
        image: "./images/kirby.jpg",
        rev_content: "This is Kirby",
    },
    {
        id: 1,
        name: "Bandana",
        image: "./images/bandana.jpg",
        rev_content: "This is Bandana",
    },
    {
        id: 2,
        name: "MetaKnight",
        image: "./images/meta_knight.png",
        rev_content: "This is MetaKnight",
    },
];

let current_id = 0;

const aut_name = document.getElementById("author_id");
const aut_img = document.getElementById("face");
const aut_content = document.getElementById("content");
const side_content = document.querySelector(".sidebar");


// be careful of textContent (formatting style)
function show_profile(){
    // textContent vs innerHTML
    aut_img.src = profile[current_id]["image"];
    aut_name.textContent = profile[current_id]["name"];
    aut_content.textContent = profile[current_id]["rev_content"]; 
}

function forward_page(){
    if (current_id < profile.length) {
        current_id++;
    }
    show_profile();
}

function backward_page(){
    if (current_id > 0) {
        current_id--;
    }
    show_profile();
}

function demo_sidebar(){
    side_content.classList.toggle("show_sidebar");
}

// initialize the content
window.addEventListener("DOMContentLoaded", function () {
    aut_img.src = profile[current_id]["image"];
    aut_name.textContent = profile[current_id]["name"];
    aut_content.textContent = profile[current_id]["rev_content"];
});

const right_btn = document.getElementById("right_btn");
right_btn.addEventListener("click", forward_page);
const left_btn = document.getElementById("left_btn");
left_btn.addEventListener("click", backward_page);

const bar_btn = document.getElementById("side_btn");
bar_btn.addEventListener("click", function () {
    side_content.classList.toggle("show_sidebar");
});

// document.getElementById("content").textContent = "I have changed!";


let a = document.getElementById('btn').addEventListener('click', buttonClicked);

let b = document.getElementById('header');

b.addEventListener('click', runevent);
function buttonClicked() {
    document.getElementById('header').textContent = 'Fuck!';
    document.getElementById('header').className = "bg-red-200";
};

function runEvent(e) {

}  
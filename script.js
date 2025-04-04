
const debounce = function (fn, t = 1000) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};


function playAudio() {
    document.getElementById('novideo').play();
}

function nextPage() {
    //window.location.href = "yes.html";
    document.getElementById('ans').style.display = 'block';
    document.getElementById('ask').style.display = 'none';
    document.getElementById('novideo').pause();
    document.getElementById('ansvideo').play();
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth - 200);
    const y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    playAudio();
}
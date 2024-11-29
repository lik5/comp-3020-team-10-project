// homepage.js

function handleDonate() {
    alert("Thank you for choosing to donate!");
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const url = window.location.href;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            if (target === 'shop-all') {
                window.location.href = './store/store.html';
            } else if (target === 'shop-computers') {
                window.location.href = './store/store.html';
            } else if (target === 'shop-phones') {
                window.location.href = './store/store.html';
            }
            updateToggle(target);
        });
    });
});



// For incrementing the counter
function startCount()
{
    setInterval(incrementCount, 1230)
}
function incrementCount()
{
    
    var x = document.getElementById("recycle-count");

    string = x.innerHTML.split(' ')[0];
    counter = parseInt(string);
    counter += 8;
    if (Math.floor(Math.random() * 2) + 1 == 1)
    {
        counter+=1
        x.innerHTML = counter + " kg";

    }

}

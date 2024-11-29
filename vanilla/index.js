// homepage.js

function handleDonate() {
    alert("Thank you for choosing to donate!");
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const images = document.querySelectorAll('.categories-img');
    const url = window.location.href;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            if (target === 'shop-all') {
                window.localStorage.setItem("tabProductType", "all");
                window.location.href = './store/store.html';
            } else if (target === 'shop-computers') {
                window.localStorage.setItem("tabProductType", "computers");
                window.location.href = './store/store.html';
            } else if (target === 'shop-phones') {
                window.localStorage.setItem("tabProductType", "phones");
                window.location.href = './store/store.html';
            } else if (target === 'shop-tnd') {
                window.localStorage.setItem("tabProductType", "tnd");
                window.location.href = './store/store.html';
            }
            updateToggle(target);
        });
    });

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            const target = e.target.id;
            if (target === 'shop-all-image') {
                window.localStorage.setItem("tabProductType", "all");
                window.location.href = './store/store.html';
            } else if (target === 'shop-computers-image') {
                window.localStorage.setItem("tabProductType", "computers");
                window.location.href = './store/store.html';
            } else if (target === 'shop-phones-image') {
                window.localStorage.setItem("tabProductType", "phones");
                window.location.href = './store/store.html';
            } else if (target === 'shop-tnd-image') {
                window.localStorage.setItem("tabProductType", "tnd");
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

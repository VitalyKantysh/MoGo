let burger = document.querySelector('.nav-toggle');
let pageHeader = document.querySelector('.page__header');


burger.onclick = function() {
    burger.classList.toggle('active');
    pageHeader.classList.toggle('active');
    document.body.classList.toggle('hidden');
};



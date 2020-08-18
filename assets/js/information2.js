var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var info = document.querySelector('#info');
var sitemp = document.querySelector('#sitemap');
var feback = document.querySelector('#feed');

btn1.addEventListener('click', function() {
    info.classList.toggle('hide');
});
btn2.addEventListener('click', function() {
    sitemap.classList.toggle('hide');
});
btn3.addEventListener('click', function() {
    feback.classList.toggle('hde');
});
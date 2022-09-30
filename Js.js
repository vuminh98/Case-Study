var images = [
    "https://porsche-vietnam.vn/wp-content/uploads/2017/01/718-Boxster-S-718-Cayman-S-1600x615.jpg",
    "https://porsche-vietnam.vn/wp-content/uploads/2019/04/rd-2021-homepage-banner-pcna-macanii-kw29--1600x615.jpg",
    "https://porsche-vietnam.vn/wp-content/uploads/2021/01/modelseries-j1-taycan-banner-1600x615.jpg",
    "https://porsche-vietnam.vn/wp-content/uploads/2021/07/rd-2021-homepage-banner-ww-e3topgt-kw26-1600x615.jpg",
    "https://porsche-vietnam.vn/wp-content/uploads/2018/06/CZ22V52IX0003_low-banner-1-1600x616.jpg"
];
var num = 0;

function next() {
        //lấy phần tử img hiển thị ảnh
        var slider = document.getElementById("slider");
        // xử lý chỉ số tăng thêm 1
        num++;
        if (num >=images.length) {
                num=0;
        }
        //thiết lập thuộc tính src của ảnh bằng ảnh mới
        slider.src = images[num];
}

function prev() {
        var slider = document.getElementById("slider");
        num--;
        if (num<0) {
                num = images.length-1;
        }
        slider.src = images[num];
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

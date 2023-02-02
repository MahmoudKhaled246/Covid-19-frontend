let nav = document.getElementById('nav');
let scrlbtn = document.getElementById('scroll-btn');
let home = document.getElementById('link_1');
let About = document.getElementById('link_2');
let Symptoms = document.getElementById('link_3');
let Prevention = document.getElementById('link_4');
let Treatment = document.getElementById('link_5');
let faq = document.getElementById('link_6');
let News = document.getElementById('link_7');




$(function () {
    $('.count').each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).data("num"),
                },
                {
                    duration: 1000,
                    easing: "swing",
                    step: function (now) {
                        $(this).text(Math.ceil(now).toLocaleString("en"));
                    },
                }
            );
    });
});





window.onscroll = function () {
    if (scrollY >= 100) {
        nav.classList.add('navbar-color');
        if (scrollY >= 300) {
            scrlbtn.style.display = 'block'

            if (scrollY >= 8104) {
                News.classList.add('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                faq.classList.remove('active');
                home.classList.remove('active');
            }
            else if (scrollY >= 7288) {
                faq.classList.add('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else if (scrollY >= 6168) {
                faq.classList.remove('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else if (scrollY >= 5284) {
                Treatment.classList.add('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                faq.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else if (scrollY >= 3246) {
                Prevention.classList.add('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Treatment.classList.remove('active');
                faq.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else if (scrollY >= 2300) {
                Symptoms.classList.add('active');
                About.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                faq.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else if (scrollY >= 790) {
                About.classList.add('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                faq.classList.remove('active');
                home.classList.remove('active');
                News.classList.remove('active');
            }
            else {
                home.classList.add('active');
                About.classList.remove('active');
                Symptoms.classList.remove('active');
                Prevention.classList.remove('active');
                Treatment.classList.remove('active');
                faq.classList.remove('active');
                News.classList.remove('active');
            }
        }
        else {
            scrlbtn.style.display = 'none'
        }
    }
    else {
        nav.classList.remove('navbar-color');
    }
}

function to_up() {
    scroll({
        top: 0,
        left: 0,

    })
}


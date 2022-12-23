var header = document.getElementById("productNav");
var btns = header.getElementsByClassName("pitem");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
function nav() {
    let test = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
        test.classList.remove('bgchange');
    } else {
        test.classList.add('bgchange');
    }
}
window.addEventListener('scroll',nav)

function arrow() {
    let test = document.getElementById('uparrow');
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
        test.classList.remove('uparrowt');
    } else {
        test.classList.add('uparrowt');
    }
}
window.addEventListener('scroll',arrow)
function test() {
    let test =  document
}
function closebtn() {
    let click = document.getElementById('wlmain');
    if (click.style.display != 'none') {
        click.style.display = 'none';
    }
    else {
        click.style.display = 'block';
    }
}
function subs() {
    let click = document.getElementById('wlmain');
    if (click.style.display != 'block') {
        click.style.display = 'block';
        click.style.display = 'flex';
        click.style.alignItems = 'center';
        click.style.justifyContent = 'center';
        click.style.height = '587px';
    }
    // else {
        //     click.style.display = 'none';
        // }
    }
    function member(){
        let click = document.getElementById('wlmain');
        let member= document.getElementById('member_main');
        if (member.style.display != 'none') {
            click.style.display = 'none';
            member.style.display = 'none';
        }
        else {
            click.style.display = 'block';
            member.style.display = 'none';
        }
    }

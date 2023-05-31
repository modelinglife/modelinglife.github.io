document.body.classList.add('jsy')

const platformExpression = /Mac|iPhone|iPod|iPad/i;
const rejectedExpression = /Chrome|Android|CriOS|FxiOS|EdgiOS/i;
const expectedExpression = /Safari/i;

const isAppleSafari = () => {
    const agent = navigator.userAgent;
    if (rejectedExpression.test(agent)) {
        return false;
    }
    return platformExpression.test(agent) && expectedExpression.test(agent);
};
// Hack for SAFARI and WebM transparent video not working
// fix by using animated PNG
if (isAppleSafari()) {
    var _img = document.getElementById('vid')
    var newImg = new Image;
    newImg.onload = function () {
        var surc = this.src
        _img.setAttribute('poster', surc)
        setInterval(function () {
            document.getElementById('vid').setAttribute('poster', surc)
        }, 9000)
    }
    newImg.src = './assets/poster.apng';
}


// Duplicate Header
let hf = document.querySelector('.h .hfull >figure').cloneNode(true)
hf.querySelector('svg use').setAttribute('xlink:href', '#logo-small')
let hn = document.querySelector('.h .hfull >nav').cloneNode(true)
document.querySelector('.h .hsmall').appendChild(hf)
document.querySelector('.h .hsmall').appendChild(hn)


// add style top on element Height
var fix = document.querySelectorAll('.m >section >div')
fix.forEach(f => {
    let h = f.clientHeight / 2
    f.style.top = 'calc( 50% - ' + h + 'px )'
})


// Create a timeline Arrows Paths (sct-2)
var paths = document.querySelectorAll('#elements .arrow-path path:nth-child(2)');
const arr_ani = [];
paths.forEach(function (el, index) {
    var arrow = el.previousElementSibling
    var path = anime.path( el );
    let a =
        anime({
            autoplay: false,
            targets: arrow,
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            loop: true,
            duration: anime.random(10000, 6000),
        });
    arr_ani.push(a);
});
arr_ani.forEach(ani => {
    ani.seek(ani.duration * .2)
})

// Create a timeline Men Home Paths (sct-3)
var paths = document.querySelectorAll('#menhome .men >path');
const arr_ani_men = [];
paths.forEach(function (el, index) {
    var men = el.parentElement
    var path = anime.path(el);
    let a =
        anime({
            autoplay: false,
            targets: men,
            translateX: path('x'),
            translateY: path('y'),
            // rotate: path('angle'),
            easing: 'linear',
            loop: true,
            direction: 'alternate',
            duration: anime.random(15000, 8000),
        });
    arr_ani_men.push(a);
});
arr_ani_men.forEach(ani => {
    ani.seek(ani.duration * .2)
})

// document.getElementById('xm').addEventListener('click', function () {
//     this.parentNode.classList.toggle('open')
// }, false)

// Create a timeline scroll animation
var tlc = anime.timeline({
    autoplay: false,
    easing: 'linear',
});


// Add children
tlc
    // .add({
    //     targets: '#arrow-ctrl',
    //     translateY: ['120%', '90%'],
    //     duration: 100,
    // })
    .add({
        targets: '.h .hfull',
        translateY: '-102%',
        duration: 4000,
    })
    .add({
        targets: '#bg-clr',
        translateY: '-100%',
        duration: 4000,
    }, '-=4000')
    .add({
        targets: '.sct-0 > div',
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '-=2000')
    // SCT 0 OUT
    .add({
        targets: '.sct-0 > div, #vid',
        translateY: '-100vh',
        duration: 4000,
    }, '+=2666')
    .add({
        targets: '#arrow-ctrl',
        translateY: ['90%', '120%'],
        duration: 100,
    })
    .add({
        targets: '.sct-1-1',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '-=4200')
    .add({
        targets: '#tria',
        translateY: [
            { value: ['100vh', '0vh'], duration: 2000 }
        ],
        scale: [
            { value: [.7, 1], duration: 600, delay: 2000, }
        ],
    }, '-=3000')
    .add({
        targets: '.sct-1-2',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '+=2000')
    .add({
        targets: '.sct-1-1',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=2000')
    .add({
        targets: '#tria .lines',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
    }, '-=666')
    .add({
        targets: '#tria text',
        opacity: [0, 1],
    }, '-=2000')
    .add({
        targets: '.sct-1-3',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '+=2666')
    .add({
        targets: '.sct-1-2',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=2400')
    .add({
        targets: '#tria .uppery path',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function (el, i) { return i * 200 },
    }, '-=1000')
    .add({
        targets: '#arrow-ctrl',
        translateY: ['120%', '90%'],
        duration: 100,
    }, '+=2666')
    .add({
        targets: '.sct-1-3, #tria',
        translateY: '-100vh',
        duration: 4000,
    }, '-=100')
    .add({
        targets: '#vid, .sct-2-1',
        translateY: ['100vh', '0vh'],
        duration: 4000,
    }, '-=4000')
    .add({
        targets: '#vid',
        opacity: 0,
    }, '+=2666')
    .add({
        targets: '#arrow-ctrl',
        translateY: '120%',
        duration: 100,
    })
    .add({
        targets: '.sct-2-2',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '-=2000')
    .add({
        targets: '.sct-2-1',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=2000')
    .add({
        targets: '#elements .lens',
        opacity: [
            { value: [0, 1], duration: 600 }
        ],
        scale: [
            { value: [.7, 1], duration: 1400, delay: 200, }
        ],
    })
    .add({
        targets: '#arrowpath-ctrl',
        translateY: ['120%', '90%'],
        duration: 100,
    })
    .add({
        targets: '#elements .arrow-path',
        opacity: [0, 1],
        duration: 600,
    })
    .add({
        targets: '#elements .circle, #elements .square, #elements .polygon',
        opacity: [
            { value: [0,1], duration: 400 }
        ],
        scale: [
            { value: [.4, 1], duration: 800, delay: 200, easing: 'easeOutCubic', }
        ],
        delay: anime.stagger(400),
    })
    .add({
        targets: '.sct-2-3',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '+=2666')
    .add({
        targets: '.sct-2-2',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=2000')
    .add({
        targets: '#elements .reddy path:nth-child(1)',
        fill: '#ee0b0b',
    })
    .add({
        targets: '#arrowpath-ctrl',
        translateY: '120%',
        duration: 100,
    }, '+=2666')
    .add({
        targets: '#elements',
        translateY: '-100vh',
        duration: 4000,
    })
    .add({
        targets: '#menhome',
        translateY: ['100vh', '0vh'],
        duration: 4000,
    }, '-=4000')
    .add({
        targets: '.sct-3-1',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '-=4000')
    .add({
        targets: '.sct-2-3',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=4000')
    .add({
        targets: '#men-ctrl',
        translateY: ['120%', '90%'],
        duration: 100,
    })
    .add({
        targets: '.sct-3-2',
        zIndex: [0, 1],
        opacity: [
            { value: [0, 1], duration: 800 }
        ],
        translateY: [
            { value: ['102%', '0%'], duration: 1800, delay: 200 },
        ],
    }, '+=2666')
    .add({
        targets: '.sct-3-1',
        zIndex: 0,
        translateY: [
            { value: '-102%', duration: 1800, },
        ],
        opacity: [
            { value: 0, duration: 800, delay: 1400 }
        ],
    }, '-=2000')
    .add({
        targets: '#menhome .reddy',
        fill: '#ee0b0b',
    })


    .add({
        targets: '#men-ctrl',
        translateY: '120%',
        duration: 100,
    }, '+=2666')
    .add({
        targets: '.sct-3-2, #menhome',
        translateY: '-50vh',
        duration: 4000,
    })
    .add({
        targets: 'body >footer',
        translateY: ['100%', '0%'],
        duration: 4000,
    }, '-=4000')



/**
 * Calculate the scroll percentage position
 */
const scrollPercent = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;


    return (docST + bodyST) / (docSH - docCH) * 100
}

/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */
window.onscroll = () => {
    // clearTimeout(tmr)
    tlc.seek((scrollPercent() / 100) * tlc.duration);
};

// var tmr = setTimeout(function () {
//     window.dispatchEvent(new CustomEvent('scroll'));
// }, 501)


if ('IntersectionObserver' in window) {


    // Observe Video Controller (Play Pause)
    const config = {
        // rootMargin: '-30% 10% -40% 10%',
        // threshold: 0.0
    };    
    const targets = document.querySelectorAll('.ctrl');
    function handleIntersection(entries) {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id == 'arrow-ctrl') ppvideo(1, 'vid')
                if (entry.target.id == 'men-ctrl') ppvideo(1, 'men')
                if (entry.target.id == 'arrowpath-ctrl') ppvideo(1, 'aniarrowpath')
            } else {
                if (entry.target.id == 'arrow-ctrl') ppvideo(0, 'vid')
                if (entry.target.id == 'men-ctrl') ppvideo(0, 'men')
                if (entry.target.id == 'arrowpath-ctrl') ppvideo(0, 'aniarrowpath')
            }
        });
    }
    const observer = new IntersectionObserver(handleIntersection, config);
    targets.forEach(target => {
        observer.observe(target);
    });


    // Observe Header
    const configH = {
        // rootMargin: '0% 0% 0% 0%',
        // threshold: 0.0
    };
    var h = document.querySelectorAll('.h .hfull');
    function handleIntersectionH(entries) {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.h').classList.remove('shorty')
            } else {
                document.querySelector('.h').classList.add('shorty')
            }
        });
    }
    var observerH = new IntersectionObserver(handleIntersectionH, configH);
    h.forEach(target => {
        observerH.observe(target);
    });



} else {
    alert('Use a newer browser in order to have a right experience on our website.');
}


// var timer;
function ppvideo(val = 1.0, el = 'vid') {
    // clearInterval(timer)
    let v = document.getElementById(el)
    if (v && el == 'vid') {
        v.playbackRate = val
        return
    }
    if (el == 'aniarrowpath') {
        arr_ani.forEach(ani => {
            if (val == 1) { ani.play() }
            if (val == 0) { ani.pause() }
        })
        return
    }
    if (el == 'men') {
        arr_ani_men.forEach(ani => {
            if (val == 1) { ani.play() }
            if (val == 0) { ani.pause() }
        })
        return
    }
}
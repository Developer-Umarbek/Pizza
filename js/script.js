"use strict"

const qalinligi = $('#qalinligi');

const result = $('#noni')


qalinligi.addEventListener('change', () => {
    let append = create('p', 'p', qalinligi.value);
    result.appendChild(append);
})

// =================== \\

const box = $('#box-1');
const boxSecond = $('#box-2');
const boxThird = $('#box-3');

const resultSecond = $('#katta')

box.addEventListener('click', () => {
    let paragraph = create('p', 'p', '25cm');
    resultSecond.appendChild(paragraph)
})

boxSecond.addEventListener('click', () => {
    let paragraph = create('p', 'p', '30cm');
    resultSecond.appendChild(paragraph)
})

boxThird.addEventListener('click', () => {
    let paragraph = create('p', 'p', '35cm');
    resultSecond.appendChild(paragraph)
})




pomidor.addEventListener('click', () => {
    const pomidor = $('#pomidor');
    const para = $('.usti-p')
    if (pomidor.checked) {
        para.textContent = "-Pomidor";
    } else {
        para.textContent = "Hech narsa yo'q !";
    }
})


bodring.addEventListener('click', () => {
    const bodring = $('#bodring');
    const para = $('.p-2')
    if (bodring.checked) {
        para.textContent = "-Bodring";
    } else {
        para.textContent = "";
    }
})

kurka.addEventListener('click', () => {
    const kurka = $('#kurka');
    const para = $('.p-3')
    if (kurka.checked) {
        para.textContent = "-Kurka go'shti";
    } else {
        para.textContent = "";
    }
})
qoziqorin.addEventListener('click', () => {
    const kurka = $('#kurka');
    const para = $('.p-4')
    if (qoziqorin.checked) {
        para.textContent = "-Qo'ziqorin";
    } else {
        para.textContent = "";
    }
})



zaytun.addEventListener('click', () => {
    const zaytun = $('#zaytun');
    const para = $('.p-5')
    if (zaytun.checked) {
        para.textContent = "-Zaytun";
    } else {
        para.textContent = "";
    }
})

qazi.addEventListener('click', () => {
    const qazi = $('#qazi');
    const para = $('.p-6')
    if (qazi.checked) {
        para.textContent = "-Qazi";
    } else {
        para.textContent = "";
    }
})

achiq.addEventListener('click', () => {
    const achiq = $('#achiq');
    const para = $('.p-7')
    if (achiq.checked) {
        para.textContent = "-Achchiq";
    } else {
        para.textContent = "";
    }
})

sosiska.addEventListener('click', () => {
    const sosiska = $('#sosiska');
    const para = $('.p-8')
    if (sosiska.checked) {
        para.textContent = "-Sosiskali";
    } else {
        para.textContent = "";
    }
})


let a = qalinligi.addEventListener('change', () => {
    let b = qalinligi.value.length

    btn.addEventListener('click', () => {
        const btn = $('#btn');
        const none = $('.none')
        const noneSecond = $('.none-2')
        if (b === 0) {
            noneSecond.setAttribute('class', 'modal-2')
        } else {
            none.setAttribute('class', 'modal')
        }
    })
})
//creazione dei contenuti
function creazione_contenuti() {


    for (let cont of contenuti) {

        const container = document.querySelector('#main');

        const div_container = document.createElement('div');

        const imm = document.createElement('img');
        const titolo = document.createElement('h4');
        const desc = document.createElement('p');
        const mostra_altro = document.createElement('h6');
        const icona = document.createElement('img')

        titolo.textContent = cont.nome;
        imm.src = cont.immagine;
        desc.textContent = cont.descrizione;
        mostra_altro.textContent = "dettagli";

        icona.src = "img/outline_bookmark_border_black_24dp.png"

        desc.classList.add('hidden');

        icona.classList.add('icona');
        imm.classList.add('immagini_principali');

        container.appendChild(div_container);

        div_container.appendChild(titolo);
        div_container.appendChild(icona);
        div_container.appendChild(imm);
        div_container.appendChild(desc);
        div_container.appendChild(mostra_altro);

    }

}

creazione_contenuti();

// funzione che mostra i dettagli 
function mostraDettagli(event) {

    const contenitore = event.currentTarget.parentNode.children;


    if (event.currentTarget.textContent.toLowerCase() === "dettagli") {
        event.currentTarget.textContent = "nascondi";
        contenitore.item(3).classList.remove('hidden');
    } else {

        event.currentTarget.textContent = "dettagli";
        contenitore.item(3).classList.add('hidden');

    }


}

const dettagli = document.querySelectorAll("h6");

for (let d of dettagli)
    d.addEventListener('click', mostraDettagli);


//funzione aggiungi ai preferiti
const notchosed = document.querySelector(".icona").src;

function aggiungiPreferiti(event) {

    const container = event.currentTarget.parentNode;
    console.log(notchosed);
    if (event.currentTarget.src === notchosed) {
        const preferiti = document.querySelector('#preferiti');
        preferiti.classList.remove('hidden');
        container.querySelector('.icona').src = 'img/outline_turned_in_black_24dp.png';
        preferiti.appendChild(container);
        const elementi = event.currentTarget.parentNode.parentNode.parentNode.children;
        elementi.item(1).classList.remove('hidden');
        elementi.item(2).classList.remove('hidden');
        if (document.querySelector('#main').children.length === 0) {
            elementi.item(3).classList.add('hidden');
            elementi.item(4).classList.add('hidden');
        }

    } else {
        const elementi = event.currentTarget.parentNode.parentNode.parentNode.children;
        elementi.item(3).classList.remove('hidden');
        elementi.item(4).classList.remove('hidden');
        const main = document.querySelector('#main');
        container.querySelector('.icona').src = 'img/outline_bookmark_border_black_24dp.png';
        main.appendChild(container);

        if (document.querySelector('#preferiti').children.length === 0) {
            elementi.item(1).classList.add('hidden');
            elementi.item(2).classList.add('hidden');
        }
    }

}


const signs = document.querySelectorAll(".icona");
for (let sign of signs)
    sign.addEventListener('click', aggiungiPreferiti);


//funzione ricerca contenuti

function ricercaElementi(event) {
    const elements = document.querySelectorAll("#main div h4");
    for (let elem of elements) {
        if (elem.textContent.toLowerCase().search(event.currentTarget.value.toLowerCase()) === -1) {

            elem.parentElement.classList.add('hidden');
        } else {
            if (elem.parentElement.classList.contains("hidden"))

                elem.parentElement.classList.remove("hidden");

        }

    }
}

document.querySelector("#ric").addEventListener('keyup', ricercaElementi);
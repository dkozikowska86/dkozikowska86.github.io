console.log('Działa');

let uczniowie = document.querySelectorAll('[id^="uczen"]');


// Dodatkowa funkcjonalność - ustawienie zakresu dozwolonych wartośći i stopniowanie suwaków inputów typu number:

window.onload = function () {
    for (let i = 0; i < uczniowie.length; i++) {
        let inputyNumberUcznia = uczniowie[i].querySelectorAll('[type="number"]');
        inputyNumberUcznia.forEach(function (element) {
            element.setAttribute('step', '0.5');
            element.setAttribute('min', '1');
            element.setAttribute('max', '6');
        });
    }
}


const policzSrednia = (event) => {
    let suma = 0;
    let srednia = 0;

    for (let i = 0; i < uczniowie.length; i++) {

        let matematyka = parseFloat(uczniowie[i].querySelector('.matematyka').value);
        let polski = parseFloat(uczniowie[i].querySelector('.polski').value);
        let biologia = parseFloat(uczniowie[i].querySelector('.biologia').value);
        let geografia = parseFloat(uczniowie[i].querySelector('.geografia').value);
        let fizyka = parseFloat(uczniowie[i].querySelector('.fizyka').value);
        let chemia = parseFloat(uczniowie[i].querySelector('.chemia').value);
        let informatyka = parseFloat(uczniowie[i].querySelector('.informatyka').value);

        let dodatkowe = uczniowie[i].querySelector('.zajecia-dodatkowe').value;

        let matematykaNode = uczniowie[i].querySelector('.matematyka');
        let polskiNode = uczniowie[i].querySelector('.polski');
        let biologiaNode = uczniowie[i].querySelector('.biologia');
        let geografiaNode = uczniowie[i].querySelector('.geografia');
        let fizykaNode = uczniowie[i].querySelector('.fizyka');
        let chemiaNode = uczniowie[i].querySelector('.chemia');
        let informatykaNode = uczniowie[i].querySelector('.informatyka');


        // Dolicznie bonusa za zajęcia dodatkowe z przedmiotu:

        if (dodatkowe.includes('matematyka') && matematyka < 6) {
            if (!matematykaNode.classList.contains('podwyzszonaOcena')) {
                matematyka += 0.5;
                uczniowie[i].querySelector('.matematyka').value = matematyka;
                uczniowie[i].querySelector('.matematyka').classList.toggle('podwyzszonaOcena');
            } else {
                matematyka = matematyka;
            }
        }

        if (dodatkowe.includes('polski') && polski < 6) {
            if (!polskiNode.classList.contains('podwyzszonaOcena')) {
                polski += 0.5;
                uczniowie[i].querySelector('.polski').value = polski;
                uczniowie[i].querySelector('.polski').classList.toggle('podwyzszonaOcena');
            } else {
                polski = polski;
            }
        }

        if (dodatkowe.includes('biologia') && biologia < 6) {
            if (!biologiaNode.classList.contains('podwyzszonaOcena')) {
                biologia += 0.5;
                uczniowie[i].querySelector('.biologia').value = biologia;
                uczniowie[i].querySelector('.biologia').classList.toggle('podwyzszonaOcena');
            } else {
                biologia = biologia;
            }
        }

        if (dodatkowe.includes('geografia') && geografia < 6) {
            if (!geografiaNode.classList.contains('podwyzszonaOcena')) {
                geografia += 0.5;
                uczniowie[i].querySelector('.geografia').value = biologia;
                uczniowie[i].querySelector('.geografia').classList.toggle('podwyzszonaOcena');
            } else {
                geografia = geografia;
            }
        }

        if (dodatkowe.includes('fizyka') && fizyka < 6) {
            if (!fizykaNode.classList.contains('podwyzszonaOcena')) {
                fizyka += 0.5;
                uczniowie[i].querySelector('.fizyka').value = fizyka;
                uczniowie[i].querySelector('.fizyka').classList.toggle('podwyzszonaOcena');
            } else {
                fizyka = fizyka;
            }
        }

        if (dodatkowe.includes('chemia') && chemia < 6) {
            if (!chemiaNode.classList.contains('podwyzszonaOcena')) {
                chemia += 0.5;
                uczniowie[i].querySelector('.chemia').value = chemia;
                uczniowie[i].querySelector('.chemia').classList.toggle('podwyzszonaOcena');
            } else {
                chemia = chemia;
            }
        }

        if (dodatkowe.includes('informatyka') && informatyka < 6) {
            if (!informatykaNode.classList.contains('podwyzszonaOcena')) {
                informatyka += 0.5;
                uczniowie[i].querySelector('.informatyka').value = informatyka;
                uczniowie[i].querySelector('.informatyka').classList.toggle('podwyzszonaOcena');
            } else {
                informatyka = informatyka;
            }
        }


        // Obliczenia do średniej ocen:

        let liczbaPrzedmiotow = uczniowie[i].querySelectorAll('[type="number"]').length;
        suma = matematyka + polski + biologia + geografia + fizyka + chemia + informatyka;
        srednia = (suma / liczbaPrzedmiotow).toFixed(2);
        uczniowie[i].querySelector('.srednia').innerHTML = srednia;


        // Zaznaczanie wyjątków:

        let nazwisko = uczniowie[i].querySelector('.nazwisko');

        if (srednia >= 4.75) {
            nazwisko.classList.toggle('zieloneTlo');
        }

        if ((matematyka || polski || biologia || geografia || fizyka || chemia || informatyka) < 2) {
            nazwisko.classList.toggle('czerwoneTlo');
        }


        // Dodatkowa funkcjonalność- ALERTY:
        alerty.innerHTML = 'ALERT:';

        let liAlert1 = document.createElement('li');
        liAlert1.innerText = 'Oceny z przedmiotu zostały podwyższone o 0,5 oceny jeżeli uczeń brał udział w zajęciach dodatkowych z przedmiotu. Podwyższone oceny zostały wyróżnione żółtą czcionką!';
        alerty.appendChild(liAlert1);

        let liAlert2 = document.createElement('li');
        liAlert2.innerText = 'Uczniowie o średniej równej lub wyższej niż 4,75 zostali zaznaczeni zielonym tłem!';
        alerty.appendChild(liAlert2);

        let liAlert3 = document.createElement('li');
        liAlert3.innerText = 'Uczniowie z minimum jedną oceną niedostateczną zostali zaznaczeni czerwonym tłem!';
        alerty.appendChild(liAlert3);
    }
}


let btnObliczSrednia = document.getElementById('oblicz');
btnObliczSrednia.addEventListener('click', policzSrednia);
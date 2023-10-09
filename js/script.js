/*
Wskazówki
Pobierz odpowiednie elementy.

Zastanów się, skąd możemy brać losowe odpowiedzi.

Zastanów się ilu funkcji w tym projekcie nam potrzeba i jakie ma być ich zadanie. Dla ułatwienia możesz ponownie obejrzeć odcinek, w którym prezentowałem działanie aplikacji.

Zastanów się, w jakiej kolejności powinniśmy wywołać te funkcje. Wszystkie na raz? A może trzeba je zazębić? Czyli funkcja A odpala funkcję B, a funkcja B odpala funkcję C.


Która funkcja powinna zostać odpalona jako pierwsza?



Podpowiedzi do wskazówek
Do pobrania są 4 elementy – obrazek, input, paragraf na odpowiedź i na błąd.

Moglibyśmy stworzyć kilka zmiennych i do nich przypisać jakąś odpowiedź, ale tablica byłaby chyba dużo lepszym rozwiązaniem, prawda? :)

Potrzebujemy:

funkcję od wywoływania animacji,

funkcję od sprawdzania, czy input został wypełniony oraz, czy na końcu jest znak zapytania,

funkcję, która generuje losową odpowiedź.



Oczywiście musimy zazębić nasze funkcje.

Ponownie odsyłam do odcinka, w którym prezentuje działanie aplikacji.


Najpierw widzimy animację, potem pokazuje nam się błąd lub losowa odpowiedź.

Zatem najpierw musimy odpalić animacje, potem sprawdzamy, czy input został uzupełniony oraz, czy ma znak zapytania, a na końcu odpalamy funkcję, która generuje losową odpowiedź.



Podpowiedzi do funkcji
Animacja:

animacja trwa 1 sekundę i wywołuje się po kliknięciu obrazka,

po wykonaniu animacji (ale dopiero po wykonaniu!) musimy odpalić funkcję, która sprawdzi, czy input został poprawnie wypełniony.



Sprawdzanie inputa:

sprawdź, czy input nie jest pusty,

sprawdź, czy na końcu inputa znajduje się znak zapytania (jest taka metoda, która pozwala na wydobycie konkretnego znaku ze stringa),

jeśli wszystko jest ok, odpal funkcję generującą odpowiedź.



Generowanie odpowiedzi:

odpowiedzi są w tablicy – zastanów się, jak można dostać się do konkretnego elementu tablicy,

odpowiedź na powyższe pytanie jest niżej, więc najpierw chwilę pomyśl :P

jeszcze jedna warstwa ochronna, żebyś za szybko nie przeczytał/a odpowiedzi :)



ok, niżej jest odpowiedź na pytanie,

oczywiście do elementów tablicy możemy odwoływać się za pomocą ich indeksów,

w jaki sposób możemy generować losowy indeks? Jest taka funkcja matematyczna od tego ;)

na sam koniec wklej losową odpowiedź do naszego paragrafu.
*/

const ball = document.querySelector('.ball')
const input = document.querySelector('.question-input')
const answerText = document.querySelector('.answer')
const errorText = document.querySelector('.error')
const answers = [
	'Tak, na pewno!',
	'Nie licz na to.',
	'Prawdopodobnie.',
	'Nie jestem pewien.',
	'Oczywiście!',
	'Z pewnością nie.',
	'Spróbuj ponownie później.',
	'Bez wątpienia.',
	'To jest możliwe.',
	'Nie ma na to rady.',
	'Chyba żartujesz!',
	'To bardziej skomplikowane niż myślisz.',
	'Odpowiem ci na to pytanie po obiedzie.',
	'Tylko w twoich najśmielszych snach.',
	"Moje źródła mówią 'nie'.",
	'Zdecydowanie tak, ale nie teraz.',
	'Nie pytaj mnie, pytaj Google.',
	'Możliwe, że tak, ale to zależy od faz księżyca.',
]


const shakeBall = () => {
    answerText.textContent = ''
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 2700)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === "?") {
        generateAnswer()
        errorText.textContent = ""
    } else if (input.value !== '' && input.value.slice(-1) !== "?") {
        errorText.textContent = "Pytanie musi być zakończone znakiem '?'"
        answerText.textContent = ''
    } else {
        errorText.textContent = 'Musisz zadać jakieś pytanie!'
        answerText.textContent = ''
    }
    ball.classList.remove('shake-animation')
}


const generateAnswer = () => {
    const randomNumber = Math.floor(Math.random() * answers.length)
	answerText.innerHTML = `<span>Odpowiedź:</span> ${answers[randomNumber]}`
}

ball.addEventListener('click', shakeBall)



/*
Plan działania aplikacji:
1. Zadajemy pytanie w Input i klikamy bile
2. sprawdzamy czy input nie jest pusty i czy ma znak zapytania,
3. Jeśli brak pytania lub znaku zapytania wyswietlamy komunikat w errorText
4. Jeśli wszystko ok losujemy odpowiedz i wyswietlamy w answerrText
*/



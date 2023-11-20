function Wookiee(prenom) {
    this.prenom = prenom;
    console.info(this.prenom);

    console.info(this);
}

Wookiee('Chewiie');

// 1. Le this est contextualisé par le new !
const wookiee2 = new Wookiee('Chewiee 2');
const wookiee3 = new Wookiee('Chewiee 3');

// -------
function Ewok(prenom, arme) {
    this.prenom = prenom;
    this.arme = arme;

    console.info(this);
}
Ewok('ewok 1', 'lance pierre');
const ewok2 = new Ewok('ewok 2', 'lance');

// Wookiee.call(ewok2, 'Chewiee 4');
// 2. Capacité à changer le context en live et exécuter la fonction
Ewok.call(wookiee2, 'test call', 'arme ?');

// 2. bis. On peut préparer un context et l'exécuter plus tard
const ewokContextualise = Ewok.bind(wookiee2, 'test call bind', 'arme ?');
ewokContextualise();


// 3. Arrow : expression lambda, elle permet de garder le context de l'appelant
const jedi = prenom => {
    console.info(prenom);
    console.info(this);
}

jedi('anakin');

function Jedi(forcePower) {
    console.info('jedi this ?', this);

    const attaquer = coup => {
        console.info('attaquer', this);
    }
    attaquer(10);
}
const luke = new Jedi(100);


// 4. Les promises
function executionPromise() {
    console.info('--------------------');
    const promise = new Promise((resolve, reject) => { // 5. Eager
        console.info('4. Promise'); // 6. Exécution synchrone !!! Danger !!!!!

        // const callback = () => console.info('Youpi je suis la');
        const callback = () => {
            console.info('Youpi je suis la');
            // Appel api, ça met du temps ...
            resolve(150); // 8. toujours asynchrone (même dans un context synchrone)
        }

        setTimeout(callback, 0); // 7. Le settimeout met en attente d'exécution asynchrone
    }).then(nbPoints => console.info('nb points ?', nbPoints));

    console.info('*****************************');
}
executionPromise();
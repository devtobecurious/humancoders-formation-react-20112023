// const monPremierComposant = <h1>Liste des personnes</h1>; // JSX

// function MonComposant() {

// }

const MonComposant = () => {
    const element = <h1>Liste des personnes</h1>;

    console.info(element);

    return element;
}

ReactDOM.render(
    <MonComposant></MonComposant>, 
    document.getElementById('root')
)
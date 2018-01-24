class Data {
    static category(name){
        let url = `https://swapi.co/api/${name}`;
        console.log(url)
        return window.fetch(url)
            .then((response) => response.json())
    }
}

export default Data;
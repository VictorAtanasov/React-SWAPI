class Data {
    static category(name){
        let url = `https://swapi.co/api/${name}`;
        return window.fetch(url)
            .then((response) => response.json())
    }

    static singleView(category, id){
        let url = `https://swapi.co/api/${category}/${id}`;
        return window.fetch(url)
            .then((response) => response.json())
    }

    static nextPage(url){
        return window.fetch(url)
            .then((response) => response.json())
    }
}

export default Data;
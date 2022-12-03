function funcDictionary() {
    var France = {
        Name: "Republique Francaise",
        Capital: "Paris",
        Language: "French",
        Population: "67,897,000 (July 2022, estimate)",
        Currency: "Euro"
    };
    delete France.Population; // delete record from Population
    document.getElementById("Dictionary").innerHTML = France.Population;    // display "undefined" if nothing is follow
    document.getElementById("Dictionary").innerHTML = France.Name;          // display "Republique Francaise"
}
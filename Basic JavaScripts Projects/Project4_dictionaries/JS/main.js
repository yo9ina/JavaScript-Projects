function funcDictionary() {
    var France = {
        Name: "Republique Francaise",
        Capital: "Paris",
        Language: "French",
        Population: "67,897,000 (July 2022, estimate)",
        Currency: "Euro"
    };
    delete France.Population;
    document.getElementById("Dictionary").innerHTML = France.Population;
}
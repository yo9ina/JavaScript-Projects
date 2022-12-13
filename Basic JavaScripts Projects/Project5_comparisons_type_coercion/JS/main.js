function funcTrEq(){
    var a = "alfa",
        b = "beta",
        c = "alfa",
        d = 10,
        e = "ten",
        f = 11,
        m = document.getElementById("tripleEqual").innerHTML = ("Return true by ensuring to match the data type and value: " + (a === c) + "."),
        n = document.getElementById("tripleEqual").innerHTML = ("Return false by writing a different data type and different value: " + (b === d) + "."),
        o = document.getElementById("tripleEqual").innerHTML = ("Return false by writing a different data type but the same value for both: " + (e === d) + ".");
        p = document.getElementById("tripleEqual").innerHTML = ("Return false by writing the same data type but a different value for both: " + (f === d) + ".");
    document.write(m + "<br>" + n + "<br>" + o + "<br>" + p);
}
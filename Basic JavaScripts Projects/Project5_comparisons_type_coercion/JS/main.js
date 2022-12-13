function funcTrEq(){
    var a = 15,
        b = 20,
        c = 30,
        d = 10,
        e = 40,
        f = 11,
        m = document.getElementById("tripleEqual").innerHTML = ((a > d) + " AND " + (a < c) + " = " + ((a>d)&&(a<c))),
        n = document.getElementById("tripleEqual").innerHTML = ((a < d) + " AND " + (a < c) + " = " + ((a<d)&&(a<c))),
        o = document.getElementById("tripleEqual").innerHTML = ((b > d) + " OR " + (e < f) + " = " + ((a>d)||(a<c)));
        p = document.getElementById("tripleEqual").innerHTML = ((a > d) + " OR " + (a < c) + " = " + ((a>d)||(a<c)));
    document.write(m + "<br>" + n + "<br>" + o + "<br>" + p);
}
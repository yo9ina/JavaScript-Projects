function myFunction() {
    document.getElementById("Nested_Function").innerHTML = azi();
    function azi() {
        const z = new Date();
        let timp = z.toTimeString();
        return timp;
    }
}
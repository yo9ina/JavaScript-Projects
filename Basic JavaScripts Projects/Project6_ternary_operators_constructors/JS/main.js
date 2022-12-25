function voteFunction() {
    var Voter, Elect;
    Voter = document.getElementById("Voter").value;
    Elect = (Voter < 18) ? "You are not old enough to":"You can";
    document.getElementById("Elect").innerHTML = Elect + " vote.";
}
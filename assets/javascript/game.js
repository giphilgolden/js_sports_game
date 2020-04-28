let teamoneShootButton = document.querySelector("#teamone-shoot-button")
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals = document.querySelector("#teamone-numgoals")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")
let resetButton = document.querySelector("#reset-button")
let numReset = document.querySelector("#num-resets")

teamoneShootButton.addEventListener("click", function() {
    let newCounterValue = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = newCounterValue;
    if (Math.random() * 100 < 10) {
        let newteamoneNumgoals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals.innerHTML = newteamoneNumgoals;
        alert("goal");
    }
    
    
})

teamtwoShootButton.addEventListener("click", function() {
    let twonewCounterValue = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = twonewCounterValue;
    if (Math.random() * 100 < 10) {
        let newteamtwoNumgoals = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = newteamtwoNumgoals;
        alert("goal")
    }
    })

resetButton.addEventListener("click", function() {
    teamoneNumshots.innerHTML = 0
    teamtwoNumshots.innerHTML = 0
    teamtwoNumgoals.innerHTML = 0
    teamoneNumgoals.innerHTML = 0
    let reseted = Number(numReset.innerHTML) + 1;
    numReset.innerHTML = reseted;
    if (teamoneNumgoals >= teamtwoNumgoals) {
        alert("team 1 wins");
    }
    if (teamtwoNumgoals >= teamoneNumgoals) {
        alert("team 2 wins");
    }

})
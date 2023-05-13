export function Verification(selectedGod, commandIndex, godsArray, teamA, teamB, bansA, bansB, lastCommand, pickedCheck) {
    // console.log(selectedGod, commandIndex, godsArray, teamA, teamB, bansA, bansB, lastCommand);

    if (!selectedGod || selectedGod === {}) { // no selected God
        alert("You should select a God!");
        return false;
    }

    if (selectedGod.banished === true) { // if the selected god is banished
        alert("This god was banished");
        return false;
    }


    // commandIndex => 5 = BAN 2A  (Check if was picked)
    //                 6 = BAN 2B  (Check if was picked)
    //                 7 = PICK 2A (Check if was picked)
    //                 8 = PICK 2B (Check if was picked)

    if ( commandIndex === 5 && (selectedGod.picked.some( e => e === 'a' || e === 'b'))) pickedCheck = true;
    else if ( commandIndex === 6 && (selectedGod.picked.some( e => e === 'a' || e === 'b'))) pickedCheck = true;
    else if ( commandIndex === 7 && selectedGod.picked.some( e => e === 'a') ) pickedCheck = true;
    else if( commandIndex === 8 && selectedGod.picked.some( e=> e === 'b') ) pickedCheck = true;

    if (pickedCheck) {
        alert("This god was aredy picked!");
        return false;
    }
 
    
    // console.log(selectedGod, commandIndex, godsArray, teamA, teamB, bansA, bansB, lastCommand);
    // console.log("###########################")
    return true; // if is all ok
}
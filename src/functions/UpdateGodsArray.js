export function UpdateGodsArray(selectedGod, godsArray, setGodsArray, commandIndex, updateGod) {

    updateGod = godsArray.find(god => god.name === selectedGod.name);


    if (commandIndex === 1) { updateGod.banished = true; } // BANS
    if (commandIndex === 2) { updateGod.banished = true; }

    if (commandIndex === 3) { updateGod.picked.push('a'); } // 1 PICK
    if (commandIndex === 4) { updateGod.picked.push('b'); }

    if (commandIndex === 5) { updateGod.banished = true; }
    if (commandIndex === 6) { updateGod.banished = true; }


    setGodsArray(godsArray, ...[updateGod]);
    // console.log("update gods array")
}
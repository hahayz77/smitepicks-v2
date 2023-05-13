export function UpdateGodsArray(selectedGod, godsArray, setGodsArray, commandIndex, updateGod) {

    updateGod = godsArray.find(god => god.name === selectedGod.name);


    if (commandIndex === 1) { updateGod.banished = true; } // 1 BANS
    if (commandIndex === 2) { updateGod.banished = true; }

    if (commandIndex === 3) { updateGod.picked.push('a'); } // 1A PICK
    if (commandIndex === 4) { updateGod.picked.push('b'); } // 1B PICK

    if (commandIndex === 5) { updateGod.banished = true; } // 2 BANS
    if (commandIndex === 6) { updateGod.banished = true; }

    if (commandIndex === 7) { updateGod.picked.push('a'); } // 2A PICK
    if (commandIndex === 8) { updateGod.picked.push('b'); } // 2B PICK

    setGodsArray(godsArray, ...[updateGod]);
    // console.log("update gods array")
}
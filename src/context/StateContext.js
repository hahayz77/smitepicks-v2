import { createContext, useContext, useState } from "react";
import Verification from '../functions/Verification';
import { UpdateGodsArray } from '../functions/UpdateGodsArray';
import fetchJson from '../data/smiteGods.json';
import { PickImageGod } from "@/functions/PickImageGod";

const Context = createContext();

export const StateContext = ({ children }) => {
    const test = "StateContext is alive!";

    let data = [];

    fetchJson.div.a.forEach((god) => {
        const img = god.div.style.replace(/&quot;/g, '').match(/url\((.*?)\)/)[1];
        const name = god.div.div.div[1].div[0].text;        // NAME
        const banished = false;                             // if the god was banished is true
        const picked = [];                                  // should be A or B => ['a', 'b'], ['a'] or ['b']
        data.push({ name, img, banished, picked });         // Push the extracted values to the 'data' array
    });

    const commands = [
        'Click select to start the picks! ⚫',
        '1º BAN 🔵',
        '1º BAN 🔴',
        '1º PICK 🔵',
        '1º PICK 🔴',
        '2º BAN 🔵',
        '2º BAN 🔴',
        '2º PICK 🔵',
        '2º PICK 🔴',
        'DONE! 🟢'
    ];

    const [commandIndex, setCommandIndex] = useState(0);
    const [godsArray, setGodsArray] = useState(data);
    const [selectedGod, setSelectedGod] = useState();
    const [teamA, setTeamA] = useState([{}, {}]);
    const [teamB, setTeamB] = useState([{}, {}]);
    const [bansA, setBansA] = useState([{}, {}]);
    const [bansB, setBansB] = useState([{}, {}]);
    const lastCommand = commands.length - 1;

    // function RouterDataControl() {

    // }


    function MainScript() {
        if (commandIndex === 0) { // click select to start picking
            setCommandIndex(commandIndex + 1);
            return;
        }
        if (commandIndex === lastCommand) return; // Do it when its done!

        let validation = Verification(selectedGod, commandIndex, godsArray, teamA, teamB, bansA, bansB, lastCommand);
        if (validation === false || JSON.stringify(selectedGod) === '{}') { // verify if all logic is ok!
            PickImageGod({}, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB); // RESET IMG PICKING
            setSelectedGod();   // Updates the useState obj
            return;
        } else {
            UpdateGodsArray(selectedGod, godsArray, setGodsArray, commandIndex);   //persists alterations on godsArray
            setSelectedGod();   // Updates the useState obj
            setCommandIndex(commandIndex + 1);    // increase the variable to set the next one for the sequence;     
        }
    }

    return (
        <Context.Provider value={{
            test,
            commands,
            commandIndex, setCommandIndex,
            godsArray, setGodsArray,
            selectedGod, setSelectedGod,
            teamA, setTeamA,
            teamB, setTeamB,
            bansA, setBansA,
            bansB, setBansB,
            lastCommand,
            MainScript,
            data,

        }}> {children} </Context.Provider>)
}

export const useStateContext = () => useContext(Context);
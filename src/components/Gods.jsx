import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { PickImageGod } from "../functions/PickImageGod";

export function Gods({height}) {

    const { setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB, godsArray } = useStateContext();

    function handler(god){
        PickImageGod(god, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB);
    }

    return (
        <>
            <div id="gods" className='' style={{height: height}}>
                {godsArray.map((god, index)=>{
                return(
                    <div key={`godsArray${index}`} className='gods_wrapper' onClick={()=>{
                        if (god.banished === false) {
                            handler(god); // Execute the handler function
                        } else {
                            PickImageGod({}, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB);
                            toast.error("This god was banished!", {style: {backgroundColor: '#083344',  color: '#fff'}})
                        }
                      }}>
                        <span>{god.name}</span>
                        <div className="img_wrapper relative">
                            <img src={god.img} alt={god.name} />
                            {god.banished === true ? <div className="banished"><span> ❌ </span></div> : null}
                        </div>
                    </div>   
                )
                })}
            </div>
        </>
    )
}
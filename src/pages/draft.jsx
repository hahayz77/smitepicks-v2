import { Gods } from "@/components/Gods";
import { Team } from "@/components/Team";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

export default function Draft() {

    const { commands, commandIndex, MainScript, teamA, teamB, bansA, bansB } = useStateContext();

    return (
        <>
            <div id="draft">
                    <div id='draft_title'>
                        <h1 className='title'><Link href={'/'}>Smite Picks</Link></h1>
                        <div id='playercommands'>
                            <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                            <span>  {commands[commandIndex]}</span>
                        </div>
                    </div>
                    <div id='maincontent' className="fluid-container">
                        <Team team={teamA} bans={bansA} name={"teamA"}/>
                        <Gods />
                        <Team team={teamB} bans={bansB} name={"teamB"}/>
                    </div>
            </div>
        </>
      );
}
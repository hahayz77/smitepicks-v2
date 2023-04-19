import { Gods } from "@/components/Gods";
import { Team } from "@/components/Team";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";



export default function Draft({ draft }) {
  
    const { commands, commandIndex, MainScript, teamA, teamB, bansA, bansB } = useStateContext();

    return (
        <>
            <div id="draft">
                    <div id='draft_title'>
                        <h1 className='title'><Link href={'/'}>Smite Picks</Link></h1>
                        <div id='playercommands'>
                            <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                            <span>  {commands[commandIndex]}</span>
                            <p><span>{draft.id}</span></p>
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { draft: {id: "props"} },
  }
}


// export async function getStaticProps() {
//     const now = new Date();
//     const year = now.getUTCFullYear();
//     const month = String(now.getUTCMonth() + 1).padStart(2, '0');
//     const day = String(now.getUTCDate()).padStart(2, '0');
//     const hours = String(now.getUTCHours()).padStart(2, '0');
//     const minutes = String(now.getUTCMinutes()).padStart(2, '0');
//     const seconds = String(now.getUTCSeconds()).padStart(2, '0');

//     const utcTimestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;

//     console.log('http://api.smitegame.com/smiteapi.svc/createsessionJson/4571/51FE7F2971E34E5F9D55AF9A63642560/'+ utcTimestamp)
//     const response = await fetch('http://api.smitegame.com/smiteapi.svc/createsessionJson/4571/51FE7F2971E34E5F9D55AF9A63642560/'+ utcTimestamp);
//     const posts = await response.json();
//     console.log(response);
  
//     // return {
//     //   props: {
//     //     posts,
//     //   },
//     // };
//   }
import Link from "next/link";

export default function Home() {
  return (
    <section id="home">
        <h1 className='title'>Smite Draft</h1>
        <Link href={'/draft'}><button className="btn w-full px-0 mx-0 py-2">New Draft</button></Link>
        <h2 className="text-center text-white">Or join with a code...</h2>
        <div className="join py-4">
            <input className="w-full px-0 mx-0 py-2 text-center text-xl text-white tracking-[1rem] uppercase" type="text" maxLength={6}/>
            <button className="w-full px-0 mx-0 py-2">Join</button>
        </div>
    </section>
  )
}

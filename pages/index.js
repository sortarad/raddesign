import Head from 'next/head'

const menuData = [""]

export default function Home() {
  return (
    <div className="pb-24">
      <Head>
        <title>RadDesign - HOME</title>
      </Head>
      <div className="flex flex-row">
        <div className="pl-4 w-3/5 mt-5">
          <ul className="flex flex-row">
            <li className="mx-4 text-3xl font-bold cursor-pointer">YOUNG LAB</li>
            <li className="mx-4 text-3xl font-bold cursor-pointer">INFO</li>
            <li className="mx-4 text-3xl font-bold cursor-pointer">CONTACT</li>
          </ul>
          <div className="border-2 border-r-0 border-black mt-10">
            <div className="flex flex-row justify-between items-center pl-6">
              <p className="text-6xl underline">The beauty evolution <br/>of: Kohl eyeliner</p>
              <img src={"../static/arrow.svg"} />
            </div>
            <div>
              <ul>
                <li className="text-6xl border-t-2 border-black pl-6">Preserving local tradition</li>
                <li className="text-6xl border-t-2 border-black pl-6">Shoe fantasy</li>
                <li className="text-6xl border-t-2 border-black pl-6">Food for thought</li>
                <li className="text-6xl border-t-2 border-black pl-6">Future fashion</li>
                <li className="text-6xl border-t-2 border-black pl-6">The slip dress</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-row justify-between">
          <div className="h-full bg-nativeBlue w-16"></div>
          <div className="h-full flex-1 overflow-y-scroll bg-black">
            <div className="flex flex-row justify-between px-4 pt-2 pb-6"> 
              <p className="text-white text-3xl">BACK</p>
              <p className="text-white text-3xl">INSTAGRAM</p>
            </div>
            <img src={"../static/image13.png"} />
          </div>
        </div>
      </div>
      <div className="px-4 mt-16">
        <p className="text-3xl leading-7">YOUNG LAB is a global creative studio focused on design, development, and digital output.
        The studio partners with culturally motivated clients within the art, fashion, and music
        landscapes — bringing to life new digital ecosystems that showcase the breadth of content within a client's portfolio.
          </p>
        <div className="flex flex-row justify-between items-center mt-16">
          <button className="text-3xl leading-7 text-white px-24 py-5 rounded-circle bg-nativeBlue">GET IN TOUCH</button>
          <ul className="flex flex-row">
            <li className="mx-4 text-3xl font-bold cursor-pointer">YOUNG LAB</li>
            <li className="mx-4 text-3xl font-bold cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

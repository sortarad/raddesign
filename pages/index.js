import Head from 'next/head'
import ImageGallery from '../components/imageGallery';
import NavBar from '../components/navBar';
import GetInTouchButton from '../components/getInTouchButton';
import BottomNav from '../components/bottomNav';

export default function Home() {
  return (
    <div className="pb-12">
      <Head>
        <title>RadDesign - HOME</title>
      </Head>
      <div className="flex flex-col lg:flex-row">
        <div className="pl-4 pr-4 lg:pr-0 w-full lg:w-3/5 mt-5 pb-10 lg:pb-0">
          <NavBar currentNav="youngLab" />
          <div className="border-2 lg:border-r-0 border-black mt-10">
            <div className="flex flex-row justify-between items-center pl-6 pr-6">
              <p className="text-2xl md:text-5xl xl:text-6xl underline font-TeX-Regular">The beauty evolution <br/>of: Kohl eyeliner</p>
              <img src={"../static/arrow.svg"} className="w-24 hidden lg:flex" />
            </div>
            <div>
              <ul>
                <li className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular">Preserving local tradition</li>
                <li className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular">Shoe fantasy</li>
                <li className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular">Food for thought</li>
                <li className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular">Future fashion</li>
                <li className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular">The slip dress</li>
              </ul>
            </div>
          </div>
        </div>
        <ImageGallery />
      </div>
      <div className="px-4 mt-16">
        <p className="text-2xl md:text-3xl leading-7 font-TeX-Regular">YOUNG LAB is a global creative studio focused on design, development, and digital output.
        The studio partners with culturally motivated clients within the art, fashion, and music
        landscapes — bringing to life new digital ecosystems that showcase the breadth of content within a client's portfolio.
          </p>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16">
          <GetInTouchButton />
          <BottomNav />
        </div>
      </div>
    </div>
  )
}

import AdsBar from '../../components/adsBar';
import NavBar from '../../components/navBar';
import GetInTouchButton from '../../components/getInTouchButton';
import BottomNav from '../../components/bottomNav';

export default function InfoPage() {
    return (
        <div className="flex flex-col lg:flex-row w-full bg-orangeBackground">
            <div className="w-full lg:w-infoBox flex flex-col justify-between pb-24 mt-4 order-1">
                <NavBar currentNav="info" />
                <p className="text-xl md:text-2xl px-4 mt-12 xl:mt-24 font-TeX-Regular">YOUNG LAB is a global creative studio focused on design, development, and digital output.
                The studio partners with culturally motivated clients within the art, fashion, and music landscapes
                     — bringing to life new digital ecosystems that showcase the breadth of content within a client's portfolio.</p>
                <div className="py-16 xl:py-32 px-4 flex justify-center lg:justify-start">
                    <GetInTouchButton className="my-24" />
                </div>
                <p className="text-xl md:text-2xl px-4 font-TeX-Regular">From conception to execution, SPECIAL OFFER considers the visceral factors that contribute to the user
                experience when interacting, shopping, or otherwise engaging within a branded digital environment.
                The landscape is broad and can come to life as a website, an app, a streaming platform, or another
                boundless digital entity.
                        <br /><br />
                In addition to commercial work, SPECIAL OFFER initiates and produces independent curatorial,
                digital, and print publishing projects.</p>
            </div>
            <AdsBar className="h-full lg:flex-1 order-3 lg:order-2" />
            <div className="w-full lg:w-infoBox order-2 lg:order-3 flex flex-col justify-between">
                <p className="text-white text-2xl w-full text-right px-4 font-VT323-Regular hidden lg:block">INSTAGRAM</p>
                <h1 className="text-6xl pl-4 lg:pl-24 font-TeX-Regular">Work</h1>
                <div className="flex flex-col lg:flex-row px-4 lg:px-10 justify-between items-start lg:items-center lg:items-start relative">
                    <img src={"../../static/info.png"} className="w-4/5" />
                    <img src={"../../static/image 33.png"} className="lg:absolute right-0 top-0 w-1/3 -mt-6 lg:mt-0" />
                </div>
                <div className="w-full flex justify-end mt-4 pb-12">
                    <BottomNav />
                </div>
            </div>
        </div>
    )
}
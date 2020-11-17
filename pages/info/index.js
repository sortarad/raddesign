import AdsBar from '../../components/adsBar';
import NavBar from '../../components/navBar';
import GetInTouchButton from '../../components/getInTouchButton';
import BottomNav from '../../components/bottomNav';

export default function InfoPage() {
    return (
        <div className="flex flex-row w-full">
            <div className="w-infoBox flex flex-col justify-between pb-24 mt-4">
                <NavBar currentNav="info" />
                <p className="text-2xl px-4 mt-24">YOUNG LAB is a global creative studio focused on design, development, and digital output.
                The studio partners with culturally motivated clients within the art, fashion, and music landscapes
                     — bringing to life new digital ecosystems that showcase the breadth of content within a client's portfolio.</p>
                <div className="py-32">
                    <GetInTouchButton className="my-24" />
                </div>
                <p className="text-2xl px-4">From conception to execution, SPECIAL OFFER considers the visceral factors that contribute to the user
                experience when interacting, shopping, or otherwise engaging within a branded digital environment.
                The landscape is broad and can come to life as a website, an app, a streaming platform, or another
                boundless digital entity.
                        <br /><br />
                In addition to commercial work, SPECIAL OFFER initiates and produces independent curatorial,
                digital, and print publishing projects.</p>
            </div>
            <AdsBar className="flex-1" />
            <div className="w-infoBox">
                <p className="text-white text-2xl w-full text-right px-4">INSTAGRAM</p>
                <h1 className="text-6xl pl-24">Work</h1>
                <div className="flex flex-row px-10 justify-between items-start relative">
                    <img src={"../../static/image 31.png"} />
                    <img src={"../../static/image 33.png"} />
                    <img src={"../../static/image 32.png"} className="absolute bottom-0 -mb-32 ml-64" />
                </div>
                <div className="w-full flex justify-end mt-32 pb-12">
                    <BottomNav />
                </div>
            </div>
        </div>
    )
}
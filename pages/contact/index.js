import NavBar from '../../components/navBar';
import BottomNav from '../../components/bottomNav';

export default function ContactPage() {
    return (
        <div className="back-white flex flex-col pt-4">
            <NavBar currentNav="contact" />
            <p 
            className="px-4 text-verySmall md:text-small lg:text-medium xl:text-veryLarge leading-verySmall md:leading-small lg:leading-medium xl:leading-large mt-12 font-TeX-Regular">
                YOUNG<br/>LAB</p>
            <p className="px-4 text-xl md:text-3xl mt-12 font-VT323-Regular">STUDIO & GALLERY<br/>
                SANT JOAQUIM 13, BARCELONA<br/>
                <br/>
                HELLO@YOUGLAB.COM<br/>
                BEHANCE<br/>
                INSTAGRAM</p>
            <div className="flex flex-col lg:flex-row justify-between items-end mt-12 md:mt-24 pb-6">
                <p className="pl-4 w-full lg:w-contactTextBox text-xl md:text-3xl font-TeX-Regular">YOUNG LAB is a global creative studio focused on design, development, and digital output.
                    The studio partners with culturally motivated clients within the art, 
                    fashion, and music landscapes — bringing to life new digital ecosystems that showcase 
                    the breadth of content within a client's portfolio.</p>
                <BottomNav />
            </div>
        </div>
    )
}
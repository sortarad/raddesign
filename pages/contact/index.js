import NavBar from '../../components/navBar';
import BottomNav from '../../components/bottomNav';

export default function ContactPage() {
    return (
        <div className="back-white flex flex-col pt-4">
            <NavBar currentNav="contact" />
            <p className="px-4 text-veryLarge leading-large mt-12">YOUNG<br/>LAB</p>
            <p className="px-4 text-3xl mt-12">STUDIO & GALLERY<br/>
                SANT JOAQUIM 13, BARCELONA<br/>
                <br/>
                HELLO@YOUGLAB.COM<br/>
                BEHANCE<br/>
                INSTAGRAM</p>
            <div className="flex flex-row justify-between items-end mt-24 pb-6">
                <p className="pl-4 w-contactTextBox text-3xl">YOUNG LAB is a global creative studio focused on design, development, and digital output.
                    The studio partners with culturally motivated clients within the art, 
                    fashion, and music landscapes — bringing to life new digital ecosystems that showcase 
                    the breadth of content within a client's portfolio.</p>
                <BottomNav />
            </div>
        </div>
    )
}
import Link from 'next/link';

export default function NavBar() {
    return (
        <ul className="flex flex-row">
            <li className="mx-4 text-3xl font-bold cursor-pointer"><Link href="/">YOUNG LAB</Link></li>
            <li className="mx-4 text-3xl font-bold cursor-pointer"><Link href="/info">INFO</Link></li>
            <li className="mx-4 text-3xl font-bold cursor-pointer"><Link href="/contact">CONTACT</Link></li>
        </ul>
    )
}
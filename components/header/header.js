import Link from "../utilities/link"

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}
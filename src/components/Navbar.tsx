import { Icons } from "./Icons"
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <Link href='/'>
                <Icons.logo />
            </Link>
        </div>
    )
}
export default Navbar
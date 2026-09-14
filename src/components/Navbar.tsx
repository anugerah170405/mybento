import { ArrowUpRight } from "lucide-react"
import { ButtonBox } from "./ButtonBox"
import { Logo } from "./Logo"

type Props = {}

export const Navbar = ({}: Props) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4">
            <Logo size={24} />

            <ButtonBox Icon={<ArrowUpRight />} />
        </nav>
    )
}
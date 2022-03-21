import BBImage from '../../public/images/BadBrainsST.jpg'
import Image from "next/image"

export default function Footer() {
    return (
        <div>
        <Image src={BBImage} />
        </div>
    )
}
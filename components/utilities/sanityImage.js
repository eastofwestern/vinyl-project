import client from '../../client';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImage({image, altText, layout}) {

    const imageProps = useNextSanityImage(
        client,
        image
    );

    if (layout === "fill") {
        return (
            <Image src={imageProps.src} layout="fill" objectFit="cover" alt={altText} />
        )
    } else {
        return (
            <Image {...imageProps} alt={altText} />
        )
    }

}
import Image from "next/image"
import { client } from "@/../sanity/lib/client"
import { useNextSanityImage } from "next-sanity-image"

interface NoteImageProps {
    //children: React.ReactNode;
}

interface Props {
    alt: string
    className: string
    width: number
    height: number
}

export default function SanityImage({ image, ...props }: any) {
    const sanityImage = useNextSanityImage(client, image)

    console.log("IMG:", image)

    return (
        <Image
            // @ts-ignore
            {...sanityImage}
            alt=""
            {...props}
        />
    )
}

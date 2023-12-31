import { useLoaderData } from "react-router-dom";
import { Photo } from "../gallery/photos";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Gallery() {
    const photos = useLoaderData() as Photo[];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-center">Gallery</h1>
            <p>Here are some of my favourite photos that I have taken on my Olympus 140 Zoom Deluxe</p>
            <div className="flex flex-col gap-3">
                {photos.map(photo => <GalleryPhoto photo={photo} />)}
            </div>
        </div>
    );
}

function GalleryPhoto({ photo }: { photo: Photo }) {

    return (
        <div className="flex flex-col gap-2">
            <div className="rounded-md overflow-hidden">
                {photo.image}
            </div>
            <div className="flex flex-col gap-0.5">
                <h2 className="text-2xl font-bold">{photo.title}</h2>
                <div className="flex flex-row gap-x-2 items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <h2 className="text-lg">{photo.date.toDateString()}</h2>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                    <FontAwesomeIcon icon={faTag} />
                    {photo.tags.map((tag, i) => <p key={i} className="text-sm">{tag}</p>)}
                </div>
                <p>{photo.description}</p>
            </div>
        </div>
    )
}
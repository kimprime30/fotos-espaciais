import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo;
    onClick: ( ) => void;
}

export const PhotoItem =({photo, onClick} : Props) =>{
    return(
        <div onClick={onClick} className="relative mx-2">
            <img className="cursor-pointer" src={`/assets/${photo.url}`} alt={`${photo.url}`} />
            <button className="absolute text-white top-0 z-50">x</button>
        </div>
    )
}
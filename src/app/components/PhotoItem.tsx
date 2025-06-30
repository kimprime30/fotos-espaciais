import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo;
    onClick: ( ) => void;
}

export const PhotoItem =({photo, onClick} : Props) =>{
    return(
        <div onClick={onClick} className=" cursor-pointer shadow-md hover:scale-1=5 overflow-hidden  mx-2">
            <img 
            className="w-full h-auto obect-cover" 
            src={`/assets/${photo.url}`} 
            alt={`Foto ${photo.url}`} />
            
        </div>
    )
}
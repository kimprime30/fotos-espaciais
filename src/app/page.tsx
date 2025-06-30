'use client'

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";
import { useState } from "react";

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const [showModal, setShowModal] = useState(false)

const opemModal = (id:number) => {
  const photoSelected = photoList.find((item ) =>item.id === id)
  if(photoSelected) {
    setSelectedPhoto(photoSelected.url)
    setShowModal(true)
  }
}

  return (
    <div>
      <h1>Fotos Espaciais</h1>
      <section >
        {photoList.map((item) => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick = {() => {opemModal(item.id)}}
          />
        ))}
      </section>
    </div>
  );
}

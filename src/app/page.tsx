'use client'

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";
import { useState } from "react";
import { Modal } from "./components/Modal";

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

const closeModal = () => {
  setShowModal(false)
}

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Fotos Espaciais</h1>
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoList.map((item) => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick = {() => {opemModal(item.id)}}
          />
        ))}
      </section>

      {showModal && (
        <Modal
        image = {selectedPhoto}
        onClose= {closeModal} />
      )}
    </div>
  );
}

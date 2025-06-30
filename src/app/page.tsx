'use client'

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";

export default function Home() {
  return (
    <div>
      <h1>Fotos Espaciais</h1>
      <section>
        {photoList.map((item) => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick = {() => {}}
          />
        ))}
      </section>
    </div>
  );
}

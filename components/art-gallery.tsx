"use client";

import Image from "next/image";
import { Heart, X } from "lucide-react";
import { useState } from "react";
import { usePortal } from "@/components/theme-provider";

export type ArtItem = readonly [file: string, name: string, category: string];

export function ArtGallery({ items }: { items: ArtItem[] }) {
  const [selected, setSelected] = useState<ArtItem | null>(null);
  const { preferences, toggleFavorite } = usePortal();

  return (
    <>
      <div className="gallery">
        {items.map((item, index) => {
          const [file, name, category] = item;
          const favorite = preferences.favoriteArt.includes(name);
          return (
            <article className={index === 0 || index === 5 ? "wide" : ""} key={file}>
              <button className="art-open" onClick={() => setSelected(item)} type="button">
                <Image src={`/img/artist/${file}`} alt={name} fill sizes="(max-width: 1000px) 50vw, 30vw" />
              </button>
              <div><span>{category}</span><strong>{name}</strong></div>
              <button aria-label={`${favorite ? "Remove" : "Add"} ${name} ${favorite ? "from" : "to"} favorites`} className={favorite ? "favorite active" : "favorite"} onClick={() => toggleFavorite(name)} type="button"><Heart size={18} fill={favorite ? "currentColor" : "none"} /></button>
            </article>
          );
        })}
      </div>
      {selected ? (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected[1]}>
          <button aria-label="Close artwork" onClick={() => setSelected(null)} type="button"><X /></button>
          <div><Image src={`/img/artist/${selected[0]}`} alt={selected[1]} fill sizes="80vw" /></div>
          <h2>{selected[1]}</h2>
        </div>
      ) : null}
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

interface Manga {
  mal_id: number;
  title: string;
  images: {
    webp: { image_url: string };
  };
}

interface MangaListProps {
  api: { data: Manga[] }; // Mengubah tipe data sesuai dengan respons API
}

const MangaList: React.FC<MangaListProps> = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((manga) => (
        <div key={manga.mal_id} className="flex flex-col shadow-xl">
          <Link href={`/manga/${manga.mal_id}`}>
            <Image
              src={manga.images.webp.image_url}
              alt={manga.title}
              width={350}
              height={350}
              className="w-full max-h-64 object-cover rounded-lg"
            />
            <h3 className="font-bold text-md md:text-xl p-4">{manga.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MangaList;

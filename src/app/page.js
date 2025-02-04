import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(item => (
            <div key={item.mal_id} className="shadow-xl">
              <AnimeList title={item.title} images={item.images.webp.image_url} id={item.mal_id} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;

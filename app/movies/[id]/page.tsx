import Image from "next/image";
import { fetchMovieID } from "../../../Shared/api";

type Props = {
  params: {
    id: string;
  };
};
export default async function movies({ params: { id } }: Props) {
  const element = await fetchMovieID(id);
  const moviesPhoto = `https://image.tmdb.org/t/p/original/${element.poster_path}`;

  return (
    <>
      <h1>Movies {id}</h1>
      <Image
        src={moviesPhoto}
        alt="Photo"
        width={300}
        height={450}
        blurDataURL="data:..."
        placeholder="blur"
      />
    </>
  );
}

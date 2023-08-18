import Link from "next/link";
import Image from "next/image";
type Props = {
  movies: any[];
};
const FoundMovies = ({ movies }: Props) => {

  return (
    <ul className="wrapperPoster">
      { movies.map((post: any) => (
        <li key={post.id}  className="PosterList">
          <Link href={`movies/${post.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
              alt={post.title || post.name}
              width={200}
              height={300}
               blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMrwcAAVMA6K9W9k4AAAAASUVORK5CYII="
              placeholder="blur"
              className="Photo"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export { FoundMovies };

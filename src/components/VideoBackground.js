import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen ">
      <iframe
      className="w-screen aspect-video"
        
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=rkeKQhs-eDTtoqtc?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   `https://www.youtube.com/embed/${trailer.key}/?&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=${trailer.key}`;
// }

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/G_AEL-Xo5l8?si=UVNIOqlkFvMhvfYv"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;

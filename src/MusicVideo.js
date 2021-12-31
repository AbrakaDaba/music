import React from "react";

const MusicVideo = (props) => {
console.log(props);
let{song, artist, src} = props.el
    return(
        <article className="music__box">
          <iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </article>
    )
}


export default MusicVideo
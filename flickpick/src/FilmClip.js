import React from 'react'

//import './Button.css';

const FilmClip = ({ filminfo }) => {
  return (
    <div style={{border: "solid 1px black", width: "80vw", marginLeft: "auto", marginRight: "auto", maxWidth: "990px"}}>
      <div style={{border: "solid 1px black", display: "inline-block", width: "33%"}}>
        <img style={{width: "100%", height: "auto"}} className="card-img-top" src={`https://image.tmdb.org/t/p/original${filminfo["poster_path"]}`} alt="Card cap"></img>
      </div>
      <div style={{border: "solid 1px black", verticalAlign: "top", display: "inline-block", width: "66%"}}>
        Title: {filminfo["original_title"]}<br />
        Summary: {filminfo["overview"]}<br />
      </div>
    </div>
)};

export default FilmClip

import React from 'react'
import ApiLib from './ApiLib';

//import './Button.css';

const FilmClip = ({ filminfo }) => {
  return (
    <div style={{border: "solid 1px black", width: "80vw", marginLeft: "auto", marginRight: "auto", maxWidth: "990px"}}>
      <div style={{border: "solid 1px black", display: "inline-block", width: "33%"}}>
        <img style={{width: "100%", height: "auto"}} className="card-img-top" src={ApiLib.common.getImage({size: "original", file: filminfo["poster_path"]})} alt="Film Poster"></img>
      </div>
      <div style={{border: "solid 1px black", verticalAlign: "top", display: "inline-block", width: "66%"}}>
        <b>{filminfo["original_title"]}</b><br />
        Summary: {filminfo["overview"]}<br />
      </div>
    </div>
)};

export default FilmClip

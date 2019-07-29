import React from 'react'
import FilmClip from './FilmClip'

// Filmstrip is the area where movies are displayed
class FilmStrip extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let filmlist = this.props.filmlist
    let maxStripLen = 20
    const filmClipComponent = filmlist.slice(0, maxStripLen).map((film, id) =>
      <FilmClip
        key={id}
        filminfo={filmlist[id]}
      />
    )

    return (
      <div>
        {filmClipComponent}
      </div>
    )
  }
}

export default FilmStrip

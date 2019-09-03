import React from 'react'

class Music extends React.Component {
  state = {
		audioOn: false
  }
  
  onToggleMusic = () => {
		this.setState(({audioOn}) => {
			return {
				audioOn: !audioOn
			}
		});
	}

  render() {
    const { audioOn } = this.state;
    let audio;
		if (audioOn) {
			audio = (
				<audio loop autoPlay volume="0" id="audio-player">
					<source src="/audio/music.mp3" type="audio/mpeg" />
				</audio>
			);
    }
    
    return (
      <button
        onClick={ this.onToggleMusic }
        className={"navbar__sound " + (audioOn ? 'audio-on' : '')}>
        <div className="lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Sound</p>
        { audio }
      </button>
    );
  }
}

export default Music

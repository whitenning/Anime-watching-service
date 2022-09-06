
import ReactPlayer from 'react-player'
import './player.css'
import { BiPlay } from 'react-icons/bi'
import React, { Component } from 'react'


export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.match.params.id,
            videoData: {}
        };
    }
    async componentDidMount() {
        try {
            const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
            const data = await res.json();
            this.setState({ videoData: data });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
          <div>
            <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`http://localhost:4000/video/${this.state.videoId}`}
          controls={true} 
          width='100%'
          height ='100%'/>
      </div>
          </div>
            
        )
    }
}
  
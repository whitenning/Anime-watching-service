import React from 'react'
import './comments.css'
import { Link } from 'react-router-dom'
import { commentator } from './Commentdata'
const Comments = () => {
  return (
    <div className="chat">
          <h3>Chat</h3>
          <p>The popular comments will display here</p>

            <div className="chat__container">
            <Link to='/'><img src={ commentator[0].image }/><span className='name'>{ commentator[0].name }</span></Link>
              <Link to='/'className='anime__title'>{ commentator[0].anime__title }</Link>
              <span>{ commentator[0].comment }</span>
            </div>

            <div className="chat__container">
            <Link to='/'><img src={ commentator[1].image }/><span className='name'>{ commentator[1].name }</span></Link>
              <Link to='/'className='anime__title'>{ commentator[1].anime__title }</Link>
              <span>{ commentator[1].comment }</span>
            </div>

            <div className="chat__container">
            <Link to='/'><img src={ commentator[2].image }/><span className='name'>{ commentator[2].name }</span></Link>
              <Link to='/'className='anime__title'>{ commentator[2].anime__title }</Link>
              <span>{ commentator[2].comment }</span>
            </div>

            <div className="chat__container">
            <Link to='/'><img src={ commentator[3].image }/><span className='name'>{ commentator[3].name }</span></Link>
              <Link to='/'className='anime__title'>{ commentator[3].anime__title }</Link>
              <span>{ commentator[3].comment }</span>
            </div>

            <div className="chat__container">
            <Link to='/'><img src={ commentator[4].image }/><span className='name'>{ commentator[4].name }</span></Link>
              <Link to='/'className='anime__title'>{ commentator[4].anime__title }</Link>
              <span>{ commentator[4].comment }</span>
            </div>

        </div>
        
  )
}

export default Comments
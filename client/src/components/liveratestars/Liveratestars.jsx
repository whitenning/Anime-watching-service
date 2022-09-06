import React from 'react'
import './liveratestars.css'

const Liveratestars = () => {
  return (
    <>
    <div className="star__container">
    <div className="star__rating">
        <input type="radio" id="star5" name="rating" value="5"/><label htmlFor="star5" className='full'></label>
        <input type="radio" id="star4.5" name="rating" value="4.5"/><label htmlFor="star4.5" className='half'></label>
        <input type="radio" id="star4" name="rating" value="4"/><label htmlFor="star4" className='full'></label>
        <input type="radio" id="star3.5" name="rating" value="3.5"/><label htmlFor="star3.5" className='half'></label>
        <input type="radio" id="star3" name="rating" value="3"/><label htmlFor="star3" className='full'></label>
        <input type="radio" id="star2.5" name="rating" value="2.5"/><label htmlFor="star2.5" className='half'></label>
        <input type="radio" id="star2" name="rating" value="2"/><label htmlFor="star2" className='full'></label>
        <input type="radio" id="star1.5" name="rating" value="1.5"/><label htmlFor="star1.5" className='half'></label>
        <input type="radio" id="star0" name="rating" value="1"/><label htmlFor="star1" className='full'></label>
        <input type="radio" id="star0.5" name="rating" value="0.5"/><label htmlFor="star0.5" className='half'></label>
    </div>
    <h4 id="rating-value"></h4>
    </div>
    </>
  )
}


let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('click', function() {
    i = this.value;
    showValue.innerHTML = "Your rate: " + i
  });
}

export default Liveratestars
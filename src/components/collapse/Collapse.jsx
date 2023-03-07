import './Collapse.css';
import { useState } from 'react';

function Collapse() {
    let [isClicked, setIsClicked] = useState(false);
  return (
    <div className="collapse">
     <button className="button-collapse" onClick={()=>setIsClicked(!isClicked)}>
        click me!
     </button>
                <div className={`${isClicked? "active": ""} chatbox`}>
                <div className='chat-window'>
                <div className='chatbox-item left'>
                    <img className="chatbox-icon"src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg" alt="icon1" />
                    <div className='information-text'>Hi cat</div>
                </div>
                <div className='chatbox-item right'>
                    <div className='information-text'>Hi Dog</div>
                    <img className="chatbox-icon" src="http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" alt="icon2" />
                </div>
                <div className='chatbox-item left'>
                    <img className="chatbox-icon"src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg" alt="icon1" />
                    <div className='information-text'>How are you?</div>
                </div>
                <div className='chatbox-item right'>
                    <div className='information-text'>I am fine. How about you?</div>
                    <img className="chatbox-icon" src="http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" alt="icon2" />
                </div>
                </div>
                <form className="chat-input chatbox-item" onsubmit="return false;">
                      <input className="chat-type" type="text" autocomplete="on" placeholder="Type a message" />
                      <img className="send-icon" src='https://thumbs.dreamstime.com/b/green-email-button-10131806.jpg' alt='icon-send-msg'></img>
               </form>
            </div>
    </div>
  );
}
export default Collapse;
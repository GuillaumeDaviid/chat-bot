import { useState } from 'react';
import './Chat.css'

function Chat() {

    const [msg, setMsg] = useState();

    function handleClick(e){
        e.preventDefault();
        console.log('click');
    }


    return(
        <div>
            <h1>Chat Bot</h1>
            <div className="chat_bot" id="chat_bot">
                <div className='chat_bot_content-msg' id='chat_bot_content-msg'>
                <h2 className='chat_bot-msg'>Bot :</h2>
                <p className='chat_bot-msg'>Bonjour, Je suis un bot codé en React.js</p>
                </div>
            </div>
            <form className='form'>
                <input className='msg' id="msg" placeholder='Message'></input>
                <button className='btn' onClick={handleClick}>Envoyer</button>
            </form>
        </div>
    )
}

export default Chat
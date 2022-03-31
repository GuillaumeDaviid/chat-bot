import { useState } from 'react';
import './Chat.css'

function Chat() {

    const [msg, setMsg] = useState('');
    const [countMsg, setCountMsg]= useState(0);
    const [newMsg, setNewMsg]= useState([]);

    function handleClick(e){
        e.preventDefault();
        setCountMsg(countMsg + 1);
        setNewMsg(newMsg.concat(msg))
        setMsg('');
    }

    function msgBot(newMsg) {
        if (newMsg === "Bonjour"){
            return (<p className='chat_bot-msg'>Bonjour</p>)
        }
        else if (newMsg === "!help"){
            return (<p className='chat_bot-msg'>Voici une liste de commande possible</p>)
        }
        else {
            return (<p className='chat_bot-msg'>Je n'est pas compris ton dernier message</p>)
        }
    }

    function handleChange(e){
        setMsg(e.target.value);
    }

    const listMsg = countMsg > 0 ?
    (newMsg.map((newMsg) => <div className='chat_bot_content-msg'><h2 className='chat_bot-msg'>Moi :</h2><p className='chat_bot-msg' key={newMsg.key}>{newMsg}</p>
    <h2 className='chat_bot-msg'>Bot :</h2> {msgBot(newMsg)}</div>))
 : (<p></p>)

    return(
        <div>
            <h1>Chat Bot</h1>
            <div className="chat_bot" id="chat_bot">
                <div className='chat_bot_content-msg' id='chat_bot_content-msg'>
                <h2 className='chat_bot-msg'>Bot :</h2>
                <p className='chat_bot-msg'>Bonjour, Je suis un bot codé en React.js</p>
                </div>
                {listMsg}
                
                
            </div>
            <form className='form'>
                <input className='msg' id="msg" placeholder='Message'  value={msg} onChange={handleChange}></input>
                <button className='btn' onClick={handleClick}>Envoyer</button>
            </form>
        </div>
    )
}

export default Chat
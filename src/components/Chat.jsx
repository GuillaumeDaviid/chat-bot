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
        console.log(countMsg);
        console.log(msg);
        console.log(newMsg);
        setMsg('');
    }

    function msgBot(newMsg) {
        if (newMsg === "Bonjour"){
            return (<p>Bonjour</p>)
        }
        else if (newMsg === "!help"){
            return (<p>Voici une liste de commande possible</p>)
        }
        else {
            return (<p>Je n'est pas compris ton dernier message</p>)
        }
    }

    function handleChange(e){
        setMsg(e.target.value);
    }

    const listMsg = countMsg > 0 ?
    (newMsg.map((newMsg) => <div className='chat_bot_content-msg'><h2>Moi :</h2><p key={newMsg.key}>{newMsg}</p>
    <h2>Bot :</h2> {msgBot(newMsg)}</div>))
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
                <input className='msg' id="msg" placeholder='Message' onChange={handleChange}></input>
                <button className='btn' onClick={handleClick}>Envoyer</button>
            </form>
        </div>
    )
}

export default Chat
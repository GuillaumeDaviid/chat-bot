import './Chat.css'

function Chat() {
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
                <button className='btn'>Envoyer</button>
            </form>
        </div>
    )
}

export default Chat
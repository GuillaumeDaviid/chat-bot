import './Chat.css'

function Chat() {
    return(
        <div>
            <h1>Chat Bot</h1>
            <div className="chat_bot" id="chat_bot"></div>
            <form className='form'>
                <input className='msg' id="msg" placeholder='Message'></input>
                <button className='btn'>Envoyer</button>
            </form>
        </div>
    )
}

export default Chat
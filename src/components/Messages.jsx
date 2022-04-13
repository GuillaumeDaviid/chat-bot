export function msgBot(newMsg) {
        if (newMsg.toLowerCase() === "bonjour"){
            return (<p className='chat_bot-msg'>Bonjour !</p>)
        }
        else if (newMsg.toLowerCase() === "!help" || newMsg.toLowerCase() === "!aide" || newMsg.toLowerCase() === "aide"){
            return (<p className='chat_bot-msg'>Voici une liste de commande possible : 
            <br/> - !help 
            <br/> - !freelance</p>)
        }
        else if (newMsg.toLowerCase() === "!freelance"){
            return (<p className='chat_bot-msg'>Si vous souhaitez prendre contact avec un freelance, vous pouvez le faire ici: <a href="https://www.guillaumedavid.com" rel="noreferrer" target="_blank">guillaumedavid.com</a></p>)
        }
        else if (newMsg.toLowerCase() === "au revoir"){
            return (<p className='chat_bot-msg'>Au revoir !</p>)
        }
        else if (newMsg.toLowerCase() === "github" || newMsg.toLowerCase() === "!github"){
            return (<p className='chat_bot-msg'>Voici le lien <a href="https://github.com/GuillaumeDaviid" rel="noreferrer" target="_blank">Github</a> de mon créateur !</p>)
        } 
        else {
            return (<p className='chat_bot-msg'>Je n'est pas compris ton dernier message</p>)
        }
    }
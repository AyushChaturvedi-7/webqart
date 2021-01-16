import React from 'react';
function Message({username, message,messagesEndRef}) {
    const isUser = username===message.username;
    return(
        <div >
            <h6 className={isUser?"user":"notUser"}>{message.username}</h6>
            <h4 ref={messagesEndRef} className={isUser?"userMessage":"notUserMessage"}>{message.text}</h4>
        </div>
    )
}
export default  Message
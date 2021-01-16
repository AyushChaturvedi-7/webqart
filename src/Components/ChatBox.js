import React,{useState,useEffect,useRef} from  'react'
import Message from "./Message";
import DashBoard from "./DashBoard";
function ChatBox(props) {
    const [input ,setInput]= useState("");
    const [messages,setMessages]= useState([{username:'Ayush',text:'hey there ..!!'},{username:'Ayush',text:'Type a message and press enter.'}]);
    const [username,setUsername]=useState("");
    const inputRef=useRef(null);
    const messagesEndRef=useRef(null)

    const scrollToBottom=()=>{
        messagesEndRef.current.scrollIntoView({behavior:"smooth"});
    }
    useEffect(scrollToBottom,[messages])

    const sendMessage=(event) =>{
        event.preventDefault()
        setMessages([...messages, {username:username, text: input}]);
        setInput('');
    }
    useEffect(()=>{
            setUsername(props.username);
            inputRef.current.focus();
    },[])

    return(
        <div className="ChatBox">
            <div className="ChatLogo"></div>
            <button className="btn btn-secondary Back" onClick={event => {props.onChange(<DashBoard {...props}/>)}}>Back</button>
            {/*<h1>ChatBox</h1>*/}
            <form className= "Msg">
                <input ref={inputRef} className="messageBox" type="text" value={input} onChange={event => setInput(event.target.value) } placeholder="Type a message"/>
                <button className="btn btn-primary b" disabled={!input} type="submit"  onClick={sendMessage}>send message</button>

            </form>
            <div className="MessageBox">
                {
                    messages.map( m=><p>{<Message username={username} message={m} messagesEndRef={messagesEndRef}/>}</p>)
                }

            </div>
        </div>
    )
}
export default ChatBox
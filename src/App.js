import React, { useEffect, useState } from 'react';
import './App.css';
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";
import ak from './ak.png';

const App = () => {
    const [name, setname] = useState('');
    const [chats, setchats] = useState([]);
    const [msg, setmsg] = useState('');

    const db = getDatabase();
    const chatListRef = ref(db, 'chats');

    const updateHeight = () => {
        const element = document.getElementById('chat');
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }

    useEffect(() => {
        onChildAdded(chatListRef, (data) => {
            setchats(chats => [...chats, data.val()])
            setTimeout(() => {
                updateHeight()
            }, 100)
        });
    }, [])



    const sendChat = () => {
        const chatRef = push(chatListRef);
        set(chatRef, {
            name, message: msg
        });
        setmsg('');
    };

    return (
        <div>


            {
                name ?
                    null :
                    <div className='home'>
                        <div className='header'>

                            <section class="wrapper">
                            <div class="top">Chatsi</div>
                            <div class="bottom" aria-hidden="true">Chatsi</div>
                            </section>
                            
                            <span className='extra' >Welcome to the open community chats</span>
                        </div>
                        <br/>
                        
                        <div className='enter'>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter the id'
                                onBlur={e => setname(e.target.value)}>
                            </input>
                            <button>Go</button>
                        </div>
                        <img
                            class='center'
                            style={{ paddingTop:"5px",height: 150, width: 150 }}
                            src={ak} alt="Ak" />

                    </div>
            }

            {name ?
                <div>
                    <div>
                        <h1 className='welcome'>Hey {name}! Let's Chat. </h1>
                    </div>
                    
                    <div id='chat' className='chat-container'>
                        {
                            chats.map(
                                // change c
                                (c, i) => <div key={i} className={`container ${c.name === name ? 'me' : ''}`}>
                                    <p className='chat-box'>
                                        <strong>{c.name} : </strong>
                                        <span>{c.message} </span>
                                    </p>
                                </div>)
                        }

                    </div>
                    <div className='bot'>
                        {/* change the function parameter e */}
                        <input
                            style ={{width:"80%"}}
                            type="text"
                            placeholder='Enter message'
                            onInput={e => setmsg(e.target.value)}
                            value={msg} />
                        <button 
                        style ={{width:"20%"}}
                        onClick={e => sendChat()}>Send&#8250;</button>
                    </div>
                </div>
                : null}
            
        </div>
    )
}

export default App;
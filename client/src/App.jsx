import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';

const apiKey = 'qgtk9ttyha7j';

const client = StreamChat.getInstance(apiKey);

const App = () => {

    return (
        <div className="app__wrapper">
            <h1>Hello!</h1>
        </div>
    );
}

export default App;

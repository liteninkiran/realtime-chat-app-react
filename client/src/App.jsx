import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

const client = StreamChat.getInstance(apiKey);

const App = () => {

    return (
        <div className="app__wrapper">
            <ChannelListContainer />
            <ChannelContainer />
        </div>
    );
}

export default App;

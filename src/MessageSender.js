import React, { useEffect, useState } from 'react';

import './MessageSender.css';

import Avatar from '@mui/material/Avatar';

import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import { useStateValue } from './StateProvider';

import { db } from './firebase';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const MessageSender = () => {

    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')




    const handleSubmit = (e) => {

        e.preventDefault();

        // some clever db stuff

        if (input.length === 0) return;

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");


    }

    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        className="messageSender__input"
                        type="text"
                        placeholder={`What's on your mind ${user.displayName} ?`}
                        value={input}
                        onChange={e => setInput(e.target.value)}

                    />

                    <input
                        type="text"
                        placeholder="image URL (Optional)"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    );
};

export default MessageSender;
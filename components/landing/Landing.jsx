import React from "react";
import EmojiList from "../emojis/EmojiList";
import Playlist from "../Playlist";

function Landing() {
    return (
        <div className="landing__container">
            <h2>How are you feeling today?</h2>
            <EmojiList />
            <Playlist />
        </div>
    )
}

export default Landing;
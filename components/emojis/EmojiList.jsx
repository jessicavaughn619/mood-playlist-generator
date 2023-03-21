import React from 'react';
import Emoji from "./Emoji"
import emojis from "./emojis"
import { Card } from 'semantic-ui-react'

const EmojiList = () => {
    const emojiList = emojis.map((emoji) => (
          <Emoji 
          key={emoji.id}
          emoji={emoji}
        />
    ))
  return (
    <div className="emojilist__container">
      <Card.Group itemsPerRow={2}>
        {emojiList}
      </Card.Group></div>
  )
}

export default EmojiList;
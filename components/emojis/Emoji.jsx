import React from 'react'
import { Card } from 'semantic-ui-react'

const Emoji = ({ emoji }) => {
  function handleClick() {
    console.log(emoji.name)
  }

  return (
    <div className="emoji__container">
    <Card onClick={handleClick}>
      {emoji.emoji}
      {emoji.name}
    </Card>
    </div>
  )
}

export default Emoji;
import React from 'react'
import { Card } from 'semantic-ui-react'

const Emoji = ({ emoji }) => {
  function handleClick() {
    console.log(emoji.name)
  }

  return (
    <Card onClick={handleClick}>
      {emoji.emoji}
      {emoji.name}
    </Card>
  )
}

export default Emoji;
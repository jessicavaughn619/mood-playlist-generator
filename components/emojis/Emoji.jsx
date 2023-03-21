import React from 'react'
import { Card } from 'semantic-ui-react'

const Emoji = ({ emoji }) => {
  return (
    <Card>
      {emoji.emoji}
      {emoji.name}
    </Card>
  )
}

export default Emoji;
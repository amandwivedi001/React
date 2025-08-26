import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const NewElement = (
  <a href='www.google.com' target='_blank'>click me to visit google</a>
)

const anotherUser = " chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'www.google.com', target:'_blank'},
  'click me to visit gooooogle',
  anotherUser
)
createRoot(document.getElementById('root')).render(
    reactElement
)

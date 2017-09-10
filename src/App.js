import React from 'react'

import Layout from './components/layout/Layout'
import AdjectiveDeclinations from './components/sections/adjectives/AdjectiveDeclinations'
import './App.css'

const tabs = [
  { title: 'Adjektivdeklination', content: <AdjectiveDeclinations /> },
  // { title: 'Tab 2', content: 'Tab 2 Content' },
  // { title: 'Tab 3', content: 'Tab 3 Content' },
]

class App extends React.Component {
  render() {
    return <Layout tabs={tabs} />
  }
}

export default App

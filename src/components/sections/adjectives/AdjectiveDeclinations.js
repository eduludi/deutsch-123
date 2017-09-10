import React from 'react'
import { Input } from 'semantic-ui-react'

import GrammarTable from '../../ui/GrammarTable'
import { definiter, indefiniter, nullartikel } from '../../../data/adjectives'

class AdjectiveDeclinations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adjective: 'bunt',
    }
  }

  setAdjective = (e, { value }) => {
    this.setState({ adjective: value })
  }

  render() {
    const { adjective } = this.state
    return (
      <div>
        <Input
          label="Adjektiv"
          onChange={this.setAdjective}
          value={adjective}
          placeholder="Adjektiv tippen"
        />
        <GrammarTable
          title="Definiert Artikel"
          data={definiter}
          value={adjective}
        />
        <GrammarTable
          title="Indefiniter Artikel"
          data={indefiniter}
          value={adjective}
        />
        <GrammarTable
          title="Nullartikel"
          data={nullartikel}
          value={adjective}
        />
      </div>
    )
  }
}

AdjectiveDeclinations.propTypes = {}
AdjectiveDeclinations.defaultProps = {}

export default AdjectiveDeclinations

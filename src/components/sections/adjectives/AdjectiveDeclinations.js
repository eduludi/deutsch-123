import React from 'react'
import { Input } from 'semantic-ui-react'

import GrammarTable from '../../ui/GrammarTable'
import { definiter, indefiniter, nullartikel } from '../../../data/adjectives'

class AdjectiveDeclinations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adjective: 'klein',
      nounMasculine: 'Mann',
      nounFeminine: 'Frau',
      nounNeutre: 'Mädchen',
      nounPlural: 'Jungen',
    }
  }

  setAdjective = (e, { value }) => {
    this.setState({ adjective: value })
  }
  setNounMasculine = (e, { value }) => {
    this.setState({ nounMasculine: value })
  }
  setNounFeminine = (e, { value }) => {
    this.setState({ nounFeminine: value })
  }
  setNounNeutre = (e, { value }) => {
    this.setState({ nounNeutre: value })
  }
  setNounPlural = (e, { value }) => {
    this.setState({ nounPlural: value })
  }

  render() {
    const {
      adjective,
      nounMasculine,
      nounFeminine,
      nounNeutre,
      nounPlural,
    } = this.state

    const nouns = {
      m: nounMasculine,
      f: nounFeminine,
      n: nounNeutre,
      p: nounPlural,
    }
    return (
      <div>
        <Input
          label="Adjektiv"
          onChange={this.setAdjective}
          value={adjective}
          placeholder="Adjektiv tippen"
        />
        <div>
          <br />
          <h3>Nomen:</h3>
          <Input
            label="Der"
            onChange={this.setNounMasculine}
            value={nounMasculine}
            placeholder="maskuline nomen"
            icon="man"
          />
          &nbsp;
          <Input
            label="Das"
            onChange={this.setNounNeutre}
            value={nounNeutre}
            placeholder="neutre nomen"
            icon="neuter"
          />
          <br />
          <br />
          <Input
            label="Die"
            onChange={this.setNounFeminine}
            value={nounFeminine}
            placeholder="feminin nomen"
            icon="woman"
          />
          &nbsp;
          <Input
            label="Die (pl.)"
            onChange={this.setNounPlural}
            value={nounPlural}
            placeholder="plural nomen"
            icon="transgender"
          />
        </div>
        <GrammarTable
          title="Definiert Artikel"
          data={definiter}
          value={adjective}
          nouns={nouns}
        />
        <GrammarTable
          title="Indefiniter Artikel"
          data={indefiniter}
          value={adjective}
          nouns={nouns}
        />
        <GrammarTable
          title="Nullartikel"
          data={nullartikel}
          value={adjective}
          nouns={nouns}
        />
      </div>
    )
  }
}

AdjectiveDeclinations.propTypes = {}
AdjectiveDeclinations.defaultProps = {}

export default AdjectiveDeclinations

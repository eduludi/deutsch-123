import React from 'react'
import PropTypes from 'prop-types'

import { Container, Tab, Header } from 'semantic-ui-react'

class Layout extends React.Component {
  getPanes = () => {
    const { tabs } = this.props
    return tabs.map(tab => ({
      menuItem: tab.title,
      render: () => <Tab.Pane>{tab.content}</Tab.Pane>,
    }))
  }

  render() {
    return (
      <Container>
        <Header>{this.props.title}</Header>
        <Tab panes={this.getPanes()} />
      </Container>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.array,
}
Layout.defaultProps = {
  title: 'Deustch',
  tabs: [],
}

export default Layout

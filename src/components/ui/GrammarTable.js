import React from 'react'
import { Grid, Header, Label, Table } from 'semantic-ui-react'

import { Color } from './snippets'
import { parseMarkdown, defaultInlineTags } from '../../utils/markdown'

const md = text =>
  parseMarkdown(text, {
    inlineTags: {
      ...defaultInlineTags,
      strong: ({ text }) => (
        <Color name="blue">
          <strong>{text}</strong>
        </Color>
      ),
    },
  })

const GramaticTable = ({ title, data, value }) => (
  <div>
    <br />
    <Header>{title}</Header>
    <Table definition celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={2} />
          {data.headers.map((header, key) => (
            <Table.HeaderCell key={key} width={4}>
              <strong>{header.title}</strong>
              <br />
              <em>
                <small>{header.hint}</small>
              </em>
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.rows.map((row, key) => (
          <Table.Row key={key}>
            <Table.Cell>
              <Label circular color={row.header.color} empty />{' '}
              {row.header.title}
            </Table.Cell>
            {row.cols.map((col, key) => (
              <Table.Cell key={key}>
                <Grid>
                  <Grid.Row>
                    {col.start ? (
                      <Grid.Column textAlign="center" width={4}>
                        {md(col.start)}
                      </Grid.Column>
                    ) : null}
                    <Grid.Column width={12}>
                      <Color name="green">
                        <em>{value}</em>
                      </Color>
                      <Color name="red">
                        <strong>{col.ending}</strong>
                      </Color>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
)

GramaticTable.propTypes = {}
GramaticTable.defaultProps = {}

export default GramaticTable

import React from 'react'
import reactStringReplace from 'react-string-replace'

export const defaultInlineTags = {
  strong: ({ text }) => <strong>{text}</strong>,
  em: ({ text }) => <em>{text}</em>,
}

const inlineRules = (tags = defaultInlineTags) => [
  { match: /\*\*(.*)\*\*/g, replace: tags.strong },
  { match: /__(.*)__/g, replace: tags.em },
]

// const defaultBlockTags = {
//   p: ({text}) => <p>{text}</p>,
//   h1: ({text}) => <h1>{text}</h1>,
//   h2: ({text}) => <h2>{text}</h2>,
//   h3: ({text}) => <h3>{text}</h3>,
//   ul: ({text}) => <ul>{text}</ul>,
//   ol: ({text}) => <ol>{text}</ol>,
//   li: ({text}) => <li>{text}</li>,
// }

// const blockRules = (tags=defaultBlockTags) => [
//   [/^(#) (.*)/, tags.h1],
//   [(/^(##) (.*)/, tags.h2)],
//   [(/^(###) (.*)/, tags.h3)],
// ]

const parseMarkdown = (input = '', { inlineTags = defaultInlineTags } = {}) => {
  let output = input
  for (const inlineRule of inlineRules(inlineTags)) {
    output = reactStringReplace(output, inlineRule.match, (text, key) => (
      <inlineRule.replace text={text} key={inlineRule.match + key} />
    ))
  }

  return output
}

export { parseMarkdown }

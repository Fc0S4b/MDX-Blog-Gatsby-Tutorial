import React from 'react'
import { MDXProvider } from '@mdx-js/mdx'

const components = {
  // logic
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

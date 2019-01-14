import React from 'react'
import { render } from 'react-dom'
import { css } from 'astroturf'
import { cx } from 'utils'

const styles = css`
  :global {
    .global-class {
      font-family: Roboto, Lato, sans-serif;
    }
  }

  .app {
    font-weight: bold;
  }
`

const App = () => (
  <div className={cx(styles.app, 'global-class container mx-auto text-center py-4')}>Hi!</div>
)

render(<App />, document.getElementById('root'))

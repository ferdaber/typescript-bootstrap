import React from 'react'
import { render } from 'react-dom'
import { css } from 'astroturf'
import { cx } from 'utils'

const styles = css`
  .app {
    font-weight: bold;
  }
`

const App = () => (
  <div className={cx(styles.app, 'global-class container mx-auto text-center py-4')}>Hi!</div>
)

render(<App />, document.getElementById('root'))

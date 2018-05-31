import React from 'react'
//
import { render } from '../../utils/testing/components'
import Meta from './'

describe('Meta Component Test', () => {
  it('Renders', () => {
    const { container } = renderSetup()

    expect(container.firstChild).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    ...overrides,
  }

  const wrapper = render(<Meta {...props} />)

  return {
    ...wrapper,
    props,
  }
}

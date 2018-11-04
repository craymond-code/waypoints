import * as React from 'react'
import { Wrapper } from './styled-components'

export interface IMapProps {
  background: string
  panning: boolean
  onAddMarker: (position) => void
}

export default class Map extends React.Component<IMapProps, {}> {
  static defaultProps: Partial<IMapProps> = {
    panning: false
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <Wrapper onClick={this.handleClick} background={this.props.background}>
        {this.props.children}
      </Wrapper>
    )
  }

  handleClick(e) {
    console.log('map click', this.props.panning)
    // TODO(shawk): allow adding markers by clicking the map. Right now there
    // seems to be an issue where after clicking to pan this handler fires so
    // we might to do find a workaround. We only want to detect single left
    // clicks that aren't the beginning of a pan or double click.
    if (e.isDefaultPrevented() || this.props.panning) {
      return
    }

    debugger
    this.props.onAddMarker({
      x: 0,
      y: 0
    })
    e.preventDefault()
  }
}

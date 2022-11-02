import React from 'react';

export default class ProjectKYP extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  static defaultProps = {
    foo: 1
  }

  render() {
    return <div {...this.props}>{this.props.children}</div>;
  }
}

import { DefaultButton } from '@fluentui/react';
import React from 'react';
import { DecisionNode } from './model';
import './Node.css'

interface IProps {
  node: DecisionNode
  onClick: (index:number) => void
}

export default class Node extends React.Component<IProps> {

  renderButton = (index:number) => {
    return <DefaultButton key={index} text={(this.props.node.answers || [])[index]} onClick={this.props.onClick.bind(null, index)} />
  }

  render() {
    const { node } = this.props
    if (node.question && (node.children?.length || 0) > 0) {
      return <div className="section">
        {node.question}
        <br/>
        {node.children?.map((_,i) => this.renderButton(i))}
      </div>
    }

    return <div className="section">
      {node.outcome}
    </div>
  }
}
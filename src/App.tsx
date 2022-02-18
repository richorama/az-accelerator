import React from 'react';
import './App.css';
import getTree, { DecisionNode } from './model'
import Node from './Node'

interface IProps { }

interface IState {
  tree: DecisionNode
  decisions: number[]
}

export default class App extends React.Component<IProps, IState> {

  state = {
    tree: getTree(),
    decisions: []
  }

  handleClick = (index: number, value: number) => {
    console.log(`${index} : ${value}`)

    const decisions = [...this.state.decisions.filter((_, i) => i <= index), value]
    console.log(decisions.join())
    this.setState({ decisions })
  }

  renderNode = (index: number, remainingTree: DecisionNode) => {
    return <Node key={index} node={remainingTree} onClick={value => this.handleClick(index, value)} />
  }

  render() {
    let { tree, decisions } = this.state
    return <div>
      {this.renderNode(-1, tree)}
      {
        decisions.map((i, counter) => {
          if (!tree.children) return null
          tree = tree.children[i]
          console.log(tree)
          return this.renderNode(counter, tree)
        })
      }</div>
  }
}

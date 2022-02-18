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
    const decisions = [...this.state.decisions.filter((_, i) => i <= index), value]
    this.setState({ decisions })
  }

  renderNode = (index: number, remainingTree: DecisionNode, activeIndex: number) => {
    return <Node activeIndex={activeIndex} key={index} node={remainingTree} onClick={value => this.handleClick(index, value)} />
  }

  render() {
    let { tree, decisions } = this.state
    return <div>
      {this.renderNode(-1, tree, decisions.length === 0 ? -1 : decisions[0])}
      {
        decisions.map((i, counter) => {
          if (!tree.children) return null
          tree = tree.children[i]
          return this.renderNode(counter, tree, decisions[counter + 1])
        })
      }</div>
  }
}

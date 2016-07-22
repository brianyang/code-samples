import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRepo, loadStargazers } from '../actions'
import Repo from '../components/Repo'
import User from '../components/User'
import List from '../components/List'

function loadData(props) {
  const { fullName } = props
  props.loadRepo(fullName, [ 'description' ])
  props.loadStargazers(fullName)
}

class Test extends Component {
  constructor(props) {
    super(props)
    this.renderUser = this.renderUser.bind(this)
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fullName !== this.props.fullName) {
      loadData(nextProps)
    }
  }

  handleLoadMoreClick() {
    this.props.loadStargazers(this.props.fullName, true)
  }

  renderUser(user) {
    return (
      <User user={user}
            key={user.login} />
    )
  }

  render() {
    return (
      <div>foo</div>
    )

  }
}


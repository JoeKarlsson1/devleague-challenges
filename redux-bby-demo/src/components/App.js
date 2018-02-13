import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../actions';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
	constructor() {
    super();
  };

	componentDidMount() {
		const { dispatch } = this.props;

    this.loadDataFromReddit()
			.then(posts => {
				if(!posts) {
					return [];
				}
				return dispatch(setItems(posts));
			})
  };

  onError(err) {
    console.error(err.toString());
  };

	loadDataFromReddit () {
		const url = 'https://www.reddit.com/r/Showerthoughts.json';
		return fetch(url)
			.then(response => {
				return response.json();
			})
			.then(posts => {
				return posts.data.children;
			})
			.catch(err => {
				this.onError(err);
			})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

				{this.props.posts.map((item, idx) => {
					return (
						<div>
							{item.data.title}
						</div>
					)
				})}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.default,
  }
};

export default connect(
  mapStateToProps
)(App);

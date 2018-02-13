import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Before adding the XHR request to reddit - use this placeholder data - once the basic application is built out - you can add the XHR request and comment this data out.
// var data = [
//   {id:1, title:'Cats are great', author:"joejoebinks3"},
//   {id:2, title:'Dogs are great', author:"rayraybinks3"},
//   {id:3, title:'Fish are great', author:"jonjonbinks3"},
//   {id:4, title:'Lizards are great', author:"jsonjsonbinks3"}
// ];

class Page extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
    }
    // Since the callback function changes context - we need to bind the context of the React component so that we can update state once we receive the data from Reddit
    this.loadDataFromReddit = this.loadDataFromReddit.bind(this);
  };

	componentDidMount() {
		this.loadDataFromReddit()
			.then(posts => {
				if(!posts) {
					return [];
				}
				return this.setState({
					posts,
				});
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
      <div>
        <h1>Reddit Clone</h1>
        <List redditData={this.state.posts} />
      </div>
    )
  }
};

class List extends Component {
  render() {
    var redditListNode = this.props.redditData.map((redditDataItem) => {
      return (
        <Item author={redditDataItem.data.author} key={redditDataItem.data.id} >
          {redditDataItem.data.title}
        </Item>
      )
    })
    return (
      <div className='redditList'>
        <h2>Reddit List</h2>
        { redditListNode }
      </div>
    )
  }
};

class Item extends React.Component {
  render() {
    return (
      <div className='redditItem'>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
      </div>
    )
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Page />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { getGithubIssues } from './api/github';
import Header from '../src/components/Header';
import IssueCard from './components/IssueCard';
import SearchBar from './components/SearchBar';


export default class App extends React.Component  {
  state = {
    openIssuesCount: 0,
    gitData :[]
  }
  async  componentDidMount() {
    const data = await getGithubIssues();
    this.setState({
      openIssuesCount: data.length,
      gitData :data
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <SearchBar issuesCount={this.state.openIssuesCount}/>
          <IssueCard
            issueData={this.state.gitData}
          />
        </div>
      </div>
    );
  }
}


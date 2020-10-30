import React from 'react';
import './App.css';
import { getGithubIssues } from './api/github';
import Header from '../src/components/Header';
import IssueCard from './components/IssueCard';
import SearchBar from './components/SearchBar';
import DetailPage from './components/DetailPage';
import Loader from './components/Loader';


export default class App extends React.Component  {
  state = {
    openIssuesCount: 0,
    gitData: [],
    showDetailPage: false,
    url: '',
    showLoader: true,
    headerTitle : ''

    
  }
  async  componentDidMount() {
    const data: [] = await getGithubIssues();
    if (data.length > 0) {
      this.setState({
        openIssuesCount: data.length,
        gitData: data,
        showLoader: false,
      });
    }
   
  }
  showSeatsAllocation = (comment:number ,data:[], title:string) => {
    if (comment > 0) {
      this.setState({
        showDetailPage: true,
        url: data,
        headerTitle : title
      })
    }
  }
  backButtonHandler = () => {
    this.setState({
      showDetailPage : false
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <SearchBar issuesCount={this.state.openIssuesCount} showBackButton={this.state.showDetailPage}
            backButton={this.backButtonHandler}
            title={this.state.headerTitle}
          />
          {this.state.gitData.length > 0 && !this.state.showDetailPage ? 
            
           <IssueCard
              issueData={this.state.gitData}
              gotoSeatAvailability={this.showSeatsAllocation}
            />
            : null}
          {this.state.showLoader &&         <Loader/> }

          {this.state.showDetailPage && <div>
            <DetailPage
             detailUrl={this.state.url}
            />
         </div> }
        </div>
      </div>
    );
  }
}


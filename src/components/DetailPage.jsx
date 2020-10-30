import React, { Component } from 'react'
import {getGithubDetailPage} from '../api/github'
import Loader from './Loader';
import './DetailPage.css';
import moment from 'moment';

export default class DetailPage extends Component {
    state = {
        showLoader: true,
        detailIssue : []
    }
    getPastTime(date) {
        return moment(date).fromNow(); //eg. 1 day ago, 2 hours ago etc
       
     }
   async componentDidMount() {
       const data = await getGithubDetailPage(this.props.detailUrl);
       if (data.length > 0) {

           this.setState({
            showLoader: false,
        detailIssue : data
       })
       }
    }
    render() {
        return (
            <div>
                {this.state.showLoader && 
                                    <Loader/>
                }
                {Array.isArray(this.state.detailIssue) && this.state.detailIssue.map((issues, i) =>
                    (
 <div className="detail-container">
                    <div className="card-container Box-header  card-container-border">
                        <div className="timeline-comment-header">
                          <span className="userName">  {issues.user.login} </span> commented { this.getPastTime(issues.created_at)}
                        </div>
                        <code >
                        {issues.body.trim()}

                        </code>
                    </div>
                   
                </div>
                ))}
               
            </div>
        )
    }
}

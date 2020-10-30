import React, { Component } from 'react'
import './IssueCard.css';
import moment from 'moment';
export default class IssueCard extends Component {
    state = {
        gitIssueData: []
    }
    async componentDidMount() {
        this.setState({
            gitIssueData: this.props.issueData
        });
    }

    getPastTime(date) {
       return moment(date).fromNow(); //eg. 1 day ago, 2 hours ago etc
      
    }
    render() {
        return (
            <div>
                {Array.isArray(this.state.gitIssueData) && this.state.gitIssueData.map((issues, i) => (

                    <div key={issues.id} className="issues-container">
                        <div className="card-container Box-header d-flex flex-justify-between">
                            <div className="border Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row">
                                <div className="d-flex Box-row--drag-hide position-relative">
                                    <div className="flex-shrink-0">
                                        <span className="open-icon">
                                            <svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-auto min-width-0 ml-4 pl-3">

                                        <div className="link-gray-dark v-align-middle no-underline h4 js-navigation-open tooltip" onClick={e => this.props.gotoSeatAvailability(issues.comments,issues.comments_url, issues.title)}>
                                            <div class="tooltiptext pl-1">
                                                <div className=" mt-1 text-small text-gray date-tooltip">
                                                    On { this.getPastTime(issues.created_at)}
                                                </div>
                                                <div className="text-label">
                                                    <div>
                                                        {issues.body.trim()}
                                                    </div>
                                                </div>
                                            </div>

                                            {issues.title.trim()}
                                        </div>
                                        <div className="mt-1 text-small text-gray">
                                            <span className="opened-by">
                                                #{issues.number} opened { this.getPastTime(issues.created_at)} by <a href="https://github.com/team" className="muted-link tooltip-author">
                                                {/* <div class="tooltiptext-author pl-1">
                                               <img src={issues.user.avatar_url} alt="" width="20px" height="20px"/>
                                            </div> */}
                                                    {issues.user.login}
                                                
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex-shrink-0 col-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">
                                <span className="ml-2 flex-1 flex-shrink-0">
                                </span>
                                <span className="ml-2 flex-1 flex-shrink-0">
                                </span>
                                {issues.comments > 0 && <span>
                                    <span className="ml-2 flex-1 flex-shrink-0">
                                        <svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path></svg>
                                        <span class="text-small text-bold pl-2">{issues.comments} </span>
                                    </span>
                                </span>}

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

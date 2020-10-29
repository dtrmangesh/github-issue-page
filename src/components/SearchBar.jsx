import React from 'react'
import './SearchBar.css'
export default function SearchBar(props) {

    return (
        <div className="container-xl clearfix new-discussion-timeline px-3 px-md-4 px-lg-5 mt-6">
            <div className="d-flex flex-justify-between mb-md-3 flex-column-reverse flex-md-row flex-items-end">
              <div className="d-flex flex-justify-start flex-auto  my-4 my-md-0">
                <form action="" className="subnav-search  ml-0">
                  <input type="text" className="form-control form-control subnav-search-input input-contrast " />
                  <svg className="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
                </form>
              </div>
            </div>
            <div className="Box mt-3 Box--responsive hx_Box--firstRowRounded0">
              <div className="Box-header d-flex flex-justify-between">
                <div className="table-list-filters flex-auto d-flex min-width-0">
                  <div className=" d-none d-lg-block no-wrap">
                    <div className="table-list-header-toggle states flex-auto pl-0">
                      <svg className="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                      <a href="" className="open-button"> {props.issuesCount} Open</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    )
}

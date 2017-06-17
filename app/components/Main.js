impimport React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

var Link = require("react-router").Link;

var Main = React.createClass({

  render: function() {

    return (
      
      <div className="main-container">
        <div className="container">
 
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Quotes-React</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/favorited">Favorited</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          
          <div className="jumbotron well">
            <h2 className="text-center"><strong>Quotes App</strong></h2>
          </div>

          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
});

export default Main;

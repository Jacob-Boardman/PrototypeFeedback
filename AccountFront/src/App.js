import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import axios from "axios";
import { BaseURL, PathToCreateAccount, LinkAdminPage, LinkQuestionSheet} from './constants'
import AdminPage from "./Components/AdminPage";
import HomePage from "./Components/HomePage";
import QuestionSheet from "./Components/QuestionSheet";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accNum: '',
    }
  }

  handleClick = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
      alert("invalid input");
    } else {
      axios.post(BaseURL + PathToCreateAccount,
        {
          username: username,
          password: password
        }).then((response) => {
          this.setState({
            accNum: response.data.accountNumber,
            
          });

        })
    }
    console.log("Testing");
  }

  render() {
    return (
      <Router>
        <div className="App">
          <center>

            <Link to={LinkAdminPage} id='generateNum' />

            <Route exact path="/" component={HomePage} />
            <Route path={LinkQuestionSheet} render={(...props) => <QuestionSheet />} />
            <Route path={LinkAdminPage} render={(...props) => <AdminPage />} />

          </center>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Homepage } from '../constants';
import { Button } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          technial: '',
         
        }
      }

    loadHomePage = () => {
        window.location.href = Homepage;
    }

    handleChange = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className){
            case "Beginner":
                this.setState({
                    technial : event.target.value
                })
            break;
            case "Intermediate":
            this.setState({
                technial : event.target.value
            })
            break;
            case "Expert":
            this.setState({
                technial : event.target.value
            })
            break;
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Question Sheet</h1>
                <br/>

                Interviewee: <input className='name' type='text' required /> &nbsp; REF: 00001 <br /><br />
                <div className="technical">
                    <div className="options">
                        <form>
                            <input type="radio" className="Beginner" name="technicallvl" value="Beginner" onChange={this.handleChange}/>Beginner&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="Intermediate" name="technicallvl" value="Intermediate" onChange={this.handleChange}/>Intermediate&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="Expert" name="technicallvl" value="Expert" onChange={this.handleChange}/>Expert&nbsp;&nbsp;&nbsp;
                        </form>
                    </div>
                </div>
                <br /><br /><br />
                <Button bsStyle="primary" onClick={(event) => { this.loadHomePage(); }}>Logout</Button>
            </div>

        );

    }
}

export default HomePage;
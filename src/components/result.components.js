import './style.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Result extends Component{


    constructor(props) {
        super(props);
        this.state = {
            score:0,
            correctCount:0,
            wrongCount:0
        }
      }

    componentDidMount(){
        const urlParams = new URLSearchParams(window.location.search);

        this.setState({
            score:urlParams.get('score'),
            correctCount:urlParams.get('correct'),
            wrongCount:urlParams.get('wrong'),
            noAnswerCount:urlParams.get('noanswer'),
        });
    }

    render() {
        return (
            <div className="bg">

                <div className='loginButtonDiv'>
                    <Link style={{ textDecoration: 'none' }} to={'/login'}>
                        <button className='loginButton'>Sign In</button>
                    </Link>
                </div>

                <div className='score'>
                        <h1> {this.state.score} </h1>
                        <p>  سکه  </p>
                </div>

                <div className='answer_results'>
                    <div className='buttonResultWrong'>
                        <div> Yanlış: {this.state.wrongCount} </div>
                    </div>
                    <div className='buttonResultCorrect'>
                        <div> Doğru: {this.state.correctCount}  </div>
                    </div>
                </div>

                <div className='no_answer'>
                    Cevapsız: {this.state.noAnswerCount}
                </div>

                <Link style={{ textDecoration: 'none' }} to={'/'}> 
                    <button className='goProfileButton'>
                        بازگشت به پروفایل   
                    </button>
                </Link>
            </div>
        )
    }
}
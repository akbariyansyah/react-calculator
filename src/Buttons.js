import React from 'react';
import Display from './Display'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: "",
            number2: "",
            operator: "",
            calculator: "",
            result: 0,
            status: false
        }
    }
    sendValue = (number) => {
        if (this.state.operator !== "") {
            this.setState({
                number2: this.state.number2 += number,
                calculator: this.state.calculator = this.state.number2
            })
        } else {
            this.setState({
                number1: this.state.number1 += number,
                calculator: this.state.calculator = this.state.number1
            })
        }


    }
    sendOperator = (op) => {
        this.setState({
            operator: this.state.operator += op,
            calculator: this.state.calculator += this.state.operator
        })
    }
    result = () => {
        let op = this.state.operator
        let result = null
        switch (op) {
            case "+":
                result = Number(this.state.number1) + Number(this.state.number2);
                break
            case "-":
                result = Number(this.state.number1) - Number(this.state.number2);
                break
            case "*":
                result = Number(this.state.number1) * Number(this.state.number2);
                break
            case "/":
                result = Number(this.state.number1) / Number(this.state.number2);
                break

        }
        this.setState({
            result: this.state.result = result,
            status: true
        })
    }
    clear = () => {
        this.setState({
            number1: this.state.number1 = "",
            number2: this.state.number2 = "",
            operator: this.state.operator = "",
            calculator: this.state.calculator = "",
            result: this.state.result = 0,
            status: this.state.status = false
        })
    }
    render() {
        let display
        if (this.state.status) {
            display = <Display result={this.state.result} />
        } else {
            display = <Display result={this.state.calculator} />
        }
        return (
            <div>
                {display}
                <div className="row">
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(1)}>1</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(2)}>2</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(3)}>3</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large"onClick={() => this.sendOperator("*")}>x</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(4)}>4</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(5)}>5</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(6)}>6</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendOperator("/")}>/</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(7)}>7</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(8)}>8</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(9)}>9</button>
                    </div>
                    
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.result()}>=</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendOperator("+")}>+</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendValue(0)}>0</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.sendOperator("-")}>-</button>
                    </div>
                    <div className="col s3">
                        <button className="btn waves-effect waves-light btn-large" onClick={() => this.clear()}>C</button>
                    </div>
                </div>                    
            </div>

        )
    }
}
export default Buttons;
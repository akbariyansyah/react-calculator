import React from 'react';


class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0
        }
    }
    render() {
        let result  = this.props.result
        
        return (
            <form className="col s12">
                <div className="input-field col s12">
                    <input id="last_name" type="text" autocomplete="off" className="validate" value={result}/>
                </div>
            </form>
        )
    }
}
export default Display;
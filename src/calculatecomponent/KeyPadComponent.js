import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="3" onClick={e => this.props.onClick(e.target.name)}>ג</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>ב</button>
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>א</button>

                 <button name="6" onClick={e => this.props.onClick(e.target.name)}>ו</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>ה</button>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>ד</button>

                <button name="9" onClick={e => this.props.onClick(e.target.name)}>ט</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>ח</button>
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>ז</button>

                <button name="30" onClick={e => this.props.onClick(e.target.name)}>ל</button>
                <button name="20" onClick={e => this.props.onClick(e.target.name)}>כ</button>
                <button name="10" onClick={e => this.props.onClick(e.target.name)}>י</button>

                <button name="60" onClick={e => this.props.onClick(e.target.name)}>ס</button>
                <button name="50" onClick={e => this.props.onClick(e.target.name)}>נ</button>
                <button name="40" onClick={e => this.props.onClick(e.target.name)}>מ</button>

                <button name="90" onClick={e => this.props.onClick(e.target.name)}>צ</button>
                <button name="80" onClick={e => this.props.onClick(e.target.name)}>פ</button>
                <button name="70" onClick={e => this.props.onClick(e.target.name)}>ע</button>

                <button name="300" onClick={e => this.props.onClick(e.target.name)}>ש</button>
                <button name="200" onClick={e => this.props.onClick(e.target.name)}>ר</button>
                <button name="100" onClick={e => this.props.onClick(e.target.name)}>ק</button>

                <button name="400" onClick={e => this.props.onClick(e.target.name)}>ת</button>
                <button name="10" onClick={e => this.props.onClick(e.target.name)}>י</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        );
    }
}


export default KeyPadComponent;

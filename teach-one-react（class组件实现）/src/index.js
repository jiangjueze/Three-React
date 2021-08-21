import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";

class Menu extends React.Component {
    render(){
        return <h1>menu {this.props.title}</h1>;
    }
}

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: 'jirengu'
        }
    }
   
    handleClick(){
        this.setState({
            title:'ruoyu'
        })
    }

    render(){
        return (
            <div>
                <Menu title={this.state.title}></Menu>
                <h1>{this.state.title}</h1>
                <p>{this.props.id}</p>
                <span onClick={this.handleClick.bind(this)}>hello</span>
            </div>
        );
    }
}


ReactDOM.render((
    <App id="app">hello!!!!!!</App>
),document.body);


// let vdom = React.createElement(App,null)
// console.log('------')
// console.log(vdom)
// ReactDOM.render(vdom,document.body);
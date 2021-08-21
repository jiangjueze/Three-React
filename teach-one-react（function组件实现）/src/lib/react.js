import ReactDOM from "./react-dom";

function createElement(tag,attrs,...children) {
    return {
        tag,
        attrs,
        children
    }
}

class Component {
    constructor(props){
        this.props = props;
        this.state = {};
    }

    setState(newState){
        Object.assign(this.state,newState);
        console.log('hello')
        ReactDOM.renderComponent(this);
    }
}


const React = {
    createElement,
    Component
};

export default React;
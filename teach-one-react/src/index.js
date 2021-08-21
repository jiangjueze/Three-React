import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";



function clickMe() {
    console.log('click Me');
}

let styleObj = {
    color:'blue',
    fontSize:'20px'
}


//这里转换之后是用到React.creaElement的，所以得导入React
let div = (<h1 className="hello" id="header" onClick={clickMe} style={styleObj} dataId="hello">
    <span>hello</span>
    <span>world</span>
</h1>)

console.log(div);

ReactDOM.render(div,document.body);
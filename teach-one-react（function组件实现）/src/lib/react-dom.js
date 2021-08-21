import React from "./react";

function setAttribute(node,attrs) {
    if(!attrs) return;

    for (let key in attrs){
        if(key.startsWith('on')){
            node[key.toLocaleLowerCase()] = attrs[key];
        }else if(key === 'style'){
            Object.assign(node.style,attrs[key]);
        }else{
            node[key] = attrs[key];
        }
    }
}


function render(vdom,container){
    
    let node = createDomfromVdom(vdom);
    container.appendChild(node);
}

function createDomfromVdom(vdom) {
    let node;
    if(typeof vdom === 'string'){
        node = document.createTextNode(vdom);
        return node;
    }

    if(typeof vdom === 'object'){
        if(typeof vdom.tag === 'function'){
            // let component = new vdom.tag(vdom.attrs);
            let component = getComponent(vdom.tag,vdom.attrs);
            let vnode = component.render();
            node = createDomfromVdom(vnode);//总会出来，最终会是普通标签
            component.$root = node;
        }else{
            node = document.createElement(vdom.tag);
            setAttribute(node,vdom.attrs);
            vdom.children.forEach(childVdom => render(childVdom,node));
        }
        
    }
    return node;
}

function getComponent(constructor,attrs){
    if(constructor.prototype instanceof React.Component) {
        return new constructor(attrs);
    }else {
        let App = class App extends React.Component{} //后面这个App可以省略，匿名
        App.prototype.render = function(){
            return constructor(attrs)      // 传递过来得就是function Menu(props)，也就是class里的render（）
        }
        return new App(attrs)
    }
}


function renderComponent(component){
    let vdom = component.render();
    let node = createDomfromVdom(vdom);
    if(component.$root){
        component.$root.parentNode.replaceChild(node,component.$root);
    }
    console.log('render')
}


const ReactDOM = {
    render(vDom,container){
        container.innerHTML = '';
        render(vDom,container);
    },

    renderComponent
};

export default ReactDOM;
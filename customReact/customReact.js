function customRender(reactElement, mainContainer)
{
    const newEle = document.createElement(reactElement.type)
    newEle.innerHTML = reactElement.children;
    // newEle.setAttribute('href', reactElement.props.href)
    // newEle.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        newEle.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(newEle);
}


const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}

customRender(reactElement, mainContainer);
const heading = React.createElement(
    'h1', 
    {id : 'heading', xyz: 'abc'}, 
    'Hello world from React!'
);



{/* <div id='parent'>
    <div id='child'>
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement(
    'div',
    {id : 'parent'},
    React.createElement(
    'div',
    {id: 'child'},
    [React.createElement('h1', {}, "I'm a h1 tag"), React.createElement('h2', {}, "I'm a h2 tag")]
    )
)

// To avoid the above writeen nesting, we use jsx.

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)
root.render(parent) // render method is displaying an object in the form of an element

console.log(parent);

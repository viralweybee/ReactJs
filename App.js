const heading=React.createElement('h1',{id:"heading"},"Hello from React");
const root=ReactDOM.createRoot(document.getElementById('root'))




const parent = React.createElement('div', { id: "parent" },
    [React.createElement('div', { id: "Child" },
        [React.createElement('h1', {}, "I am h1 tag"),React.createElement('h1', {}, "I am h1 tag1")]
    ),
    React.createElement('div', { id: "Child2" },
        [React.createElement('h1', {}, "I am h1 tag"),React.createElement('h1', {}, "I am h1 tag1")]
    )
]
);

const para=React.createElement('p',{},"I am paragrapht");
const ob=ReactDOM.createRoot(document.getElementById('footer'));
ob.render(para);

root.render(parent)

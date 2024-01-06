    const heading =  
    [
        // React.createElement('h1',{id:"heading"},"hello world")

        React.createElement('div',{id:"div1"},
        [
            React.createElement('h1',{id:"heading"},"Hello world"),
            React.createElement('h2',{id:"heading2"},"Hello world h2")
        ]),
        React.createElement('div',{id:"div2"},
        [
            React.createElement('h1',{id:"heading"},"Hello world from div 2 h1"),
            React.createElement('h2',{id:"heading2"},"Hello world from div 2 h2")
        ])
    ]
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading)
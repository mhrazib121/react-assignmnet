import React from 'react';

const Home = (props) => {
    console.log(props);
    const {text} = props;
    return (
        <div>
            <h1>Text: {text}</h1>
        </div>
    );
};

export default Home;
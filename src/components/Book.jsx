import React from 'react';
const title = "React";


function List(props) {
    let arr = props.list;
    return arr.map((item, index) => {
        return (
            <div key={index}>
                <span><a href={item.url}>{item.title}</a> </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        )
    });
}

const Book = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    function handleChange(e){
        console.log(e.target.value);
    }
    return (

            <div >
                <h1>Hello {title}</h1>

                <label htmlFor='Search'>Search:</label>
                <input type='text' id="Search" onChange={handleChange}/>

                <List list={stories}/>

            </div>
    )

};

export default Book;
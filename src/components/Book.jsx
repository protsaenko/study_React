import React, {useState} from 'react';

const title = "React";

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

function Search(props) {
    function handleChange(e) {
        setSearchTerm(e.target.value);
        props.onSearch(e);
    }

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>  <label htmlFor='Search'>Search:</label>
            <input type='text' id="Search" onChange={handleChange}/>
            <p>Searching for <strong>{searchTerm}</strong></p></>

    );

}

const Book = () => {

    const handleSearch = event => {
        console.log(event.target.value);
    };


    return (

        <div>
            <h1>Hello {title}</h1>
            <Search onSearch={handleSearch}/>
            <List list={stories}/>
        </div>
    )

};

export default Book;
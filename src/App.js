import React, {useEffect, useState} from 'react';
import Recipe from './Recipes'
import './global.scss';
import Demo from './weather/demo'

const App = () => {
    const APP_ID = 'c81f4074';
    const APP_KEY = 'c6b0f6d45836c12a202822f61b711745';

    const [recipes, setResipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getResipes()
    }, [query]);

    const getResipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setResipes(data.hits)
    };

    const updateSearch = (e) => {
        setSearch(e.target.value)
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch('')
    };
    return (
        <div className='App '>
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <div className="navbar-brand">
                        <h4>Resipe app with search</h4>
                    </div>
                    <form onSubmit={getSearch} className="form-inline">
                        <input value={search} onChange={updateSearch} className="form-control mr-sm-2" type="search"
                               placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid mymy" src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=cooked-food-704569.jpg&fm=jpg" alt=""/>
                    </div>
                    <div className="col-md-4 ">
                        <Demo/>
                        {recipes.map(recipe => (
                            <Recipe key={recipe.recipe.calories}
                                    title={recipe.recipe.label}
                                    calories={recipe.recipe.calories}
                                    image={recipe.recipe.image}
                                    ingredients={recipe.recipe.ingredients}
                            />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid mymy2" src="https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?cs=srgb&dl=fruits-eating-food-on-wood-326268.jpg&fm=jpg" alt=""/>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default App;

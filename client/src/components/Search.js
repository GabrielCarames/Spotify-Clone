import { useState } from "react"
import { Link } from "react-router-dom"
import useSearchHelper from "../hooks/useSearchHelper"

const Search = () => {
    const [search, setSearch] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [categories, setCategories] = useState()
    const { searchInput } = useSearchHelper(search, setSearchResults, categories, setCategories)
    console.log("aspdkaspdasd", categories)

    return (
        <div className="search-container">
            <div className="searcher-container">
                <div className="searcher-input-container">
                    <i className="fas fa-search"></i>
                    <input className="searcher__input" type="text" placeholder="Artists, songs or podcasts" onChange={e => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="search-categories-container">
                <h5 className="search__title">Browse all</h5>
                <ul className="search-categories-list list">
                    {
                        categories && categories.items && categories.items.map((category, id) => {
                            return (
                                    <Link className="list__link" to={`/search/category/${category.id}`}>
                                        <li className="list__item" key={id} id={category.id} style={{backgroundColor: "#"+((20<<20)*Math.random()|0).toString(16)}}>
                                                <p className="list__category-title">{category.name}</p>
                                                <img className="list__category-image" src={category.icons[0].url} alt="category" />
                                        </li>
                                    </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search

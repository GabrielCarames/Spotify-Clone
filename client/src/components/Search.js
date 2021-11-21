import { useState } from "react"
import { Link } from "react-router-dom"
import useSearchHelper from "../hooks/useSearchHelper"

const Search = ({accessToken}) => {
    const [search, setSearch] = useState("careless whisper")
    const [searchResults, setSearchResults] = useState([])
    const [categories, setCategories] = useState("careless whisper")
    const { } = useSearchHelper(search, setSearchResults, categories, setCategories, accessToken)
    console.log("aspdkaspdasd", categories)
    

    return (
        <div className="search-container">
            <div className="searcher-container">
                <form>
                    <input type="text" placeholder="buscar cancion" onChange={e => setSearch(e.target.value)} />
                    <button >buscar</button>
                </form>
            </div>
            <div className="search-categories-container">
                <h5 className="search__title">Browse all</h5>
                <ul className="search-categories-list list">
                    {
                        categories.items && categories.items.map((category, id) => {
                            return (
                                <li className="list__item" key={id} id={category.id}>
                                    <Link to={`/search/category/${category.id}`}>
                                        <h3 className="list__category-title">{category.name}</h3>
                                        <img className="list__category-image" src={category.icons[0].url} alt="category" />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search

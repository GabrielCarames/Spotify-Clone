import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useState } from "react"
import useCategoryHelper from "../hooks/useCategoryHelper"

const Category = () => {
    const [playlists, setPlaylists] = useState()
    const { categoryName } = useParams()
    useCategoryHelper(setPlaylists)

    return (
        <div className="category-container">
            <div className="category-header header">
                <h2 className="header__title">{categoryName}</h2>
            </div>
            <div className="category-results-container">
                <div className="category-playlists">
                    <h4 className="category__title">Popular playlists</h4>
                    <ul className="category-playlists-list list">
                        {
                            playlists && playlists.items.map((playlist, id) => {
                                return (
                                        <Link className="list__link" to={`/playlist/${playlist.id}`}>
                                    <li className="list__item" key={id}>
                                            <div className="list-image-container">
                                                <img className="list__image" src={playlist.images[0].url} alt="playlist" />
                                                <button className="list__play-button" ><svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></button>
                                            </div>
                                            <div className="list__description-container">
                                                <p className="list__title">{playlist.name}</p>
                                                <p className="list__description">{playlist.description}</p>
                                            </div>
                                    </li>
                                        </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category
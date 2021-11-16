import useYourLibraryHelper from "../hooks/useYourLibraryHelper"

const YourLibrary = ({accessToken}) => {
    const { playlist } = useYourLibraryHelper(accessToken)
    return (
        <div className="library-container">
            <div className="library-playlists-container">
                <h3 className="library__title">Playlists</h3>
                <ul className="library-list list">
                    {
                        playlist && playlist.map((item, id) => {
                            return (
                                <li className="list__item" key={id} >
                                    <a className="list__link-container" href={item.href}>
                                        <div className="list__images-container">
                                            {
                                                item.images.length >= 1 
                                                ? 
                                                    <img className="list__image" src={item.images[0].url} alt="" />
                                                :
                                                <svg height="32" role="img" width="32" viewBox="-20 -25 100 100" class="list__image--unavailable" aria-hidden="true" data-testid="card-image-fallback"><path d="M16 7.494v28.362A8.986 8.986 0 0 0 9 32.5c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9V9.113l30-6.378v27.031a8.983 8.983 0 0 0-7-3.356c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9V.266L16 7.494zM9 48.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.859-3.141 7-7 7zm32-6.09c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.861-3.141 7-7 7z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                            }
                                        </div>
                                        <div className="list__data-container">
                                            <p className="list__playlist-name">{item.name}</p>
                                            <p className="list__playlist-user">{item.owner.display_name}</p>
                                        </div>
                                    </a>
                                </li>

                            )
                            
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default YourLibrary
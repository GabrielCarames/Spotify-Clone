import useResultsHelper from "../hooks/useResultsHelper"

const Results = ({accessToken}) => {
    const { results, millisToMinutesAndSeconds, topResult, artists } = useResultsHelper(accessToken)
    console.log("search", results)

    return (
        <div className="results-container">
            <section className="results-top-result top-result">
                <span className="top-result__title">Top result</span>
                <div className="top-result-song">
                    <img className="top-result-image" src={topResult && topResult.album.images[0].url} alt="" />
                    <div className="top-result-info">
                        <span className="top-result__title">{topResult && topResult.name}</span>
                        <p className="top-result__data"><span className="top-result__author">{topResult && topResult.artists[0].name}</span>SONG</p>
                        <button className="top-result__button"><svg height="24" role="img" width="24" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></button>
                    </div>
                </div>
            </section>
            <section className="results-songs-container songs-container">
                <span className="songs-container__title">Songs</span>
                <ul className="songs-container-list list">
                    {
                        results && results.items.map((song, id) => {
                            return (
                                <li className="list__item" key={id}>
                                    <div className="list__song-data">
                                        <div className="list-image-container">
                                            <img className="list__image" src={song.album.images[0].url} alt="" />
                                            <button className="list__button"><svg className="list__icon" height="32" role="img" width="32" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></button>
                                        </div>
                                        <div className="list__description-container">
                                            <p className="list__song-title">{song.name}</p>
                                            <div className="list__author-container">
                                                {
                                                    song.artists.map((artist, id) => {
                                                        return <a className="list__song-author">{artist.name}</a>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p className="list__duration">{millisToMinutesAndSeconds(song.duration_ms)}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section className="top-results-type-container">
                <span className="type-container__title">Artists</span>
                <ul className="type-container-list list">
                    {
                        artists && artists.map((artist, id) => {
                            return (
                                <li className="list__item" key={id}>
                                    {artist.images.length >= 1 ? <img className="list__image" src={artist.images[0].url} alt="" /> : <svg height="32" role="img" width="32" viewBox="-25 -22 100 100" className="list__image--no-image" aria-hidden="true" data-testid="card-image-fallback" testid="artist-icon"><path d="M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z" fill="currentColor" fill-rule="evenodd"></path></svg>}
                                    
                                    <button className="list__button"><svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></button>
                                    <p className="list__artist-name">{artist.name}</p>
                                    <p className="list__type">Artist</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Results
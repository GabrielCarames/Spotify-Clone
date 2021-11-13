
const Login = () => {
    const AUTH_URL =  "https://accounts.spotify.com/authorize?client_id=d2a7d543ee8141ee9e85e54c63fdd6e3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <div className="login-container">
            <a href={AUTH_URL}>Logueate</a>
        </div>
    )
}

export default Login

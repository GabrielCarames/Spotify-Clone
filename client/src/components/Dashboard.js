import useAuthenticationHelper from "../hooks/useAuthenticationHelper"


const Dashboard = ({code}) => {

    const accessToken = useAuthenticationHelper(code)

    return (
        <div>
            {code}
        </div>
    )
}

export default Dashboard

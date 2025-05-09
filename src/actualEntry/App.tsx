import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../components/Routes";
import { UserProvider } from "../providers/UserProvider";
import HandleNavsChange from "../components/Helpers/NavsChange/HandleNavsChange";


function App() {
    return (
    <>
        <Router>
            <UserProvider>
                <Routes />
                <HandleNavsChange />
            </UserProvider>
        </Router>
    </>
  )
}

export default App;
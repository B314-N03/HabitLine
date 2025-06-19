import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { UserProvider } from "../providers/UserProvider";
import HandleNavsChange from "../components/Helpers/NavsChange/HandleNavsChange";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@mui/material";
import theme from "../providers/ThemeProviderMUI";
import { ThemeProviderHL } from "../providers/ThemeProvider";


function App() {
    const queryClient = new QueryClient();
    return (
    <>
        <Router>
            <ThemeProviderHL>
                <ThemeProvider theme={theme}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Consolas" />
                    <QueryClientProvider client={queryClient}>
                        <UserProvider>
                            <Routes />
                            <HandleNavsChange />
                            <ReactQueryDevtools initialIsOpen={false} />
                        </UserProvider>
                    </QueryClientProvider>
                </ThemeProvider>
            </ThemeProviderHL>
        </Router>
    </>
  )
}

export default App;
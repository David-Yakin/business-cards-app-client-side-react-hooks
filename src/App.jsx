import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./user/UserProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { EnvironmentProvider } from "./environments/EnvironmentProvider";

const App = () => (
    <div className="App">
        <BrowserRouter>
            <EnvironmentProvider>
                <UserProvider>
                    <Layout>
                        <Router />
                    </Layout>
                </UserProvider>
            </EnvironmentProvider>
        </BrowserRouter>
    </div>
);

export default App;

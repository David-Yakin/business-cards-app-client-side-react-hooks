import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./users/UserProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </BrowserRouter>
  </div>
);

export default App;

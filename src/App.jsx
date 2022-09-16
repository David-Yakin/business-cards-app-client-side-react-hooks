import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./users/UserProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { EnvironmentProvider } from "./environments/EnvironmentProvider";

// פה אני משתמש בקומפוננט
// UserProvider
// שיש לה ערך דפולטיבי ל
//value
//אותו היא משתפת אם כל הקומפוננטות שהיא עוטפת אותן
//לכל אחת מהן יש גישה ל
// useEnv
// שמחזיר את הערך
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

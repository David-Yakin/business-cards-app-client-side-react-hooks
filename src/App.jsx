import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './user/UserProvider';
import Layout from './layout/Layout';
import BCRoutes from './routes/BCRoutes';

const App = () => (
    <div className="App">
        <BrowserRouter>
            <UserProvider>
                <Layout>
                    <BCRoutes />
                </Layout>
            </UserProvider>
        </BrowserRouter>
    </div>
);

export default App;

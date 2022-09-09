import {UserProvider} from "../../src/user/UserProvider";
import {MemoryRouter} from "react-router-dom";

const userDecorator = (Story) => (
    <MemoryRouter>
        <UserProvider stub>
            <Story />
        </UserProvider>
    </MemoryRouter>
)

export default userDecorator
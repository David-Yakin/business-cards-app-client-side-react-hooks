const ROUTES = {
    ROOT: { to: '/', label: 'Home' },
    ABOUT: { to: '/about', label: 'About' },
    MY_CARDS: {
        to: '/my-cards',
        label: 'My Cards',
    },
    MY_FAVORITE_CARDS: {
        to: '/my-favorite-cards',
        label: 'My Favorite Cards',
    },
    SIGN_IN: { to: 'signin', label: 'Signin' },
    SIGN_UP: { to: 'signup', label: 'Signup' },
    BIZ_SIGN_UP: { to: 'bin-signup', label: 'Signup as Business' },
    LOGOUT: { to: 'logout', label: 'Logout' },
};

export default ROUTES;

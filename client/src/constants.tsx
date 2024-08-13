import { home, radio, library, search, leaf } from 'ionicons/icons';
import Home from './pages/Home';
import Crops from './pages/Crops';
import Chat from './pages/Chat';
import Account from './pages/Account';

const Tabs = [
    {
        'id': 'home',
        'icon': home,
        'label': 'Home',
        'href': '/home',
        'page': <Home />,
    },
    {
        'id': 'crops',
        'icon': leaf,
        'label': 'My Crops',
        'href': '/crops',
        'page': <Crops />,
    },
    {
        'id': 'chat',
        'icon': library,
        'label': 'Chat',
        'href': '/chat',
        'page': <Chat />,
    },
    {
        'id': 'account',
        'icon': search,
        'label': 'Account',
        'href': '/account',
        'page': <Account />,
    },
];

export { Tabs };
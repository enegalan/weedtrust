import { homeOutline, personOutline, leafOutline, chatbubbleEllipsesOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Crops from './pages/Crops';
import Chat from './pages/Chat';
import Account from './pages/Account';

const Tabs = [
    {
        'id': 'home',
        'icon': homeOutline,
        'label': 'Home',
        'href': '/home',
        'page': <Home />,
    },
    {
        'id': 'crops',
        'icon': leafOutline,
        'label': 'My Crops',
        'href': '/crops',
        'page': <Crops />,
    },
    {
        'id': 'chat',
        'icon': chatbubbleEllipsesOutline,
        'label': 'Chat',
        'href': '/chat',
        'page': <Chat />,
    },
    {
        'id': 'account',
        'icon': personOutline,
        'label': 'Account',
        'href': '/account',
        'page': <Account />,
    },
];

export { Tabs };
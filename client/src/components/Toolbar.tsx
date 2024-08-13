import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';

import { Tabs } from '../constants';

function Toolbar() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    {Tabs.map((tab) => {
                        return (
                            <Route render={() => tab.page} key={tab.id} path={tab.href} exact />
                        );
                    })}
                </IonRouterOutlet>
                <IonTabBar slot='bottom'>
                    {Tabs.map((tab) => {
                        return (
                            <IonTabButton key={tab.id} tab={tab.id} href={tab.href}>
                                <IonIcon icon={tab.icon} />
                                <IonLabel>{tab.label}</IonLabel>
                            </IonTabButton>
                        );
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}
export default Toolbar;
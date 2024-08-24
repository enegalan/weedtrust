import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonMenuToggle, IonItem, IonLabel } from '@ionic/react';
import { Tabs } from '../constants';
function Menu() {
    return (
        <IonMenu type='overlay' contentId='main-content'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>WeedTrust</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle auto-hide='false'>
                        {Tabs.map(tab => {
                            return (
                                <IonItem key={tab.id} href={tab.href} button>
                                    <IonLabel>
                                        {tab.label}
                                    </IonLabel>
                                </IonItem>
                            );
                        })}
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default Menu;
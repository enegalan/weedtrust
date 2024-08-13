import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/react';
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
                        <IonItem href='/home' button>
                            <IonLabel>
                                Home
                            </IonLabel>
                        </IonItem>
                        <IonItem href='/crops' button>
                            <IonLabel>
                                My Crops
                            </IonLabel>
                        </IonItem>
                        <IonItem href='/chat' button>
                            <IonLabel>
                                Chat
                            </IonLabel>
                        </IonItem>
                        <IonItem href='/account' button>
                            <IonLabel>
                                Account
                            </IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default Menu;
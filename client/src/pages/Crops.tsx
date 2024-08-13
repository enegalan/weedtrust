import { IonContent, IonButtons, IonMenuButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Crops: React.FC = () => {
  return (
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Crops</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' fullscreen>
        Tap the button in the toolbar to open the menu.
      </IonContent>
    </IonPage>
  );
};

export default Crops;

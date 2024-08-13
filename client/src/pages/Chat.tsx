import { IonContent, IonHeader, IonButtons, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Chat: React.FC = () => {
  return (
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' fullscreen>
        Tap the button in the toolbar to open the menu.
      </IonContent>
    </IonPage>
  );
};

export default Chat;

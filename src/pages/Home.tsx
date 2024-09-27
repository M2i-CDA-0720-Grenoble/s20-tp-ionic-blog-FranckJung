import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC } from 'react';
import './Home.css';
import { ArticlesList } from '../components';

const Home: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blog</IonTitle>
          <IonList>
            <IonItem routerLink="/categories">
              <IonLabel >Categories</IonLabel>
            </IonItem>
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ArticlesList/>

      </IonContent>
    </IonPage>
  );
};

export default Home;

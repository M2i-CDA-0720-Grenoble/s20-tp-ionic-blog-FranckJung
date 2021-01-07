import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC } from 'react';
import './Home.css';
import { CategoriesList } from '../components';

const Categories: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
          <IonList>
            <IonItem routerLink="/home">
              <IonLabel >Articles</IonLabel>
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

        <CategoriesList/>

      </IonContent>
    </IonPage>
  );
};

export default Categories;

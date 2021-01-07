import { IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { FC }  from "react";
import { articles } from "../data";
import { ArticleModel } from "../models";

interface ArticleProps { };

const ArticleList: FC<ArticleProps> = () => {
    
    const articlesSort:ArticleModel[] = articles.sort((a, b) => (b.id - a.id));
  return(
    <IonList>
        {
            articlesSort.map(
               (article, index) =>
                 <IonCard key={index}>
                     <IonItem >
                         <IonLabel> {article.title} </IonLabel>
                         <IonButton fill="outline" slot="end">View</IonButton>
                     </IonItem>
                     <IonCardContent>
                         {`Du  ${article.createdAt.toLocaleString()} Categorie : `} 
                         {article.category.name}
                     </IonCardContent>
                 </IonCard>
             )
        } 
    </IonList>

    );
}

export default ArticleList;
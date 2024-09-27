import { IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonList, IonThumbnail } from "@ionic/react";
import React, { FC }  from "react";
import { articles } from "../data";
import { ArticleModel } from "../models";

interface ArticlesProps { };

const ArticlesList: FC<ArticlesProps> = () => {
    
    const articlesSort:ArticleModel[] = articles.sort((a, b) => (b.id - a.id));
  return(
    <IonList>
        {
            articlesSort.map(
               (article, index) =>
                 <IonCard key={index}>
                    <IonThumbnail>
                        <img src={article.cover} alt="article"/>
                    </IonThumbnail>
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

export default ArticlesList;
import React, { useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonImg, IonCardTitle } from '@ionic/react';
import { Product } from '../../Interfaces';

const ProductItemCard = ({ product }: { product: Product }) => {

  return (
    <div>
      {product && (
        <IonCard routerLink={"/product/" + product["id"]} className="product_card">
          <IonImg src={product.images[0]["url"]} class="image" />
          <IonCardHeader>
            <IonCardTitle className="product_title"><b>{product["title"]}</b></IonCardTitle>
            <IonCardSubtitle>{product["handle"]}</IonCardSubtitle>
            <IonCardSubtitle>${product["variants"][0]["prices"][1]["amount"] / 100}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      )}
    </div>

  );
};

export default ProductItemCard;

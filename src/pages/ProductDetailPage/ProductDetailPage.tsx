import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ProductDetailPage.css';
import React, { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonBackButton, IonButtons, IonCardSubtitle, IonToast, IonImg, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import axios from "axios";
import { RouteComponentProps } from 'react-router-dom';
import { Product } from '../../Interfaces';
import medusaServerBaseURL from "../../server-url";

const ProductDetailPage: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [product, setProduct] = useState<Product>();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let product_id = props.match.params.id;

    axios
      .get(`${medusaServerBaseURL}/store/products/${product_id}`)
      .then((response) => {
        if (response.data.product) {
          setProduct(response.data.product);
        }
      })
      .catch((err) => {
        console.log("error", err)
      });
  }, [props.match.params.id])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="">
            </IonBackButton>
          </IonButtons>
          <IonTitle>Medusa Ecommerce Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {product && (

          <IonCard mode="ios">
            {product["images"] && (
              <IonImg class="product_detail_img" src={product.images[0]["url"]} />
            )}
            <IonCardHeader>
              <div className="metaInfo">
                <IonCardTitle>{product["title"]}</IonCardTitle>
                <IonCardSubtitle>{product["handle"]}</IonCardSubtitle>
                <h3>${product["variants"][0]["prices"][1]["amount"] / 100}</h3>
              </div>

            </IonCardHeader>
            <IonCardContent>
              <h3>Description</h3>
              {product["description"]}
              <IonButton class="button" size="default" shape="round" expand="block" onClick={() => setShowToast(true)}>Add to Cart</IonButton>

            </IonCardContent>
          </IonCard>
        )}

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Product added to cart"
          duration={800}
        />

      </IonContent>
    </IonPage>
  );
};

export default ProductDetailPage;

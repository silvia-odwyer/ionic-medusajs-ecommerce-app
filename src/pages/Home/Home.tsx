import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, } from '@ionic/react';
import './Home.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductItemCard from '../../components/ProductItemCard/ProductItemCard';
import medusaServerBaseURL from "../../server-url";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${medusaServerBaseURL}/store/products`)
      .then((response) => {

        if (response.data) {
          let products = response.data.products;

          setProducts(products);
        }
      })
      .catch((err) => {
        console.log("error", err)
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medusa Ecommerce Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid class="ion-no-padding ion-no-margin">
          <IonRow>

            {products.map((product, i) =>
              <IonCol size="6">
                <ProductItemCard product={product} />
              </IonCol>)}

          </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Home;

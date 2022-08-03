import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, } from '@ionic/react';
import './Home.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductItemCard from '../../components/ProductItemCard/ProductItemCard';

const Home: React.FC = () => {
  const medusaServerURL = "http://localhost:9000/store/products";
  // const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get(medusaServerURL)
      .then((response) => {

        if (response.data) {
          let products = response.data.products;
          console.log("products ", products)

          setProducts(products);
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
      .finally(() => {
        // setLoading(false);
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

        <IonGrid class="ion-no-padding">
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

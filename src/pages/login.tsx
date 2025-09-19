import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
} from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login con Auth0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {!isAuthenticated ? (
          <IonButton expand="block" onClick={() => loginWithRedirect()}>
            Iniciar Sesión
          </IonButton>
        ) : (
          <>
            <IonText>
              <h2>Bienvenido, {user?.name}</h2>
              <p>{user?.email}</p>
            </IonText>

            <IonButton
              expand="block"
              color="danger"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Cerrar Sesión
            </IonButton>
          </>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Login;

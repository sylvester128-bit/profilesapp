import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{
          maxWidth: '600px',
          margin: '80px auto',
          padding: '30px',
          textAlign: 'center',
          fontFamily: 'Arial'
        }}>
          <h1>Welcome to My AWS Web App!</h1>
          <h2>Hello, {user?.signInDetails?.loginId || user?.username}!</h2>
          <p>You have successfully signed in.</p>
          <p>This application uses AWS Amplify, Lambda, and DynamoDB.</p>
          <button onClick={signOut}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;

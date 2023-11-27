import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';
import '@brainhubeu/react-carousel/lib/style.css';
import { CartProvider} from "react-use-cart";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

const Routes = ()=>{
  const element = useRoutes(routes)
  return(
    <>
      <NavBar />
      {element}
    </>
  )
}

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
     <ApolloProvider client={client}>
      <Routes />
     </ApolloProvider>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

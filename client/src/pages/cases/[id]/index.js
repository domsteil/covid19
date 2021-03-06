import { useRouter } from 'next/router'
import CaseRecordQL from '../../../../components/cases/CaseRecordQL';
import HorizontalNavigation from '../../../../components/HorizontalNavigation';
import Container from '../../../../components/container'
import { AppWithAuthorization } from '../../../../components/App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import * as ws from 'ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

export const GRAPHQL_ENDPOINT = `https://<POSTGRES>/v1/graphql`;
export const WEBSOCKET_ENDPOINT = `wss://<POSTGRES>/v1/graphql`;

const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
  uri: WEBSOCKET_ENDPOINT,
  options: {
    reconnect: true
  }
}) : null;

const httplink = new HttpLink({
	uri: GRAPHQL_ENDPOINT,
	credentials: 'same-origin'
});

const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httplink,
) : httplink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false
  })
})

const Case = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
    <HorizontalNavigation />
    <Container center>
      <AppWithAuthorization>
      <ApolloProvider client={client}>
      <CaseRecordQL id={id} />
      </ApolloProvider>
      </AppWithAuthorization>
      <style jsx>{`


.Page {
  
  background-color: #F4F6F8;

}

.main {
  background-color: #F4F6F8;
}

.body {
  background-color: #F4F6F8;
}

// CSS only media query for tablet
@media screen and (max-width: 960px) {
  .row {
    flex-direction: column;
    margin: -1.5rem 0;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 28px;
  }

  .Page {
  
    background-color: #F4F6F8;
  
  }
  
  .main {
    background-color: #F4F6F8;
  }
  
  .body {
    background-color: #F4F6F8;
  }

  
  .column {
    width: 100%;
    text-align: center;
    max-width: 330px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 28px;
  }

  .center {
    text-align: center;
  }

  .column2 {
    list-style: none;
    display: none;
  }
}



`}</style>
</Container>
    </>
  )
}

export default Case
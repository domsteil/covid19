import Page from '../../components/page';
import Head from 'next/head'
import Navbar from '../../components/navbar'
import HorizontalNavigation from '../../components/HorizontalNavigation';
import AccountCard from '../../components/accounts/AccountCard';
import CaseDashboardSection from '../../components/CaseDashboardSection';
import MessageSection from '../../components/MessageSection';
import { AppWithAuthorization } from '../../components/App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
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

export default () => (
    <Page title="">
	<Head>
      <title>Covid Cases</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="main">
      <HorizontalNavigation />
      <AppWithAuthorization>
      <ApolloProvider client={client}>
      <CaseDashboardSection />
      </ApolloProvider>
      </AppWithAuthorization>
      </section>
      <style jsx>{`


.main {
  background-color: #F4F6F8;
}
  b {
    font-weight: normal;
  }

  h1 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 2em;
      font-weight: 200;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }


/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: orange; }
}

      h2 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 24px;
      font-weight: normal;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    p {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 18px;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    img {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      height: 80px;
      width: 80px;
      font-size: 12px;
      text-align: center;
    }

    ul {

        display: inline-block;
        color: #999;
        position: absolute;
        margin-left: -15px;
    }

    .connected {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #50e3c2;
  margin-left: 10px;
}

.after {
  box-sizing: inherit;
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
  
    background-color: #15202b;
  
  }
  
  .main {
    background-color: #15202b;
  }
  
  .body {
    background-color: #15202b;
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
  </Page>



  )

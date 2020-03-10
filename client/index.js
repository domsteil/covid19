import Page from '../components/page';
import Head from 'next/head'
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import ApolloClient from 'apollo-client';
import CaseForm from '../components/case/CaseForm'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { motion } from 'framer-motion';
import * as Sentry from '@sentry/browser';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};


Sentry.init({dsn: "https://7416b02cda434763993225fee3e34c36@sentry.io/1860365"});

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://<POSTGRES>/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
 };

 const client = createApolloClient();

export default () => (
	<Page title="Corona Virus Case Submission Network">
	<Head>
      <title>Corona Virus Case Submission Network</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppWithAuthentication>
      <ApolloProvider client={client}>
      <Navbar />
      <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={textVariants}>
      <h1>Corona Virus Case Submission Network</h1>
      <h3>The purpose of this network is for new case submission. The current process is dependent on CSV files and google sheets that are being used. 
            This network serves as an alternative to Submit a New Case of the Corona Virus disease.
            Data being submitted can be scheduled to be exported into CSV format for statistical analytics and deep learning. </h3>
      <h3>New Nodes can join the network and start submitting cases by messaging the request to Stateset.</h3>
      <h5>This web application and the covid case network is open-source and distributed under the Apache 2.0 license.</h5>
      <br/>
      <br/>
      <br/>
      <h1>To Submit a New Case use this form:</h1>
      <CaseForm />
      </motion.div>
      </motion.div>
      <br/>
      <br/>
      <br/>
      <Footer />
      </ApolloProvider>
      </AppWithAuthentication>


<style jsx>{`


  main {
    background-color: #F4F6F8;
    text-align: center;
  }

	div {
		background-color: #F4F6F8;
    text-align: center;
		}

    body {
    background-color: #F4F6F8;
    text-align: center;
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

      hr {
        clear: both;
        visibility: hidden;
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

      hr {
        clear: both;
        visibility: hidden;
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
  
    background-color: #F4F6F8;
  
  }
  
  main {
    background-color: #F4F6F8;
    text-align: center;
  }

	div {
		background-color: #F4F6F8;
    text-align: center;
		}

    body {
    background-color: #F4F6F8;
    text-align: center;
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

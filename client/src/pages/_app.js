import React from "react";
import NextApp from "next/app";
import UserContext from '../components/UserContext';
import OrganizationContext from '../components/OrganizationContext';


class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <OrganizationContext.Provider value={{ nodeName: "stateset" }}>
        <UserContext.Provider value={{ user: "domsteil"}}>
          <Component />
        </UserContext.Provider>
      </OrganizationContext.Provider>
    );
  }
}

export default App;
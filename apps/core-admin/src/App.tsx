import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SampleEntityList } from "./sampleEntity/SampleEntityList";
import { SampleEntityCreate } from "./sampleEntity/SampleEntityCreate";
import { SampleEntityEdit } from "./sampleEntity/SampleEntityEdit";
import { SampleEntityShow } from "./sampleEntity/SampleEntityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"core"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SampleEntity"
          list={SampleEntityList}
          edit={SampleEntityEdit}
          create={SampleEntityCreate}
          show={SampleEntityShow}
        />
      </Admin>
    </div>
  );
};

export default App;

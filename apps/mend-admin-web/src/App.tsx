import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { ClinicList } from "./clinic/ClinicList";
import { ClinicCreate } from "./clinic/ClinicCreate";
import { ClinicEdit } from "./clinic/ClinicEdit";
import { ClinicShow } from "./clinic/ClinicShow";
import { UserClinicList } from "./userClinic/UserClinicList";
import { UserClinicCreate } from "./userClinic/UserClinicCreate";
import { UserClinicEdit } from "./userClinic/UserClinicEdit";
import { UserClinicShow } from "./userClinic/UserClinicShow";
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
        title={"Mend Admin"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="Clinic"
          list={ClinicList}
          edit={ClinicEdit}
          create={ClinicCreate}
          show={ClinicShow}
        />
        <Resource
          name="UserClinic"
          list={UserClinicList}
          edit={UserClinicEdit}
          create={UserClinicCreate}
          show={UserClinicShow}
        />
      </Admin>
    </div>
  );
};

export default App;

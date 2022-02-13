import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="users">
      <Resource name="users" List={ListGuesser} />
      <Resource name="users" List={ListGuesser} />
      <Resource name="users" List={ListGuesser} />
    </Resource>
  </Admin>
);

export default AdminApp;

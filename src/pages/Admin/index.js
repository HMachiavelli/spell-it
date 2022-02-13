import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./Posts";
import { UserList } from "./Users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
    <Resource name="users" list={UserList} />
  </Admin>
);

export default AdminApp;

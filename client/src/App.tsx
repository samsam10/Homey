import { AuthProvider, Refine } from "@pankod/refine-core";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";

import {
  AccountCircleOutlined,
 ChatBubbleOutline,
 PeopleAltOutlined,
//  StarOutlineOutlined,
 StarOutlineRounded,
 VillaOutlined


} from "@mui/icons-material"

import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";
import { 
  Login,
  Home,
  Agents,
  MyProfile,
  PropertyDetails,
  AllProperties,
  CreateProperty,
  AgentProfile,
  EditProperty,

} from "pages";
import { profile } from "console";
import messages from "pages/messages";
import Messages from "pages/messages";




const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

        //  let's save to mongoDB
        if(profileObj){
          const response = await fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: profileObj.name,
              email:profileObj.email,
              avatar:profileObj.picture
            })
          })

          // after getting the response from the database, den we do d below

          const data = await response.json()

          if(response.status === 200 ){

            localStorage.setItem(
              "user",
              JSON.stringify({
                ...profileObj,
                avatar: profileObj.picture,
                userid: data._id
              })
            );
          } else{
            return Promise.reject()
          }
        }

        // so what we have done above is that we are not only storing the user in local storage but we are also creating it in database
       


       

      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider('http://localhost:8080/api/v1')}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            // {
              // name: "post",
              // list: MuiInferencer,
              // icon: <VillaOutlined/>
             
            // },
            {
              name: "Properties",
              list: AllProperties,
              show: PropertyDetails,
              create: CreateProperty,
              edit: EditProperty,
              icon: <VillaOutlined/>
             
            },
            {
              name: "agents",
              list: Agents,
              show: AgentProfile,
              icon: <PeopleAltOutlined/>

             
            },
            {
              name: "reviews",
              list: Home,
              icon: <StarOutlineRounded/>

             
            },
            {
              name: "messages",
              list: Messages,
              icon: <ChatBubbleOutline/>

             
            },
            {
              name: "my-profile",
              options: {label: "My Profile"}, 
              list: MyProfile,
              icon: <AccountCircleOutlined/>

             
            },
            // {
            //   name: "property",
            //   list: MuiInferencer,
            //   edit: MuiInferencer,
            //   show: MuiInferencer,
            //   create: MuiInferencer,
            //   canDelete: true,
            // },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage = {Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;

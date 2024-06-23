import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import FormProfile from "./components/FormProfile";
import MyProfile from "./components/MyProfile";
import { APIProvider } from "@vis.gl/react-google-maps";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import ErrorPage from "./Error";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import RequireAuth from "./Auth/RequireAuth";
import Layout from "./Layout";
import { UsersDataProvider, useUsersData } from "./context/UsersProvider";
import AddCafe from "./components/AddCafe";
import { defaultValues } from "./Props/props";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function App() {
  const [signedUp, setSignedUp] = useState<boolean>(false);
  // const [s, setS] = useState();
  const signup = { signedUp: signedUp, setSignedUp: setSignedUp }
  const { currentUser, loading, logInUserProfile, users } = useAuth();
  // let logInUserProfile

  // if(loading) {logInUserProfile = useUsersData();}
  // // useEffect(()=>{
  // //   setS(logInUserProfile)

  // // }, [])
  // const { logInUserProfile } = useUsersData()

  return (
    // <AuthProvider>
    // <UsersDataProvider>
    <APIProvider apiKey={API_KEY} libraries={["places"]}>
      <Routes>
        <Route path={`/signup`} element={<SignUp signupProps={signup} />} />
        <Route path={`/signin`} element={<SignIn signupProps={signup} />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          {/* <Route path="myprofile" element={<FormProfile defaultValues={defaultValues}/>} /> */}
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="addprofile" element={<FormProfile />} />
          <Route path="editprofile" element={<FormProfile />} />
          {/* <Route path="addprofile" element={<FormProfile defaultValues={defaultValues} />} />
          <Route path="editprofile" element={<FormProfile defaultValues={logInUserProfile} />} /> */}
          <Route path="addcafe" element={<AddCafe />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </APIProvider>
    // {/* </UsersDataProvider> */}
    // {/* </AuthProvider> */}
  );
  // return (
  //   <AuthProvider>
  //     <UsersDataProvider>
  //       <APIProvider apiKey={API_KEY} libraries={["places"]}>
  //         <Routes>
  //           <Route path={`/signup`} element={<SignUp signupProps={signup} />} />
  //           <Route path={`/signin`} element={<SignIn signupProps={signup} />} />
  //           <Route path="/" element={<Layout />}>
  //             <Route
  //               index
  //               element={
  //                 <RequireAuth>
  //                   <Home />
  //                 </RequireAuth>
  //               }
  //             />
  //             {/* <Route path="myprofile" element={<FormProfile defaultValues={defaultValues}/>} /> */}
  //             <Route path="myprofile" element={<MyProfile />} />
  //             <Route path="addprofile" element={<FormProfile defaultValues={defaultValues} />} />
  //             {/* <Route path="editprofile" element={<FormProfile defaultValues={logInUserProfile} />} /> */}
  //             <Route path="addcafe" element={<AddCafe />} />
  //           </Route>
  //           <Route path="*" element={<ErrorPage />} />
  //         </Routes>
  //       </APIProvider>
  //     </UsersDataProvider>
  //   </AuthProvider>
  // );
}

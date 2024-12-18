import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
UserCreate, UserEdit, UserView, 
ServiceInfoForm, 
Users, 
ServiceTiles, 
UserInfoForm, 
ServiceCreate, ServiceEdit, ServiceView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/OMWIWellBeing/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Users/view/:id" element={<UserView {...props} title={'View User'} />} />
                        <Route path="Users/edit/:id" element={<UserEdit {...props} title={'Edit User'} />} />
                        <Route path="Users/create" element={<UserCreate {...props} title={'Create User'} />} />
                                                <Route path="/" element={<Users {...props} title={'Userdetails'} nolistbar={true} />} />
                                                                                                                    <Route path="Services/view/:id" element={<ServiceView {...props} title={'View Service'} />} />
                        <Route path="Services/edit/:id" element={<ServiceEdit {...props} title={'Edit Service'} />} />
                        <Route path="Services/create" element={<ServiceCreate {...props} title={'Create Service'} />} />

                <Route path="/userdetails1" element={<Users {...props} title={'Userdetails'} />} />
                <Route path="/servicesmenu1" element={<ServiceTiles {...props} title={'ServicesDisplay'} />} />
                <Route path="/userinfo1" element={<UserInfoForm {...props} title={'User Information form'} />} />
                <Route path="/servicesinfoform1" element={<ServiceInfoForm {...props} title={'Services Info form'} />} />
        </Routes>
    )

};

export default Component;

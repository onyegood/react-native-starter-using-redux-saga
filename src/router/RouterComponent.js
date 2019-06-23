import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DashboardScene from '../pages/user/DashboardScene';
import SigninScene from '../pages/auth/SigninScene';
import SignupScene from '../pages/auth/SignupScene';
import ResetPasswordScene from '../pages/auth/ResetPassword';
import HomeScene from '../pages/home/HomeScene';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene 
                    key="home" 
                    component={HomeScene}
                    title="Welcome"  
                />
                <Scene 
                    key="signin" 
                    component={SigninScene}
                    title="Please Login"  
                />
                <Scene 
                    key="signup" 
                    component={SignupScene}
                    title="Please Signup"  
                />
                <Scene 
                    key="resetPassword" 
                    component={ResetPasswordScene}
                    title="Reset Password"  
                />
            </Scene>
            <Scene key="main">
                <Scene 
                    // rightTitle="Add"
                    // onRight={() => Actions.createEmployee()}
                    key="dashboard" 
                    component={DashboardScene} 
                    title="User Dashboard" 
                    initial
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;


import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DashboardScene from '../pages/user/DashboardScene';
import SigninScene from '../pages/auth/SigninScene';
import SignupScene from '../pages/auth/SignupScene';
import ResetPasswordScene from '../pages/auth/ResetPasswordScene';
import HomeScene from '../pages/home/HomeScene';
import ForgotPasswordScene from '../pages/auth/ForgotPasswordScene';
import ValidateOTPScene from '../pages/auth/ValidateOTPScene';

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
                    initial
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
                <Scene
                    key="forgotPassword"
                    component={ForgotPasswordScene}
                    title="Forgot Password"
                />
                <Scene
                    key="validateOTP"
                    component={ValidateOTPScene}
                    title="OTP Validation"
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


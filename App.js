import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native';
import { AuthProvider, useAuth } from "./AuthContext";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import LakeList from "./components/LakeList/LakeList";
// import LakeEditor from "./components/LakeEditor/LakeEditor";
import AppHeader from "./components/Header/Header";
import { LakesProvider } from "./LakesContext";
import config from './config';
import styles from './App.styles';

const Stack = createStackNavigator();

function App() {
  console.log('API key:', config.extra.FIREBASE_API_KEY);
  return (
    <AuthProvider>
      <LakesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <AppHeader {...props} />,
            }}
          >
            <Stack.Screen name="PrivateWrapper" component={PrivateWrapper} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LakeList" component={LakeList} />
            {/* <Stack.Screen name="LakeEditor" component={LakeEditor} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </LakesProvider>
    </AuthProvider>
  );
}

const PrivateWrapper = () => {
  const { currentUser } = useAuth();
  return currentUser ? <ProtectedApp /> : <SignIn />;
};

const ProtectedApp = ({ navigation }) => {
  return (
    <View style={styles.App}> {/* Add styles here */}
      <View style={styles.header}>
        <AppHeader />
      </View>
      <View style={styles.content}>
        <LakeList navigation={navigation} />
      </View>
    </View>
  );
};

export default App;

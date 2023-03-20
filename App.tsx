import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import Layout from './src/components/Layout/Layout';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Layout />
      </NativeRouter>
    </>
  );
}
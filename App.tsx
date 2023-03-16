import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import SignUpPage from './src/pages/SignUpPage';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <SignUpPage />
      </NativeRouter>
    </>
  );
}
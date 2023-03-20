import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import Layout from './src/components/Layout/Layout';
import ChatsPage from './src/pages/ChatsPage';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ChatsPage />} />
          </Route>
        </Routes>
      </NativeRouter>
    </>
  );
}
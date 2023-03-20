import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import Layout from './src/components/Layout/Layout';
import ChatsPage from './src/pages/ChatsPage';
import ProtectedRoute from './src/components/ProtectedRoute/ProtectedRoute';
import { useState } from 'react';
import Landing from './src/components/Landing/Landing';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  const [user, setUser] = useState<boolean>(false);

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NativeRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route index element={<Landing />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path='/chats' element={<ChatsPage />} />
            </Route>
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </NativeRouter>
      </Provider>
    </>
  );
}
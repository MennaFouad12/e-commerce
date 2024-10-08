import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import AuthContextProvider from './Context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false}}})
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider  client={queryClient}>
  <AuthContextProvider>
    <ToastContainer autoClose={300}></ToastContainer>
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <App />
  </AuthContextProvider>
  </QueryClientProvider>
)


//2 hooks ==> use , fun com , top level
//get ==> useQuery
//post/put/delete ==> useMutation 
//custom hook
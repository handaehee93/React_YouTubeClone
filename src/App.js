import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader/SearchHeader';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { YouTubeApiProvider } from './context/YouTubeApiContext';

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <SearchHeader />
      <YouTubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YouTubeApiProvider>
    </>
  );
}


export default App;

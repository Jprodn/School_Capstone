import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import './styles/styles.css'
import useFetch from './useFetch'


const store = ConfigureStore();


function App() {
  const { data: landmarks, isPending, error } = useFetch('http://localhost:8001/landmarks')

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main data={landmarks}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
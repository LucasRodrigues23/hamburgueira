import { UserProvider } from './Contexts/UserContext'
import { SampleRoutes } from './Routes/index '
import { Global } from'./Styles/GlobalStyles'

export const App = () => {
  return (
    <div className="App">
      <Global />
      <UserProvider>
        <SampleRoutes />
      </UserProvider>
    </div>
  )
}



import { Beranda } from "./Pages"
import "./App.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Beranda} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

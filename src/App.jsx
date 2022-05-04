import { Switch, Route } from "react-router-dom";
import Detail from "./views/Characters/Detail";
import CharacterList from "./views/Characters/List";

export default function App() {
  return (
  <>
    <Switch>
      <Route path='/character/:id'>
        <Detail />
      </Route>
      <Route path='/'>
        <CharacterList />
      </Route>
    </Switch>
  </>
  );
}

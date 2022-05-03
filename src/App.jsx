import { Switch } from "react-router-dom";
import CharacterList from "./views/Characters/List";

export default function App() {
  return (
  <>
    <Switch>
      <Route path='/characters'>
        <CharacterList />
      </Route>
    </Switch>
  </>
  );
}

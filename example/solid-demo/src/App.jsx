import { Provider } from './store';
import TForm from './components/TFrom'
import TodoList from './components/TList'
const App = () => {
  return (
    <div class="todoapp">
      <Provider>
          <TForm />
          <TodoList />
      </Provider>
    </div>
  );
}

export default App;

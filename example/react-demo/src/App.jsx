import {Provider} from './store'
import TodoForm from './components/TFrom'
import TodoList from './components/TList'

function App() {
  return (
    <div className="todoapp">
      <Provider>
          <TodoForm />
          <TodoList />
      </Provider>
    </div>
  )
}

export default App

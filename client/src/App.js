import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetAllTodos {
    getTodos {
      title
      completed
      user {
        name
        email
        phone
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>loading...</h1>;
  return (
    <div className="App">
      <tbody>
        {data.getTodos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.user.name}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;

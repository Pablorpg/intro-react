
import Login from "../components/Login";
import Input from "../components/Input";
import Botao from "../components/Botao";
import Container from "../components/Container";

const App = () => {
  return (
    <Container>
      <Login>
        <Input />
        <Input />
        <Botao />
      </Login>
    </Container>
  )
}

export default App;

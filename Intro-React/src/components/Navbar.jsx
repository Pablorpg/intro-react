import "./style/style.css"

const Botao = () => {
  return (
  <button className="">Enviar</button>
);
};

const Navbar = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <Botao />
    </nav>
  );
};

export default Navbar;

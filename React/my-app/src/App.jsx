import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";

const App = () => {
  return (
    <>
      <main>
        <Header menuList={["Home", "About", "Skill", "Project", "Contact"]}/>
        <Home
          desc={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dolore numquam magni, ut dolores consequatur deleniti est tenetur atque reprehenderit id ipsam excepturi natus molestiae veniam nobis maiores quia fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dolore numquam magni, ut dolores consequatur deleniti est tenetur atque reprehenderit id ipsam excepturi natus molestiae veniam nobis maiores quia fugit."
          }
          
        />
        <Footer year={2013} />
      </main>
    </>
  );
};

export default App;

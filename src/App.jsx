import Header from "./components/Header";
import Footer from "./components/Footer";
import StoryGrid from "./components/StoryGrid";
import SubmitForm from "./components/SubmitForm";

const App = () => (
  <div className="font-lora main-page text-[#424242]">
    <Header />
    <main>
      <StoryGrid />
      <SubmitForm />
    </main>
    <Footer />
  </div>
);

export default App;

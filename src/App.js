import "./App.css";
import HalfLeft from "./component/halfLeft/HalfLeft";
import HalfRight from "./component/halfRight/HalfRight";
import AsideForm from "./component/aside-form/AsideForm";

function App() {
  return (
    <div>
      <aside>
        <AsideForm />
      </aside>
      <main className="container grid grid-cols-1 print:grid-cols-3 lg:grid-cols-4">
        <div>
          <HalfLeft />
        </div>
        <div className="print:col-span-2 lg:col-span-2">
          <HalfRight />
        </div>
      </main>
    </div>
  );
}

export default App;

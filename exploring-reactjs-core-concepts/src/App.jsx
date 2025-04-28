import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase.js";
import './App.css';

const db = getDatabase(app);

function App() {
    const putData = () => {
        set(ref(db, 'user/manu'), {
            id: 1,
            name: "Manu",
            age: 22
        });
    };

    return (
        <div className="App">
            <h1>Firebase React App</h1>
            <button onClick={putData}>Put data</button>
        </div>
    );
}

export default App;

import { useState } from "react";
import { ContractsList } from "./components/ContractsList";
import { CreateContractButton } from "./components/CreateContractButton";
import { SuccessAlert } from "./components/SuccessAlert";
import "./App.css";

function App() {
  const [contracts, setContracts] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <CreateContractButton
          contracts={contracts}
          setContracts={setContracts}
          showSuccessAlert={showSuccessAlert}
          setShowSuccessAlert={setShowSuccessAlert}
        />
      </div>

      <SuccessAlert showSuccessAlert={showSuccessAlert} />

      <ContractsList contracts={contracts} setContracts={setContracts} />
    </div>
  );
}

export default App;

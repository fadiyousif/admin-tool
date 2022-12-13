import { useState } from "react";
import { WarningAlert } from "./WarningAlert";
import { TerminateContractButton } from "./TerminateContractButton";
import { ContractDates } from "./ContractDates";

export const ContractItem = ({ contract, setContracts }) => {
  const [contractTerminated, setContractTerminated] = useState(
    contract.terminationDate ? true : false
  );
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  const { contractId, premium, startDate, terminationDate } = contract;

  return (
    <li className="contract-item">
      <div>
        <div className="contract-icon-title-container">
          <i className="fa-solid fa-file-contract"></i>
          <span className="contract-title">
            Contract <span className="contract-id">{contractId}</span>
          </span>
        </div>
        <span>Premium {premium}</span>
      </div>

      <ContractDates startDate={startDate} terminationDate={terminationDate} />

      <div style={{ textAlign: "right" }}>
        {!contractTerminated && (
          <TerminateContractButton
            setContractTerminated={setContractTerminated}
            setShowWarningAlert={setShowWarningAlert}
            setContracts={setContracts}
            contractId={contractId}
          />
        )}

        <WarningAlert showWarningAlert={showWarningAlert} />
      </div>
    </li>
  );
};

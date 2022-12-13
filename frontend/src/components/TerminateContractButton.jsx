import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export const TerminateContractButton = ({
  setContractTerminated,
  setShowWarningAlert,
  setContracts,
  contractId,
}) => {
  const terminateContract = () => {
    const contractTerminatedEvent = {
      contractId,
      terminationDate: new Date().toISOString().split("T")[0],
    };

    fetch("/api/terminate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "ContractTerminatedEvent",
        ...contractTerminatedEvent,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setContracts((contracts) => {
          return contracts.map((contract) => {
            if (contract.contractId === contractId) {
              contract.terminationDate =
                contractTerminatedEvent.terminationDate;
            }
            return contract;
          });
        });
      })
      .catch((err) => console.error(err));

    setContractTerminated(true);
    setShowWarningAlert(true);
    setTimeout(() => setShowWarningAlert(false), 2000);
  };

  return (
    <Button
      variant="contained"
      color="warning"
      onClick={terminateContract}
      sx={{
        padding: "6px 10px",
        textTransform: "capitalize",
      }}
    >
      <span style={{ marginRight: 0 }}>Terminate</span>
      <CloseIcon sx={{ fontSize: "18px" }} />
    </Button>
  );
};

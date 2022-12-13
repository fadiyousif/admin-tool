import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export const CreateContractButton = ({
  contracts,
  setContracts,
  showSuccessAlert,
  setShowSuccessAlert,
}) => {
  const createContract = () => {
    if (showSuccessAlert) return;

    const contractCreatedEvent = {
      contractId: Number(contracts[0].contractId) + 1 + "",
      premium: 100,
      startDate: new Date().toISOString().split("T")[0],
    };

    fetch("/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "ContractCreatedEvent",
        ...contractCreatedEvent,
      }),
    })
      .then((res) => res.json())
      .then(() =>
        setContracts((contracts) => [contractCreatedEvent, ...contracts])
      )
      .catch((err) => console.error(err));

    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 2000);
  };

  return (
    <Button
      variant="contained"
      onClick={createContract}
      sx={{
        padding: "5px 10px",
        textTransform: "capitalize",
        marginBottom: "20px",
        cursor: showSuccessAlert ? "default" : "pointer",
      }}
    >
      <span>Create Contract</span>
      <AddIcon sx={{ fontSize: "20px", marginLeft: "2px" }} />
    </Button>
  );
};

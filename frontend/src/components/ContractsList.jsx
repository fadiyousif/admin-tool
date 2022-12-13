import { useEffect, useState } from "react";
import { ContractItem } from "./ContractItem";
import { Pagination } from "./Pagination";

export const ContractsList = ({ contracts, setContracts }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const contractsPerPage = 10;
  const pagesVisited = pageNumber * contractsPerPage;

  useEffect(() => {
    fetchList();
  }, []);

  const renderContracts = contracts
    .slice(pagesVisited, pagesVisited + contractsPerPage)
    .map((contract) => (
      <ContractItem
        contract={contract}
        key={contract.contractId}
        setContracts={setContracts}
      />
    ));

  const fetchList = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setContracts(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ul className="contracts-list">{renderContracts}</ul>

      <Pagination
        contracts={contracts}
        contractsPerPage={contractsPerPage}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

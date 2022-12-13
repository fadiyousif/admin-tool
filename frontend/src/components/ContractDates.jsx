export const ContractDates = ({ startDate, terminationDate }) => (
  <div className="contract-dates">
    <span>From {startDate}</span>
    {terminationDate && <span>To {terminationDate}</span>}
  </div>
);

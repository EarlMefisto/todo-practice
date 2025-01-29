import { useState } from "react";

type FilterBanknotsType = "RUB" | "Dollars" | "All";

export const AtmMachine = () => {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<FilterBanknotsType>("All");

  let currentMoney = money;

  if (filter === "RUB") {
    currentMoney = money.filter((m) => m.banknots === "RUBLS");
  } else if (filter === "Dollars") {
    currentMoney = money.filter((m) => m.banknots === "Dollars");
  }

  const filterButton = (name: FilterBanknotsType) => {
    setFilter(name);
  };

  return (
    <div>
      <ul>
        {currentMoney.map((m, index) => {
          return (
            <li key={index}>
              <span>{m.banknots} </span>
              <span>{m.value} </span>
              <span>{m.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ margin: "10px 20px" }}>
        <button onClick={() => filterButton("All")}>All banknots</button>
        <button onClick={() => filterButton("RUB")}>RUB</button>
        <button onClick={() => filterButton("Dollars")}>$</button>
      </div>
    </div>
  );
};

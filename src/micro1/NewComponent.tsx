import { useState } from "react";

type NewComponentType = {
  cars: TopCarsType[];
};

type TopCarsType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentType) => {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
  };

  const onClickHandlerZero = () => {
    setA(0);
  };

  return (
    <div>
      {props.cars.map((car, index) => {
        return (
          <table key={index}>
            <tbody>
              <tr>
                <th>Manufacturer</th>
                <th>Model</th>
              </tr>
              <tr>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
      <div>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandlerZero}>0</button>
      </div>
    </div>
  );
};

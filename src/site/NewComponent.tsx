type NewComponentType = {
  cars: TopCarsType[];
};

type TopCarsType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentType) => {
  return (
    <div>
      {props.cars.map((car) => {
        return (
          <table>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
            </tr>
            <tr>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

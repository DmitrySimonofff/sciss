import React, { useState } from "react";
import rock from "../../images/rock.png";
import paper from "../../images/paper.png";
import scissors from "../../images/scissors.png";
import { prices } from "../../config";
import polygon from "../../images/polygon.svg";

const Choice = () => {
  const [select, setSelect] = useState(0);

  return (
    <div>
      <div className="d-flex m-auto">
        <div class="card mx-2 my-2" style={{ width: "5 rem" }}>
          <img height="200px" class="card-img-top" src={rock} alt="rock" />
          <div class="card-body">
            {select == 0 ? (
              <button class="btn btn-success w-100">Selected</button>
            ) : (
              <button
                onClick={() => setSelect(0)}
                class="btn btn-primary w-100"
              >
                Select
              </button>
            )}
          </div>
        </div>

        <div class="card mx-2 my-2" style={{ width: "5 rem" }}>
          <img height="200px" class="card-img-top" src={paper} alt="rock" />
          <div class="card-body">
            {select == 1 ? (
              <button class="btn btn-success w-100">Selected</button>
            ) : (
              <button
                onClick={() => setSelect(1)}
                class="btn btn-primary w-100"
              >
                Select
              </button>
            )}
          </div>
        </div>

        <div class="card mx-2 my-2" style={{ width: "5 rem" }}>
          <img height="200px" class="card-img-top" src={scissors} alt="rock" />
          <div class="card-body">
            {select == 2 ? (
              <button class="btn btn-success w-100">Selected</button>
            ) : (
              <button
                onClick={() => setSelect(2)}
                class="btn btn-primary w-100"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex my-4 justify-content-center">
        {prices.map((price) => (
          <button className="btn d-flex  justify-content-between  align-items-center btn-warning mx-4">
            {price.bet + "  "}
            <img className="mx-1" height="25px" src={polygon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Choice;

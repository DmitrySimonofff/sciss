import React, { useState } from "react";
import rock from "../../images/rock.png";
import paper from "../../images/paper.png";
import scissors from "../../images/scissors.png";

const Choice = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="d-flex m-auto">
      <div class="card mx-2 my-2" style={{ width: "5 rem" }}>
        <img height="200px" class="card-img-top" src={rock} alt="rock" />
        <div class="card-body">
          {select == 0 ? (
            <button class="btn btn-success w-100">Selected</button>
          ) : (
            <button onClick={() => setSelect(0)} class="btn btn-primary w-100">
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
            <button onClick={() => setSelect(1)} class="btn btn-primary w-100">
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
            <button onClick={() => setSelect(2)} class="btn btn-primary w-100">
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Choice;

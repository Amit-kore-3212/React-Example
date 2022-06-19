import React, { useState } from "react";
import { CardComponent } from "./CardComponent";
import items from "../items.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../data.json";

export const NewOrder = () => {
  const [isElectronics, setIsElectronics] = useState("");
  const navigate = useNavigate();

  const handleAddorder = () => {
    const adddata = {
      id: data.response.length + 1,
      orderDescription: "Order for Customer 1",
      countOfItemTypes: { Electronics: 2, Groceries: 2 },
      createdBy: "Ajeet kumar",
      createdAt: new Date().toLocaleString(),
    };
    data.response.push(adddata);
    navigate("/");
  };

  const handleElectronicsCheckBoxChange = (id) => {
    isElectronics ? setIsElectronics("") : setIsElectronics(id);
  };

  const handleRoute = () => {
    navigate("/");
  };

  const filteredItems = isElectronics
    ? items.allItems.filter((ele) => ele.itemTypeId == isElectronics)
    : items.allItems;

  return (
    <div style={{ display: "flex", paddingTop: "10px" }}>
      <div style={{ width: "250px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>ITEM TYPE</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.itemTypes.map((ele) => {
              return (
                <div key={ele.id}>
                  <input
                    type={"checkbox"}
                    checked={ele.id == isElectronics}
                    onChange={(e) => handleElectronicsCheckBoxChange(ele.id)}
                  />
                  {ele.itemTypeName}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ paddingLeft: "20px" }}>
          <div style={{ paddingRight: "30px" }}>
            <div>
              <h3>Add Items To Order</h3>
            </div>
            <div>
              <textarea
                style={{ width: "100%" }}
                placeholder="order description"
              ></textarea>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          {filteredItems?.map((ele) => {
            return (
              <div key={ele.id} style={{ padding: "20px" }}>
                <CardComponent
                  itemDescription={ele.temDescription}
                  itemName={ele.itemName}
                  itemTypeId={ele.itemTypeId}
                  itemSpecifications={ele.itemSpecifications}
                />
              </div>
            );
          })}
        </div>
        <div style={{ paddingTop: "10", paddingLeft: "20px", display: "flex" }}>
          <div style={{ width: "100%", padding: "20px" }}>
            <button
              style={{
                width: "100%",
                backgroundColor: "#d1eb42",
                border: "1px solid #d1eb42",
                color: "#ffff",
                height: "30px",
              }}
              onClick={handleRoute}
            >
              Cancel
            </button>
          </div>
          <div style={{ width: "100%", padding: "20px" }}>
            <button
              style={{
                width: "100%",
                backgroundColor: "#39d854",
                border: "1px solid #39d854",
                color: "#ffff",
                height: "30px",
              }}
              onClick={handleAddorder}
            >
              Book Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

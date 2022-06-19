import React, { useState } from "react";
import "../../App.css";
import { ArrowDown } from "../Icons/ArrowDownIcon";
import { ArrowUp } from "../Icons/ArrowUpIcon";

export const CardComponent = ({
  itemName,
  itemDescription,
  itemSpecifications,
  itemTypeId,
  isElectonics,
  isGroceries,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((x) => !x);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #85859d",
        borderRadius: "5px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #232a35",
        }}
      >
        <div style={{ paddingLeft: "10px" }}>
          <div>{itemName}</div>
          <div>{itemDescription}</div>
        </div>
        <div
          style={{
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "10px" }}>
            <button
              style={{
                backgroundColor: "#0072ff",
                border: "1px solid #232a35",
                color: "#ffff",
              }}
            >
              Y
            </button>
            <button
              style={{
                backgroundColor: "#ffff",
                border: "1px solid #232a35",
                color: "#232a35",
              }}
            >
              N
            </button>
          </div>
          {itemSpecifications !== null && (
            <div onClick={handleToggle} style={{ cursor: "pointer" }}>
              {isOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
          )}
        </div>
      </div>
      <div>
        {!isOpen && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {itemSpecifications?.memory ? (
              <div style={{ display: "flex", padding: "10px" }}>
                <div>please select Memory</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10%",
                  }}
                >
                  <div style={{ fontSize: "12px", display: "flex" }}>
                    <div>126 GB </div>
                    <div style={{ paddingLeft: "10px" }}> 256 GB</div>
                    <div style={{ paddingLeft: "10px" }}>512 GB</div>
                    <div style={{ paddingLeft: "10px" }}>1026 GB</div>
                  </div>

                  <progress id="progress" value="512" max="1000">
                    {itemSpecifications.memory}
                  </progress>
                </div>
              </div>
            ) : (
              <div>
                {itemSpecifications !== null && (
                  <div style={{ display: "flex", padding: "10px" }}>
                    {itemSpecifications !== null && (
                      <>
                        <div>Select The pack size in kgs </div>
                        <div style={{ paddingLeft: "10%", display: "flex" }}>
                          <div style={{ paddingRight: "10px" }}> - </div>
                          <div>
                            <button style={{ border: "1px solid #0072ff" }}>
                              {itemSpecifications?.sizeInKG}
                            </button>
                          </div>
                          <div style={{ paddingLeft: "10px" }}> + </div>
                          <div
                            style={{ paddingLeft: "10px", color: "#0072ff" }}
                          >
                            {" "}
                            + KG
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {itemSpecifications?.colorChoice && (
              <div style={{ display: "flex", padding: "10px" }}>
                <div>Do you want to choose order</div>
                <div style={{ paddingLeft: "10%" }}>
                  <button
                    style={{
                      backgroundColor: "#0072ff",
                      border: "1px solid #232a35",
                      color: "#ffff",
                    }}
                  >
                    Y
                  </button>
                  <button
                    style={{
                      backgroundColor: "#ffff",
                      border: "1px solid #232a35",
                      color: "#232a35",
                    }}
                  >
                    N
                  </button>
                </div>
              </div>
            )}
            {itemSpecifications?.color && (
              <div style={{ display: "flex", padding: "10px" }}>
                <div>Please choose color</div>
                <div
                  style={{
                    paddingLeft: "10%",
                    display: "flex",
                    width: "15%",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    <button
                      style={{
                        backgroundColor:
                          itemSpecifications?.color == "GREEN"
                            ? "#0072ff"
                            : "#ffff",
                        color:
                          itemSpecifications?.color == "GREEN"
                            ? "#FFF"
                            : "#232a35",
                      }}
                    >
                      {"GREEN"}
                    </button>
                  </div>
                  <div>
                    <button
                      style={{
                        backgroundColor:
                          itemSpecifications?.color == "RED"
                            ? "#0072ff"
                            : "#ffff",
                        color:
                          itemSpecifications?.color == "RED"
                            ? "#FFF"
                            : "#232a35",
                      }}
                    >
                      {"RED"}
                    </button>
                  </div>
                  <div>
                    <button
                      style={{
                        backgroundColor:
                          itemSpecifications?.color == "BLUE"
                            ? "#0072ff"
                            : "#ffff",
                        color:
                          itemSpecifications?.color == "BLUE"
                            ? "#FFF"
                            : "#232a35",
                      }}
                    >
                      {"BLUE"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import data from "../data.json";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export const OrderManagement = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setOrderInfo(data.response);
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleNewOrder = () => {
    navigate("/new-order");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#dce0e7",
        height: "calc(100vh - 60px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>Order management Screen </h3>
        </div>
        <div style={{ paddingTop: "20px", paddingRight: "30px" }}>
          <input
            style={{ width: "200px", height: "20px" }}
            placeholder="search by order description"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div>
        <table border="1" width={"100%"} style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order description</th>
              <th>Count of Item types included in order</th>
              <th>% of electronic items</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderInfo
              .filter((data) => data.orderDescription.includes(searchValue))
              .map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td>{`0${ele.id}`}</td>
                    <td>{ele.orderDescription}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            border: "1px solid #232a35",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "25px",
                            textAlign: "center",
                            paddingRight: "10px",
                            color:
                              ele.countOfItemTypes.Electronics == 0 && "red",
                          }}
                        >
                          <div style={{ paddingLeft: "5px" }}>
                            {"Electronics"}
                          </div>
                          <div style={{ paddingRight: "5px" }}>
                            {ele.countOfItemTypes.Electronics}
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            border: "1px solid #232a35",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "25px",
                            textAlign: "center",
                            marginLeft: "10px",
                            color: ele.countOfItemTypes.Groceries == 0 && "red",
                          }}
                        >
                          <div style={{ paddingLeft: "5px" }}>
                            {"Groceries"}
                          </div>
                          <div style={{ paddingRight: "5px" }}>
                            {ele.countOfItemTypes.Groceries}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {ele.countOfItemTypes.Electronics == 0
                        ? "0%"
                        : `${100 / ele.countOfItemTypes.Electronics}%`}
                    </td>
                    <td>{ele.createdBy}</td>
                    <td>{moment(ele.createdAt).format("YYYY-MM-DD")}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <EditIcon />
                        <DeleteIcon />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div style={{ paddingTop: "5%" }}>
        <button
          style={{
            backgroundColor: "#0072ff",
            color: "#ffff",
            width: "200px",
            height: "40px",
            border: "1px solid #0072ff",
            cursor: "pointer",
          }}
          onClick={handleNewOrder}
        >
          Create New Order
        </button>
      </div>
    </div>
  );
};

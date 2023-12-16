import React, { useState } from "react";
import Select from "react-select";
import delegateList from "../Json/DelegateList.json";
import "../App.css";

const Demo = () => {
  const [tableRows, setTableRows] = useState([
    {
      delegateName: "",
      address: "",
      email: "",
      pickup: "",
      drop: "",
      exception: "",
    },
  ]);

  const delegateOptions = delegateList.map((delegate) => ({
    value: delegate.DelegateID,
    label: delegate.DelegateName,
  }));

  const option = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  const thStyle = {
    fontSize: "12px",
    border: "none",
    outline: "none",
    background: "none",
  };

  const handleTableRowChange = (selectedOption, index, field) => {
    const updatedRows = [...tableRows];
    updatedRows[index][field] = selectedOption; // Store the entire option object

    // Check if the user is typing in the last row
    if (
      index === updatedRows.length - 1 &&
      selectedOption &&
      selectedOption.value !== ""
    ) {
      // Add a new empty row
      updatedRows.push({
        delegateName: "",
        address: "",
        email: "",
        pickup: "",
        drop: "",
        exception: "",
      });
    }

    // Update the state with the modified rows
    setTableRows(updatedRows);
  };

  return (
    <div className="Demo">
      {tableRows.map((row, index) => (
        <tr key={index}>
          <th className="tableslno" style={thStyle}>
            <span className="firsttableno">{index + 1}</span>
          </th>
          <th className="TableHead" style={thStyle}>
            <Select
              className="TableSelectOption"
              options={delegateOptions}
              placeholder="Delegate Name"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "delegateName")
              }
              value={row.delegateName}
            />
          </th>
          <th className="TableHead1" style={thStyle}>
            <input
              type="text"
              className="TableSelectOption1"
              placeholder="Address"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "address")
              }
              value={row.address}
            />
          </th>
          <th className="TableHead2" style={thStyle}>
            <input
              type="text"
              className="TableSelectOption2"
              placeholder="Email"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "email")
              }
              value={row.email}
            />
          </th>
          <th className="TableHead3" style={thStyle}>
            <Select
              className="TableSelectOption3"
              options={option}
              placeholder="PickUp"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "pickup")
              }
              value={row.pickup}
            />
          </th>
          <th className="TableHead4" style={thStyle}>
            <Select
              className="TableSelectOption4"
              options={option}
              placeholder="Drop"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "drop")
              }
              value={row.drop}
            />
          </th>
          <th className="TableHead6" style={thStyle}>
            <Select
              className="TableSelectOption6"
              options={option}
              placeholder="Add Exception"
              onChange={(selectedOption) =>
                handleTableRowChange(selectedOption, index, "exception")
              }
              value={row.exception}
            />
          </th>
        </tr>
      ))}
    </div>
  );
};

export default Demo;

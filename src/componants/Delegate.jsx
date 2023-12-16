import React, { useState } from "react";
import Select from "react-select";
import delegateList from "../Json/DelegateList.json";
const Delegate = () => {
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

  const handleTableRowChange = (selectedOption, index, field) => {
    const updatedRows = [...tableRows];
    updatedRows[index][field] = selectedOption;

    if (
      index === updatedRows.length - 1 &&
      selectedOption &&
      selectedOption.value !== ""
    ) {
      updatedRows.push({
        delegateName: "",
        address: "",
        email: "",
        pickup: "",
        drop: "",
        exception: "",
      });
    }

    setTableRows(updatedRows);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "92%",
    }),
  };

  return (
    <div className="service-conatinar">
      <span className="service-text">Delegate Details</span>
      <div className="delegate-sub-box">
        <div className="service-heading-row">
          <div className="service-no-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Sl No
            </span>

            {tableRows.map((row, index) => (
              <div className="slno-box">
                {" "}
                <span>{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="service-name-box">
            <span
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
                marginTop: 5,
              }}
              value=""
            >
              Delegate Name
            </span>
            {tableRows.map((row, index) => (
              <Select
                key={index}
                className="select-service-name"
                options={delegateOptions}
                placeholder="Delegate Name"
                value={row.delegateName}
                onChange={(selectedOption) =>
                  handleTableRowChange(selectedOption, index, "delegateName")
                }
                styles={customStyles}
              />
            ))}
          </div>

          <div className="service-crtifct-box">
            <span
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
                marginTop: 5,
              }}
              value=""
            >
              {" "}
              Address
            </span>

            {tableRows.map((row, index) => (
              <input
                key={index}
                type="text"
                placeholder="Address"
                className="service-crtificate-input"
                value={row.address}
                onChange={(event) =>
                  handleTableRowChange(event.target.value, index, "address")
                }
              />
            ))}
          </div>
          <div className="service-date-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Email
            </span>

            {tableRows.map((row, index) => (
              <input
                key={index}
                type="text"
                placeholder="Email"
                className="service-date"
                value={row.email}
                onChange={(event) =>
                  handleTableRowChange(event.target.value, index, "email")
                }
              />
            ))}
          </div>
          <div className="service-unit-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Pickup
            </span>

            {tableRows.map((row, index) => (
              <input
                key={index}
                type="text"
                placeholder="Pickup"
                className="service-unit-input"
                value={row.pickup}
                onChange={(event) =>
                  handleTableRowChange(event.target.value, index, "pickup")
                }
              />
            ))}
          </div>
          <div className="service-quantity-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Drop
            </span>

            {tableRows.map((row, index) => (
              <input
                key={index}
                type="text"
                placeholder="Drop"
                className="service-Quantity-input"
                value={row.drop}
                onChange={(event) =>
                  handleTableRowChange(event.target.value, index, "drop")
                }
              />
            ))}
          </div>
          <div className="service-reference-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Add Exception
            </span>

            {tableRows.map((row, index) => (
              <input
                key={index}
                type="text"
                placeholder="Add Exception"
                className="service-Referece-input"
                value={row.exception}
                onChange={(event) =>
                  handleTableRowChange(event.target.value, index, "exception")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delegate;

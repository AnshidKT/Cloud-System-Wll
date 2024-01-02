import React from "react";
import Select from "react-select";
import Servicenames from "../../Json/ServiceDifferentNames.json";
import "../../App.css";
const Service = () => {
  const serviceNames = Servicenames.map((item) => ({
    value: item.ID,
    label: item.Name,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "92%",
      height: 25, 
    }),
  };
  return (
    <div className="service-conatinar">
      <span className="service-text">Service Details</span>
      <div className="service-sub-box">
        <div className="service-heading-row">
          <div className="service-no-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Sl No
            </span>
            <div className="slno-box">
              {" "}
              <span>1</span>
            </div>
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
              {" "}
              Service Name
            </span>
            <Select
              className="select-service-name"
              options={serviceNames}
              placeholder="Service Name"
              styles={customStyles}
            />
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
              Name In Certificate
            </span>
            <input
              type="text"
              placeholder="Name in Certificate"
              className="service-crtificate-input"
            />
          </div>
          <div className="service-date-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Requested Data Time
            </span>
            <input type="date" className="service-date" />
          </div>
          <div className="service-unit-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Unit
            </span>
            <input
              type="text"
              placeholder="Unit"
              className="service-unit-input"
            />
          </div>
          <div className="service-quantity-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              Quantity
            </span>
            <input
              type="text"
              placeholder="Quantity"
              className="service-Quantity-input"
            />
          </div>
          <div className="service-reference-box">
            <span style={{ fontSize: 14, fontWeight: "600", marginTop: 5 }}>
              LPO Referece NO
            </span>
            <input
              type="text"
              placeholder="LPO Referece NO"
              className="service-Referece-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

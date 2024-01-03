import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Customerjson from "../../Json/Customer.json";
import ScheduleTypeJson from "../../Json/Schedule Type.json";
import CustomerCertificate from "../../Json/CustomerDifferentNames.json";

const Entry = () => {
  const [customerName, setCustomerName] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [scheduleType, setScheduleType] = useState(null);
  const [certificateOptions, setCertificateOptions] = useState([]);

  const handleNameChange = (selectedOptions) => {
    setCustomerName(selectedOptions);

    const selectedCertificates = CustomerCertificate.filter(
      (cert) => cert.CustomerID === selectedOptions?.value
    );

    const updatedCertificateOptions = selectedCertificates.map((item) => ({
      value: item.NameID,
      label: item.Name,
    }));

    setCertificateOptions(updatedCertificateOptions);
    setCertificate(null);
    setScheduleType(null);
  };

  const CustomerName = Customerjson.map((item) => ({
    value: item.CustomerID,
    label: item.CustomerName,
  }));

  const ScheduleTypeList = ScheduleTypeJson.map((item) => ({
    value: item.SerialNo,
    label: item.ScheduleType,
  }));

  return (
    <div className="entry-main-container">
      <Link style={{ marginLeft: 20 }} to="/Details">
        Details
      </Link>
      <div className="Entry-container">
        <input type="number" placeholder="Req ID" />
        <input type="text" placeholder="Req NO" />
        <Select
          className="reg-select"
          placeholder="Customer"
          options={CustomerName}
          onChange={handleNameChange}
          value={customerName}
        />
        <Select
          className="reg-select"
          placeholder="Name In Certificate"
          options={certificateOptions}
          onChange={setCertificate}
          value={certificate}
        />
        <Select
          className="reg-select"
          placeholder="Schedule type"
          options={ScheduleTypeList}
          onChange={setScheduleType}
          value={scheduleType}
        />
        <Select className="reg-select" placeholder="Service type" />
      </div>
    </div>
  );
};

export default Entry;

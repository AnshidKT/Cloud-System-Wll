import React, { useState } from "react";
import Select from "react-select";
import { Certificate, Customer, Scheduletype } from "./DemoDatas";
import { Link } from "react-router-dom";
// import Customerjson from '../../Json/Customer.json'
const Entry = () => {
  const [customerName, setCustomerName] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [scheduleType, setScheduleType] = useState(null);
  const [certificateOptions, setCertificateOptions] = useState([]);

  const handleNameChange = (selectedOptions) => {
    setCustomerName(selectedOptions);

    const selectedCertificates = Certificate.filter(
      (cert) => cert.value === selectedOptions?.value
    );

    const updatedCertificateOptions = selectedCertificates.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    setCertificateOptions(updatedCertificateOptions);
    setCertificate(null);
    setScheduleType(null);
  };

  const CustomerName = Customer.map((item) => ({
    value: item.value,
    label: item.name,
  }));

  const ScheduleType = Scheduletype.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  return (
    <div className="entry-main-container">
   
<Link style={{marginLeft:20}} to='/Details'>Details</Link>
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
          options={ScheduleType}
          onChange={setScheduleType}
          value={scheduleType}
        />
        <Select className="reg-select" placeholder="Service type" />
      </div>
     
    </div>
  );
};

export default Entry;

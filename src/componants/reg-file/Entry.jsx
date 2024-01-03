import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Customerjson from "../../Json/Customer.json";
import ScheduleTypeJson from "../../Json/Schedule Type.json";
import CustomerCertificate from "../../Json/CustomerDifferentNames.json";
import SalesOrderjson from "../../Json/SalesorderHdr.json";
import ServiceTypejson from "../../Json/Service Type.json";

const Entry = () => {
  const [customerName, setCustomerName] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [scheduleType, setScheduleType] = useState(null);
  const [salesOrder, setSalesOrder] = useState(null);
  const [certificateOptions, setCertificateOptions] = useState([]);
  const [salesOrderOptions, setSalesOrderOptions] = useState([]);

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

    const filteredSalesOrders = SalesOrderjson.filter(
      (order) => order.CustomerID === selectedOptions?.value
    );

    const updatedSalesOrderOptions = filteredSalesOrders.map((item) => ({
      value: item.SalesOrderID,
      label: item.SalesOrderID,
    }));

    setSalesOrderOptions(updatedSalesOrderOptions);
  };

  const CustomerName = Customerjson.map((item) => ({
    value: item.CustomerID,
    label: item.CustomerName,
  }));

  const ScheduleTypeList = ScheduleTypeJson.map((item) => ({
    value: item.SerialNo,
    label: item.SalesOrderNo,
  }));

  const ServiceTypes = ServiceTypejson.map((item) => ({
    value: item.ServiceTypeCtrID,
    label: item.ServiceType,
  }));

  return (
    <div className="entry-main-container">
      <Link style={{ marginLeft: 20 }} to="/Details">
        General
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
        <Select
          className="reg-select"
          placeholder="Sales Order"
          options={salesOrderOptions}
          onChange={setSalesOrder}
          value={salesOrder}
        />
        <Select
          className="reg-select"
          placeholder="Service type"
          options={ServiceTypes}
        />
      </div>
    </div>
  );
};

export default Entry;

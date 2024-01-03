import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import Select from "react-select";
import ServiceList from "../../Json/Service List.json";
import Certificates from "../../Json/CustomerDifferentNames.json";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [slNo, setSlNo] = useState(1);
  const [additionalRows, setAdditionalRows] = useState([]);

  useEffect(() => {
    if (selectedService) {
      setSlNo((prevSlNo) => prevSlNo + 1);
    } else {
      setSlNo(0);
    }
  }, [selectedService]);

  const openModal = (selectedOption) => {
    setSelectedService(selectedOption);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOkButtonClick = () => {
    if (selectedService) {
      setSelectedServiceName(selectedService.value);
      const newRowData = {
        slNo: slNo,
        salesOrder: selectedService?.label || "",
        service: selectedService?.value || "",
      };
      setAdditionalRows((prevRows) => [...prevRows, newRowData]);
    }
    closeModal();
  };

  const salesOrderNo = ServiceList.map((item) => ({
    value: item.ServiceName,
    label: item.ID,
  }));

  const certificatesNames = Certificates.map((item) => ({
    value: item.NameID,
    label: item.Name,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 130,
      border: 0,
    }),
  };

  return (
    <div className="general-container">
      <Link style={{ marginLeft: 10, marginTop: 10 }} to="/">
        General
      </Link>
      <div className="details-sub-container">
        <div className="table-container">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>sl no</th>
                <th>sales order</th>
                <th>service Name</th>
                <th>name in certificate</th>
                <th>for exam only</th>
                <th>approval body</th>
                <th>Date and Time</th>
                <th>schedule</th>
                <th>project</th>
                <th>unit</th>
                <th>quantity</th>
                <th>Batch strength</th>
                <th>Location</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td style={{ width: "auto" }}>
                  <Select
                    onChange={openModal}
                    value={selectedService}
                    styles={customStyles}
                    options={salesOrderNo}
                  />
                </td>
                <td>{selectedServiceName}</td>
                <td>
                  <Select options={certificatesNames} />
                </td>
                <td>
                  <input className="exam-input-td" type="text" />
                </td>
                <td></td>
                <td>
                  <input type="datetime-local" />
                </td>
                <td>
                  <input className="exam-input-td" type="text" />
                </td>
                <td></td>
                <td></td>
                <td>
                  <input className="exam-input-td" type="text" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {additionalRows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{row.salesOrder}</td>
                  <td>{row.service}</td>
                  <td>
                    {" "}
                    <Select options={certificatesNames} />
                  </td>
                  <td>
                    <input className="exam-input-td" type="text" />
                  </td>
                  <td></td>
                  <td>
                    <input type="datetime-local" />
                  </td>
                  <td>
                    {" "}
                    <input className="exam-input-td" type="text" />
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    {" "}
                    <input className="exam-input-td" type="text" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Selected Service Details"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            content: {
              width: "70%",
              margin: "auto",
              height: "70%",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
          ariaHideApp={false}
        >
          <h2 style={{ marginBottom: "20px" }}>Selected Service Details</h2>
          <div className="details-modal-div">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>sl no</th>
                  <th>sales order</th>
                  <th>service Name</th>
                  <th>for exam only</th>
                  <th>unit</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{slNo}</td>
                  <td>{selectedService?.label || ""}</td>
                  <td>{selectedService?.value || ""}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={handleOkButtonClick}
            className="btn btn-primary"
            style={{ marginTop: "20px", marginRight: "10px" }}
          >
            Ok
          </button>
          <button
            onClick={closeModal}
            className="btn btn-secondary"
            style={{ marginTop: "20px" }}
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Details;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import Select from "react-select";
import DelegateList from "../../Json/DelegateList.json";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState("");

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
    }
    closeModal();
  };

  const salesOrderNo = DelegateList.map((item) => ({
    value: item.DelegateName,
    label: item.DelegateID,
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
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>sl no</th>
              <th>req no</th>
              <th>sales order</th>
              <th>service Name</th>
              <th>is combo</th>
              <th>name in certificate</th>
              <th>for exam only</th>
              <th>approval body</th>
              <th>defaul starttime</th>
              <th>schedule</th>
              <th>project</th>
              <th>unit</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <Select
                  onChange={openModal}
                  value={selectedService}
                  styles={customStyles}
                  options={salesOrderNo}
                />
              </td>
              <td>{selectedServiceName}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
                  <td></td>
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

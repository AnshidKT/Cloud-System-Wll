import { createContext, useContext, useState } from "react";

const SalesOrderContext = createContext();

export const SalesOrderProvider = ({ children }) => {
  const [selectedSalesOrder, setSelectedSalesOrder] = useState(null);

  const setSalesOrder = (salesOrderData) => {
    setSelectedSalesOrder(salesOrderData);
  };

  return (
    <SalesOrderContext.Provider value={{ selectedSalesOrder, setSalesOrder }}>
      {children}
    </SalesOrderContext.Provider>
  );
};

export const useSalesOrderContext = () => {
  return useContext(SalesOrderContext);
};

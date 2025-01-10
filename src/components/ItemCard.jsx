import React, { useState } from "react";

const ItemCard = () => {
  const apiData = {
    customers: ["Indoasian", "Electrolux", "LG"],
    banks: ["HDFC", "ICICI", "SBI"],
    products: [
      {
        name: "Washing Machine",
        image: "/assets/images/washing-machine.jfif",
        customer: "Indoasian",
        bank: "HDFC",
      },
      {
        name: "AR Pure Copper Wire",
        image: "/assets/images/copper-wire.jfif",
        customer: "Indoasian",
        bank: "SBI",
      },
      {
        name: "Smart Wi-fi Plug",
        image: "/assets/images/router.jfif",
        customer: "LG",
        bank: "HDFC",
      },
      {
        name: "Wiper Motor",
        image: "/assets/images/wiper-motor.jfif",
        customer: "Electrolux",
        bank: "ICICI",
      },
    ],
  };

  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(apiData.products);

  // Filter products based on selected customer and bank
  const handleSearch = () => {
    const filtered = apiData.products.filter((product) => {
      return (
        (!selectedCustomer || product.customer === selectedCustomer) &&
        (!selectedBank || product.bank === selectedBank)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      {/* Dropdown Filters */}
      <div className="row mb-4 cus-ban p-2">
        <div className="col-md-4">
          <label htmlFor="customerSelect">Customer</label>
          <select
            id="customerSelect"
            className="form-control"
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="">All</option>
            {apiData.customers.map((customer, index) => (
              <option key={index} value={customer}>
                {customer}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="bankSelect">Bank</label>
          <select
            id="bankSelect"
            className="form-control"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="">All</option>
            {apiData.banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-dark w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div className="row" id="cardContainer">
        {filteredProducts.length === 0 ? (
          <div className="col-12">
            <p>No products found.</p>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div className="col-lg-3 col-md-4 mb-4" key={index}>
              <div
                className="card"
                style={{ width: "100%", height: "257px", position: "relative" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div
                  className="card-body d-flex align-items-end justify-content-center"
                  style={{ padding: "0" }}
                >
                  <h5 className="card-title w-100 text-center m-0 p-2">
                    {product.name}
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemCard;

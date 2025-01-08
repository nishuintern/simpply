import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import SubSidebar from '../../components/SubSidebar'
import Breadcrumb from '../../components/Breadcrumb'
import FilterBar from '../../components/FilterBar'
import OrderTable from '../../components/OrderTable'
import PaginationBar from '../../components/PaginationBar'

const OrderDispatch = () => {
  return (
    <div className="container-order">
    <div>
      <Sidebar />
    </div>
    <div className="content">
      <Header />
      <div className="sub-container">
        <SubSidebar />

        <div>
          <Breadcrumb
            heading="Order Dispatch"
            backLink="/html/index.html"
            syncLink="/assets/icons/Synchronize.svg"
          />

          <div className="scroll-container">
            <FilterBar />
            <OrderTable />
            <PaginationBar />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderDispatch
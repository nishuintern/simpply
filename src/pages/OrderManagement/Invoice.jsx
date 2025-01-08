import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import SubSidebar from '../../components/SubSidebar'
import Breadcrumb from '../../components/Breadcrumb'
import FilterBar from '../../components/FilterBar'
import PaginationBar from '../../components/PaginationBar'
import InvoiceTable from '../../components/InvoiceTable'

const Invoice = () => {
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
            heading="Invoice"
            backLink="/html/index.html"
            syncLink="/assets/icons/Synchronize.svg"
          />

          <div className="scroll-container">
            <FilterBar />
            <InvoiceTable />
            <div className='mb-5'>
            <PaginationBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoice;
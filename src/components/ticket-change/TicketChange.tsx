import React, { useState } from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
import ListTicketChange from "./ListTicketChange";
import TicketFilter from "./TicketFilter";
import data from "../data/dataTicket";
import { AiOutlineSearch } from "react-icons/ai";
import { Pagination } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { DatePicker, Button, Space } from "antd";
import moment from "moment";
const TicketChange = () => {
  const [items, setItems] = useState(data);

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const onChangeApplyDate = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  const handleFilter = (actionItem: string) => {
    const updateItems = data.filter((curElem) => {
      return curElem.action === actionItem;
    });
    setItems(updateItems);
  };

  const ChangeTicket = (id: string) => {
    const checktatca: any = document.getElementById("checktatca");
    const checkdadoisoat: any = document.getElementById("checkdadoisoat");
    const checkchuadoisoat: any = document.getElementById("checkchuadoisoat");
    const chotdoisoat: any = document.getElementById("chotdoisoat");
    const xuatfile: any = document.getElementById("xuatfile");

    if (chotdoisoat.style.display === "none") {
      chotdoisoat.style.display = "flex";
      xuatfile.style.display = "none";
    } else {
      chotdoisoat.style.display = "none";
      xuatfile.style.display = "flex";
    }

    checktatca.checked = false;
    checkdadoisoat.checked = false;
    checkchuadoisoat.checked = false;
    const checkon: any = document.getElementById(id);
    checkon.checked = true;
  };
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <div className="main-wrap-small">
            <div className="main-wrap-small-box">
              {/* <ListTicketChange /> */}
              <section className="list-ticket-change">
                <div className="list-ticket-change-main">
                  <h3 className="title">?????i so??t v??</h3>
                  <div className="list-ticket-change-main-func">
                    <div className="list-ticket-change-main-func-search">
                      <input
                        type="text"
                        placeholder="T??m b???ng s??? v??"
                        className="search-input"
                      />
                      <span className="icon-search">
                        <AiOutlineSearch />
                      </span>
                    </div>
                    <div className="list-ticket-change-main-func-filter-export">
                      <div
                        className="list-ticket-change-filter btn save"
                        id="chotdoisoat"
                      >
                        <p>Ch???t ?????i so??t</p>
                      </div>
                      <div
                        className="list-ticket-change-filter btn "
                        id="xuatfile"
                      >
                        <p>Xu???t file</p>
                      </div>
                    </div>
                  </div>
                  <div className="list-ticket-change-main-table">
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <th>STT</th>
                          <th>S??? v??</th>
                          <th>T??n s??? ki???n</th>
                          <th>Ng??y s??? d???ngg</th>
                          <th>Lo???i v??</th>
                          <th>C???ng check - in</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items &&
                          items.map((item) => {
                            return (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.sove}</td>
                                <td>{item.tensukien}</td>
                                <td>{item.ngaysudung}</td>
                                <td>{item.loaive}</td>
                                <td>{item.congcheckin}</td>
                                <td>
                                  {item.used === true ? (
                                    <span style={{ color: "red" }}>
                                      {item.action}
                                    </span>
                                  ) : (
                                    <span>{item.action}</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="list-ticket-change-main-pagination">
                    <Pagination defaultCurrent={1} total={200} />
                  </div>
                </div>
              </section>
            </div>
            <div className="main-wrap-small-box">
              {/* <TicketFilter /> */}
              <section className="ticket-filter">
                <div className="ticket-filter-main">
                  <h3 className="title">L???c v??</h3>
                  <div className="dropdown">
                    <div className="dropdown-select">
                      <span className="select">
                        H???i ch??? tri???n l??m ti??u d??ng 2021
                      </span>
                      <span className="select icon-dropdown">
                        <AiOutlineDown />
                      </span>
                    </div>
                    <div className="dropdown-list">
                      <div className="dropdown-list__item">T???t c???</div>
                      <div className="dropdown-list__item">???? ??p d???ng</div>
                    </div>
                  </div>
                  <div className="status">
                    <div className="status-box">
                      <p className="sub-heading">T??nh tr???ng ?????i v??</p>
                    </div>
                    <div className="status-box">
                      <div className="status-box-check">
                        <input
                          type="radio"
                          name=""
                          id="checktatca"
                          className="input-radio"
                          onClick={() => setItems(data)}
                          onChange={() => ChangeTicket("checktatca")}
                        />
                        <span>T???t c???</span>
                      </div>
                      <div className="status-box-check">
                        <input
                          type="radio"
                          name=""
                          id="checkdadoisoat"
                          className="input-radio"
                          onClick={() => handleFilter("???? ?????i so??t")}
                          onChange={() => ChangeTicket("checkdadoisoat")}
                        />
                        <span>???? ?????i so??t</span>
                      </div>
                      <div className="status-box-check">
                        <input
                          type="radio"
                          name=""
                          id="checkchuadoisoat"
                          className="input-radio"
                          onClick={() => handleFilter("Ch??a ?????i so??t")}
                          onChange={() => ChangeTicket("checkchuadoisoat")}
                        />
                        <span>Ch??a ?????i so??t</span>
                      </div>
                    </div>
                  </div>
                  <div className="type">
                    <div className="type-box">
                      <p className="sub-heading">Lo???i v??</p>
                    </div>
                    <div className="type-box">
                      <p>V?? c???ng</p>
                    </div>
                  </div>
                  <div className="date-time">
                    <div className="date-time-box">
                      <p className="sub-heading">T??? ng??y</p>
                    </div>
                    <div className="date-time-box">
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          defaultValue={moment("01/05/2021", dateFormatList[0])}
                          format={dateFormatList}
                          className="bg-tn"
                        />
                      </Space>
                    </div>
                  </div>
                  <div className="date-time">
                    <div className="date-time-box">
                      <p className="sub-heading">?????n ng??y</p>
                    </div>
                    <div className="date-time-box">
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          onChange={onChangeApplyDate}
                          className="bg-dn"
                        />
                      </Space>
                    </div>
                  </div>
                  <div className="ticket-filter-main-func">
                    <button className="btn">L???c</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default TicketChange;

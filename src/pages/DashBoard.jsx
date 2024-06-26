import { useState } from "react";
import "./DashBoard.css";

import Modal from 'react-bootstrap/Modal';

function DashBoard() {
  const quadrantOne = [
    {
      id: 1,
      content:
        "one more to go hey  how ayr fhdjf hfdhkdg hi ia  am the best person in the world",
      status: "completed",
    },
    { id: 2, content: "two", status: "in-progress" },
    { id: 3, content: "three", status: "pending" },
    { id: 4, content: "four", status: "completed" },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose}>
            Close
          </button>
          <button >Understood</button>
        </Modal.Footer>
      </Modal>
      <div className="modal " role="dialog" open="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#bcd9ed", height: "100vh" }}>
        <div className="md-container d-flex flex-column align-items-center justify-content-center   ">
          <div className=" col-12 col-md-5 col-lg-6 col-xl-5 col-xxl-3  gap-2  text-capitalize pink  rounded-c mt-5">
            <h4
              className="text-center  mb-0 mt-3 mb-2 "
              style={{ color: "rgb(69,135,243)" }}
            >
              TO DO LIST
            </h4>
            <div className="task-container row flex-wrap flex-row gap-2   ">
              <div className="p-2 pt-0 h-100 ">
                <div className="mt-0 px-4">
                  <div className="d-flex flex-row justify-content-between  ">
                    <h6 className=" d-flex justify-content-start align-items-center ps-1 mb-0 black-opacity-custom">
                      Your Tasks
                    </h6>
                    <button className="d-flex justify-content-center align-items-center  ms-auto rounded border-1 px-2 py-1  fs-custom  bg-transparent border-color-custom" onClick={handleShow}>
                      <i className="bi bi-plus-circle  mb-0 fs-custom pe-1 d-flex align-items-center "></i>
                      Add Task
                    </button>
                  </div>

                  <div className="d-flex flex-column gap-3 mt-3 mb-3">
                    {quadrantOne.map((item) => {
                      return (
                        <div
                          className="d-flex flex-row justify-content-between bg-white box-shadow rounded  px-2"
                          key={item.id}
                        >
                          <div className="d-flex  add-items-input rounded justify-content-between align-items-center">
                            <input
                              key={item.id}
                              type="text"
                              className=" border-0 bg-transparent text-capitalize w-available text-truncate fs-14px py-2 pe-3"
                              value={item.content}
                              disabled
                            ></input>

                            <button
                              className={
                                " border-0 rounded text-nowrap w-105px text-center text-capitalize fit-content fs-custom text-white " +
                                `${
                                  item.status === "completed"
                                    ? "bg-completed"
                                    : item.status === "pending"
                                    ? "bg-pending"
                                    : "bg-in-progress"
                                }`
                              }
                            >
                              {" "}
                              {item.status}
                            </button>
                          </div>
                          <div className="d-flex justify-content-center align-items-center ">
                            <button className="border-0 bg-transparent ">
                              <i className="bi bi-pencil-square ps-1 d-flex"></i>
                            </button>{" "}
                            <button className="border-0 bg-transparent">
                              <i className="bi bi-trash cursor-pointer d-flex  "></i>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;

import { useState } from "react";
import "../../src/pages/PageOne.css";
import picOnePageOne from "../assets/picOnePageOne.png";
import picTwoPageOne from "../assets/picTwoPageOne.png";
import picThreePageOne from "../assets/picThreePageOne.png";

function PageOne() {
  const [count, setCount] = useState(0);

  function nextScreen() {
    if (count < 3) {
      setCount((prev) => {
        return prev + 1;
      });
    }

    console.log(count);
  }

  function prevScreen() {
    setCount((prev) => {
      return prev - 1;
    });
    console.log(count);
  }

  function moveToLogin() {
    setCount(() => {
      return 2;
    });
  }

  return (
    <div className="md-container d-flex flex-column align-items-center justify-content-center px-3 px-md-0 mb-md-4">
      <div className=" col-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 d-flex flex-row justify-content-between pt-4">
        {count > 0 ? (
          <a
            href="#"
            className="link-primary fw-semibold text-decoration-none "
            onClick={prevScreen}
          >
            Back
          </a>
        ) : (
          <a className="d-hidden"></a>
        )}
        {count <= 1 ? (
          <a
            href="/about"
            className="link-primary fw-semibold text-decoration-none "
            onClick={moveToLogin}
          >
            Skip
          </a>
        ) : (
          <a className="d-hidden"></a>
        )}
      </div>
      <div className="d-flex flex-column align-items-center custom-height-width mt-n5">
        {count === 0 ? (
          <img
            className="img-fluid d-flex object-fit-cover max-height mt-n5 "
            src={picOnePageOne}
            alt="picOnePageOne"
          ></img>
        ) : count === 1 ? (
          <img
            className="img-fluid d-flex object-fit-cover max-height  mt-n5"
            src={picTwoPageOne}
            alt="picOnePageOne"
          ></img>
        ) : (
          <img
            className="img-fluid d-flex object-fit-cover max-height mt-n5 "
            src={picThreePageOne}
            alt="picOnePageOne"
          ></img>
        )}

        <div
          className={
            "d-flex flex-row align-items-center custom-height col-11 rounded-pill gap-2"
          }
        >
          {count >= 0 ? (
            <div className="col-4 custom-height rounded-pill bg-blue"></div>
          ) : null}
          {count >= 1 ? (
            <div className="col-4 custom-height rounded-pill bg-blue"></div>
          ) : null}
          {count >= 2 ? (
            <div className="col-4 custom-height rounded-pill bg-blue"></div>
          ) : null}
        </div>
      </div>

      <div className="col-11 col-sm-5 col-md-5 col-lg-4 col-xl-3 col-xxl-3">
        {count === 0 ? (
          <>
            <p className="fw-bold custom-styling-text-page-one pt-4 text-center">
              Manage your <br></br>notes easily
            </p>
            <p className="text-secondary text-center ">
              A completely easy way to manage and customize your notes.
            </p>
          </>
        ) : count === 1 ? (
          <>
            <p className="fw-bold custom-styling-text-page-one pt-4 text-center">
              Organize your<br></br> thoughts{" "}
            </p>{" "}
            <p className="text-secondary text-center ">
              Most beautiful note taking application.
            </p>
          </>
        ) : (
          <>
            <p className="fw-bold custom-styling-text-page-one pt-4 text-center">
              Create cards and <br></br>easy styling
            </p>
            <p className="text-secondary text-center ">
              Making your content legible has never been easier.
            </p>
          </>
        )}

        {count >= 2 ? (
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block w-100 mt-3  "
            onClick={nextScreen}
          >
            Get Started
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block w-100 mt-3  "
            onClick={nextScreen}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
export default PageOne;

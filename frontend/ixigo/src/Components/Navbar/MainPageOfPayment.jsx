import SelectSeat from "../PaymentComponent/SelectSeat";
import StepProgressBarComponent from "../PaymentComponent/StepProgressBarComponent";
import { Route } from "react-router-dom";
import BasicDiscount from "../PaymentComponent/BasicDiscount";
import WarningBookin from "../PaymentComponent/WarningBookin";
import ContactDetails from "../PaymentComponent/ContactDetails";
import OfferPage from "../PaymentComponent/OfferPage";
function MainPageOfPayment() {
  return (
    <div className="container-fluid  m-auto" style={{}}>
      <div className="row mx-0">
        <div className="col-12">
          <StepProgressBarComponent />
        </div>
      </div>
      <div className="row">
        <div className="col-10 m-0">
          <SelectSeat />
          <BasicDiscount />
          <WarningBookin />
          <ContactDetails />
        </div>
        <div className="col-2 m-0">
          <OfferPage />
        </div>
      </div>
    </div>
  );
}

export default MainPageOfPayment;

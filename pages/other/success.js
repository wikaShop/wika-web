import { deleteAllFromCart } from "@src/store/slices/cart-slice";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Anchor from "../../src/components/anchor";

const SuccessPage = () => {
    const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(deleteAllFromCart())
  }, []);

  return (
    <div className="success-container">
      <div className="success-card">
        {/* Imagen */}
        <img
          src="/assets/images/success-page.webp" // Ruta de la imagen
          alt="Success"
          className="success-image"
        />

        {/* Texto de éxito */}
        <h1 className="success-title">Payment Successful!</h1>

        {/* Icono de éxito */}
        <FaCheckCircle className="success-icon" />

        {/* Mensaje de confirmación */}
        <p className="success-message">
          Your payment has been successfully processed, and a confirmation email
          will be sent to you shortly.
        </p>

        <Anchor
          path="/"
          className="lezada-button lezada-button--medium lezada-button--icon--left"
        >
          Go to Homepage
        </Anchor>
      </div>
    </div>
  );
};

export default SuccessPage;

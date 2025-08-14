import { useRef, useEffect } from "react";
import Link from "next/link";

const ShowMyBookings = ({ setEmail }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = e.target.elements.email.value.trim().toLowerCase();
    setEmail(normalizedEmail);
  };

  return (
    <aside className="show-my-bookings-container">
      <form
        onSubmit={handleEmailSubmit}
        className="show-my-bookings-get-email-form"
      >
        <label htmlFor="show_my_bookings" className="show-my-bookings-label">
          Please enter your email
        </label>
        <input
          className="show-my-bookings-input"
          type="email"
          id="show_my_bookings"
          aria-label="enter email"
          name="email"
          ref={inputRef}
        />
        <button type="submit" className="enter-email-form-button">
          Submit
        </button>
      </form>
    </aside>
  );
};

export default ShowMyBookings;

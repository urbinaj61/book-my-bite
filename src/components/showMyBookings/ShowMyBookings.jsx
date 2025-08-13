const ShowMyBookings = ({ setEmail }) => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = e.target.elements.email.value.trim().toLowerCase();
    setEmail(normalizedEmail);
  };

  return (
    <form onSubmit={handleEmailSubmit} className="show-my-bookings-get-email">
      <label htmlFor="show_my_bookings" className="general-label">
        Please enter your email
      </label>
      <input
        className="general-input"
        type="email"
        id="show_my_bookings"
        aria-label="enter email"
        name="email"
      />
      <button type="submit" className="enter-email-form-button">
        Enter
      </button>
    </form>
  );
};

export default ShowMyBookings;

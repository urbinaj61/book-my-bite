const GetRestaurantEmail = ({ setEmail }) => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = e.target.elements.email.value.trim().toLowerCase();
    setEmail(normalizedEmail);
  };

  return (
    <aside className="show-my-restaurant-container">
      <form
        onSubmit={handleEmailSubmit}
        className="show-my-restaurant-get-email-form"
      >
        <label htmlFor="get-restaurant-email" className="booking-info-label">
          Please enter your email
        </label>
        <input
          type="email"
          id="get-restaurant-email"
          aria-label="enter email"
          name="email"
          className="edit-input"
        />
        <button type="submit" className="enter-email-form-button">
          Enter
        </button>
      </form>
    </aside>
  );
};

export default GetRestaurantEmail;

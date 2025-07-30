const ShowMyBookings = ({ setEmail }) => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = e.target.elements.email.value.trim().toLowerCase();
    setEmail(normalizedEmail);
  };

  return (
    <form onSubmit={handleEmailSubmit}>
      <input
        type="email"
        id="show_my_bookings"
        aria-label="enter email"
        name="email"
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default ShowMyBookings;

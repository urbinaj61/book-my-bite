const ShowMyBookings = ({ setEmail }) => {
  const handleEmailSuvbmit = (e) => {
    e.preventDefault();
    setEmail(e.target.elements.email.value);
  };

  return (
    <form onSubmit={handleEmailSuvbmit}>
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

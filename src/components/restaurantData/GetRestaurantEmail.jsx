const GetRestaurantEmail = ({ setEmail }) => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = e.target.elements.email.value.trim().toLowerCase();
    setEmail(normalizedEmail);
  };

  return (
    <form onSubmit={handleEmailSubmit}>
      <label htmlFor="get-restaurant-email">Please enter your email</label>
      <input
        type="email"
        id="get-restaurant-email"
        aria-label="enter email"
        name="email"
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default GetRestaurantEmail;

const CreateRestaurantDetails = () => {
  return (
    <details>
      <summary className="restaurant-accordion-header">
        Fill in Restaurant Details
      </summary>
      <section className="restaurant-accordion-data-container">
        <label htmlFor="restaurant name" className="restaurant-edit-label">
          Please enter the restaurant name
        </label>
        <input
          placeholder="Please enter name"
          className="edit-restaurant-input"
          type="text"
          name="name"
          id="restaurant name"
          aria-label="restaurant name"
        />

        <label htmlFor="restaurant address1" className="restaurant-edit-label">
          Please enter address line one
        </label>
        <input
          placeholder="Please enter address line one"
          className="edit-restaurant-input"
          type="text"
          name="address1"
          id="restaurant address1"
          aria-label="restaurant address1"
        />

        <label htmlFor="restaurant address2" className="restaurant-data-label">
          Please enter address line two
        </label>
        <input
          placeholder="Please enter address line two"
          className="edit-restaurant-input"
          type="text"
          name="address2"
          id="restaurant address2"
          aria-label="restaurant address2"
        />

        <label htmlFor="restaurant postcode" className="restaurant-data-label">
          Please enter the postcode
        </label>
        <input
          placeholder="Please enter the postcode"
          className="edit-restaurant-input"
          type="text"
          name="postCode"
          id="restaurant postcode"
          aria-label="restaurant postcode"
        />

        <label htmlFor="restaurant city" className="restaurant-data-label">
          Please enter the city
        </label>
        <input
          placeholder="Please enter the city"
          className="edit-restaurant-input"
          type="text"
          name="city"
          id="restaurant city"
          aria-label="restaurant city"
        />

        <label htmlFor="restaurant email" className="restaurant-data-label">
          Please enter the email
        </label>
        <input
          placeholder="Please enter the email"
          className="edit-restaurant-input"
          type="email"
          name="email"
          id="restaurant email"
          aria-label="restaurant email"
        />

        <label htmlFor="restaurant phone" className="restaurant-data-label">
          Please enter the phone number
        </label>
        <input
          placeholder="Please enter the phone number"
          className="edit-restaurant-input"
          type="text"
          name="phone"
          id="restaurant phone"
          aria-label="restaurant phone"
        />

        <label htmlFor="restaurant type" className="restaurant-data-label">
          Please enter the type of restaurant
        </label>
        <input
          placeholder="Please enter the type of restaurant"
          className="edit-restaurant-input"
          type="text"
          name="type"
          id="restaurant type"
          aria-label="restaurant type"
        />

        <label htmlFor="restaurant cuisine" className="restaurant-data-label">
          Please enter the cuisine
        </label>
        <input
          placeholder="Please enter the cuisine"
          className="edit-restaurant-input"
          type="text"
          name="cuisine"
          id="restaurant cuisine"
          aria-label="restaurant cuisine"
        />

        <label
          htmlFor="restaurant description"
          className="restaurant-data-label"
        >
          Please enter a description
        </label>
        <input
          placeholder="Please enter a description"
          className="edit-restaurant-input"
          type="text"
          name="description"
          id="restaurant description"
          aria-label="restaurant description"
        />
      </section>
    </details>
  );
};

export default CreateRestaurantDetails;

const EditRestaurantDetails = ({ formData, onDetailsChange }) => {
  const {
    name,
    address1,
    address2,
    postCode,
    city,
    email,
    phone,
    description,
    cuisine,
    type,
  } = formData;

  return (
    <details>
      <summary className="restaurant-accordion-header">
        Edit Restaurant Details
      </summary>
      <section className="restaurant-accordion-data-container">
        <label htmlFor="restaurant name" className="restaurant-edit-label">
          Restaurant name
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="name"
          id="restaurant name"
          aria-label="restaurant name"
          value={name}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant address1" className="restaurant-edit-label">
          Address line one
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="address1"
          id="restaurant address1"
          aria-label="restaurant address1"
          value={address1}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant address2" className="restaurant-edit-label">
          Address line two
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="address2"
          id="restaurant address2"
          aria-label="restaurant address2"
          value={address2}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant postcode" className="restaurant-edit-label">
          Postcode
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="postCode"
          id="restaurant postcode"
          aria-label="restaurant postcode"
          value={postCode}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant city" className="restaurant-edit-label">
          City
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="city"
          id="restaurant city"
          aria-label="restaurant city"
          value={city}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant email" className="restaurant-edit-label">
          Email
        </label>
        <input
          className="edit-restaurant-input"
          type="email"
          name="email"
          id="restaurant email"
          aria-label="restaurant email"
          value={email}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant phone" className="restaurant-edit-label">
          Phone number
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="phone"
          id="restaurant phone"
          aria-label="restaurant phone"
          value={phone}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant type" className="restaurant-edit-label">
          Type of restaurant
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="type"
          id="restaurant type"
          aria-label="restaurant type"
          value={type}
          onChange={onDetailsChange}
        />

        <label htmlFor="restaurant cuisine" className="restaurant-edit-label">
          Cuisine
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="cuisine"
          id="restaurant cuisine"
          aria-label="restaurant cuisine"
          value={cuisine}
          onChange={onDetailsChange}
        />

        <label
          htmlFor="restaurant description"
          className="restaurant-edit-label"
        >
          Description
        </label>
        <input
          className="edit-restaurant-input"
          type="text"
          name="description"
          id="restaurant description"
          aria-label="restaurant description"
          value={description}
          onChange={onDetailsChange}
        />
      </section>
    </details>
  );
};

export default EditRestaurantDetails;

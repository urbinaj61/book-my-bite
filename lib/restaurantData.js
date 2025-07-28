const bookings = [
  {
    restaurantId: "",
    customerEmail: "aaa@aaa.com",
    customerName: "John",
    dateBooked: "2025-07-28",
    tableBooked: "Table 1",
    seatsBooked: 6,
    timeSlot: { start: "18:00", end: "19:30" },
  },
  {
    restaurantId: "",
    customerEmail: "bbb@bbb.com",
    customerName: "David",
    dateBooked: "2025-07-28",
    tableBooked: "Table 2",
    seatsBooked: 2,
    timeSlot: { start: "19:30", end: "21:00" },
  },
];

const restaurants = [
  {
    name: "Harry's place",
    address1: "Alexander Platz 190",
    address2: "",
    postCode: "12345",
    city: "Berlin",
    email: "info@harrysplace.com",
    phone: "+447912345678",
    type: "All you can eat",
    cuisine: "Chinese",
    description:
      "This is a Chinese restaurant serving traditional Chinese delicacies",
    images: [{ imageUrl: "" }, { imageUrl: "" }],
    tableTypes: [
      {
        name: "Table 1",
        seats: 6,
      },
      {
        name: "Table 2",
        seats: 2,
      },
      {
        name: "Table 3",
        seats: 4,
      },
      {
        name: "Table 4",
        seats: 3,
      },
      {
        name: "Table 5",
        seats: 6,
      },
      {
        name: "Table 6",
        seats: 2,
      },
    ],
    menuLinks: [
      {
        type: "breakfast",
        link: "https://breakfastMenu.com",
      },
      {
        type: "lunch",
        link: "https://lunchMenu.com",
      },
      {
        type: "dinner",
        link: "https://dinnerMenu.com",
      },
      {
        type: "cocktails",
        link: "https://cocktailsMenu.com",
      },
      {
        type: "drinks",
        link: "https://drinksMenu.com",
      },
      {
        type: "wines",
        link: "https://winesMenu.com",
      },
    ],
    openingTimes: [
      {
        day: "Monday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Tuesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Wednesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Thursday",
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
          },
          {
            start: "09:30",
            end: "11:00",
          },
          {
            start: "11:00",
            end: "12:30",
          },
          {
            start: "12:30",
            end: "14:00",
          },
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Friday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Saturday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Sunday",
        open: "closed",
        close: "closed",
      },
    ],
  },
  {
    type: "Fred's place",
    address1: "Alexander Platz 199",
    address2: "",
    postCode: "12345",
    city: "Berlin",
    email: "info@fredsplace.com",
    phone: "+447912345678",
    type: "Casual Dining",
    cuisine: "Italian",
    description:
      "This is an Italian restaurant famous for it's traditional handmade pizzas and pastas",
    images: [],
    tableTypes: [
      {
        name: "Table 1",
        seats: 6,
      },
      {
        name: "Table 2",
        seats: 2,
      },
      {
        name: "Table 3",
        seats: 4,
      },
      {
        name: "Table 4",
        seats: 3,
      },
      {
        name: "Table 5",
        seats: 6,
      },
      {
        name: "Table 6",
        seats: 2,
      },
    ],
    menuLinks: [
      {
        type: "breakfast",
        link: "https://breakfastMenu.com",
      },
      {
        type: "lunch",
        link: "https://lunchMenu.com",
      },
      {
        type: "dinner",
        link: "https://dinnerMenu.com",
      },
      {
        name: "cocktails",
        link: "https://cocktailsMenu.com",
      },
      {
        name: "drinks",
        link: "https://drinksMenu.com",
      },
      {
        name: "wines",
        link: "https://winesMenu.com",
      },
    ],
    openingTimes: [
      {
        day: "Monday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Tuesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Wednesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Thursday",
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
          },
          {
            start: "09:30",
            end: "11:00",
          },
          {
            start: "11:00",
            end: "12:30",
          },
          {
            start: "12:30",
            end: "14:00",
          },
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Friday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Saturday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Sunday",
        open: "closed",
        close: "closed",
      },
    ],
  },
  {
    name: "Sally's place",
    address1: "Alexander Platz 200",
    address2: "",
    postCode: "12345",
    city: "Berlin",
    email: "info@sallysplace.com",
    phone: "+447912345678",
    type: "Fine Dining",
    cuisine: "French",
    description:
      "This is a Thai restaurant. Sally's place stays true to classic Thai dishes",
    images: [{ imageUrl: "" }, { imageUrl: "" }],
    tableTypes: [
      {
        name: "Table 1",
        seats: 6,
      },
      {
        name: "Table 2",
        seats: 2,
      },
      {
        name: "Table 3",
        seats: 4,
      },
      {
        name: "Table 4",
        seats: 3,
      },
      {
        name: "Table 5",
        seats: 6,
      },
      {
        name: "Table 6",
        seats: 2,
      },
    ],
    menuLinks: [
      {
        name: "breakfast",
        link: "https://breakfastMenu.com",
      },
      {
        name: "lunch",
        link: "https://lunchMenu.com",
      },
      {
        name: "dinner",
        link: "https://dinnerMenu.com",
      },
      {
        name: "cocktails",
        link: "https://cocktailsMenu.com",
      },
      {
        name: "drinks",
        link: "https://drinksMenu.com",
      },
      {
        name: "wines",
        link: "https://winesMenu.com",
      },
    ],
    openingTimes: [
      {
        day: "Monday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Tuesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Wednesday",
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Thursday",
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
          },
          {
            start: "09:30",
            end: "11:00",
          },
          {
            start: "11:00",
            end: "12:30",
          },
          {
            start: "12:30",
            end: "14:00",
          },
          {
            start: "18:00",
            end: "19:30",
          },
          {
            start: "19:30",
            end: "21:00",
          },
          {
            start: "21:00",
            end: "22:30",
          },
        ],
      },
      {
        day: "Friday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Saturday",
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
          },
          {
            start: "18:30",
            end: "20:00",
          },
          {
            start: "20:00",
            end: "21:30",
          },
          {
            start: "21:30",
            end: "23:00",
          },
          {
            start: "23:00",
            end: "01:00",
          },
        ],
      },
      {
        day: "Sunday",
        open: "closed",
        close: "closed",
      },
    ],
  },
];

export default restaurants;

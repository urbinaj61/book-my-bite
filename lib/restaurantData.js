const categories = [
  { cuisine: "Thai", type: "Casual Dining" },
  { cuisine: "Italian", type: "Brasserie" },
  { cuisine: "Chinese", type: "All you can eat" },
  { cuisine: "French", type: "Fine Dining" },
  { cuisine: "Korean", type: "Fast Casual" },
  { cuisine: "Vietnamese", type: "Fast Food" },
  { cuisine: "Ethiopian", type: "Bistro" },
  { cuisine: "Turkish", type: "Take out" },
  { cuisine: "Spanish", type: "Tapas Bar" },
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
    type: "Chinese",
    description:
      "This is a Chinese restaurant serving traditional Chinese delicacies",
    images: [{ imageUrl: "" }, { imageUrl: "" }],
    tableTypes: [
      {
        name: "Table 1",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 2",
        type: "square",
        seats: 2,
      },
      {
        name: "Table 3",
        type: "rectangle",
        seats: 4,
      },
      {
        name: "Table 4",
        type: "booth",
        seats: 3,
      },
      {
        name: "Table 5",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 6",
        type: "square",
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
        day: "monday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "tuesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "wednesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "thursday",
        available: true,
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
            booked: false,
          },
          {
            start: "09:30",
            end: "11:00",
            booked: false,
          },
          {
            start: "11:00",
            end: "12:30",
            booked: false,
          },
          {
            start: "12:30",
            end: "14:00",
            booked: false,
          },
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "friday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "saturday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "sunday",
        available: false,
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
    type: "Italian",
    description:
      "This is an Italian restaurant famous for it's traditional handmade pizzas and pastas",
    images: [{ imageUrl: "" }, { imageUrl: "" }],
    tableTypes: [
      {
        name: "Table 1",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 2",
        type: "square",
        seats: 2,
      },
      {
        name: "Table 3",
        type: "rectangle",
        seats: 4,
      },
      {
        name: "Table 4",
        type: "booth",
        seats: 3,
      },
      {
        name: "Table 5",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 6",
        type: "square",
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
        day: "monday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "tuesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "wednesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "thursday",
        available: true,
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
            booked: false,
          },
          {
            start: "09:30",
            end: "11:00",
            booked: false,
          },
          {
            start: "11:00",
            end: "12:30",
            booked: false,
          },
          {
            start: "12:30",
            end: "14:00",
            booked: false,
          },
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "friday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "saturday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "sunday",
        available: false,
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
    type: "Chinese",
    description:
      "This is a Thai restaurant. Sally's place stays true to classic Thai dishes",
    images: [{ imageUrl: "" }, { imageUrl: "" }],
    tableTypes: [
      {
        name: "Table 1",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 2",
        type: "square",
        seats: 2,
      },
      {
        name: "Table 3",
        type: "rectangle",
        seats: 4,
      },
      {
        name: "Table 4",
        type: "booth",
        seats: 3,
      },
      {
        name: "Table 5",
        type: "round",
        seats: 6,
      },
      {
        name: "Table 6",
        type: "square",
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
        day: "monday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "tuesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "wednesday",
        available: true,
        open: "18:00",
        close: "10:30",
        timeSlots: [
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "thursday",
        available: true,
        open: "08:00",
        close: "10:30",
        timeSlots: [
          {
            start: "08:00",
            end: "09:30",
            booked: false,
          },
          {
            start: "09:30",
            end: "11:00",
            booked: false,
          },
          {
            start: "11:00",
            end: "12:30",
            booked: false,
          },
          {
            start: "12:30",
            end: "14:00",
            booked: false,
          },
          {
            start: "18:00",
            end: "19:30",
            booked: false,
          },
          {
            start: "19:30",
            end: "21:00",
            booked: false,
          },
          {
            start: "21:00",
            end: "22:30",
            booked: false,
          },
        ],
      },
      {
        day: "friday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "saturday",
        available: true,
        open: "17:00",
        close: "01:00",
        timeSlots: [
          {
            start: "17:00",
            end: "18:30",
            booked: false,
          },
          {
            start: "18:30",
            end: "20:00",
            booked: false,
          },
          {
            start: "20:00",
            end: "21:30",
            booked: false,
          },
          {
            start: "21:30",
            end: "23:00",
            booked: false,
          },
          {
            start: "23:00",
            end: "01:00",
            booked: false,
          },
        ],
      },
      {
        day: "sunday",
        available: false,
        open: "closed",
        close: "closed",
      },
    ],
  },
];

export default restaurants;

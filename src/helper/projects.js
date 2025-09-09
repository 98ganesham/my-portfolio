import Hospital from "../assets/projectImages/healthbooker/full_pic.png";
import Ecommerce from "../assets/projectImages/eCommerce/hero_img.png";
import Gym from "../assets/projectImages/gym/HomePageGraphic.png";
import CarRental from "../assets/projectImages/carRental/car_rental_img.png";
export const projects = [
  {
    name: "Hospital Booker",
    image: Hospital,
    languages: ["JavaScript", "React", "Redux Toolkit", "Axios"],
    ui: "Chakra UI + React Icons + React Router + React Toast + Spinners",
    features: [
      "User registration and login",
      "Book and manage hospital appointments",
      "JWT-based authentication",
      "Role-based dashboards (Patient/Doctor)",
      "Real-time toast notifications",
    ],
    github: "https://github.com/98ganesham/HealthBooker",
  },
  {
    name: "E-Commerce Frontend",
    image: Ecommerce,
    languages: ["React", "Vite", "JavaScript", "TailwindCSS"],
    ui: "TailwindCSS + React Router + React Toastify",
    features: [
      "Product listing and category filtering",
      "Add to cart and checkout flow",
      "Toast-based notifications",
      "Clean and responsive UI",
      "Built using Vite for fast performance",
    ],
    github: "https://github.com/98ganesham/eCommerce-frontend",
  },
  {
    name: "Gym Website",
    image: Gym,
    languages: ["TypeScript", "React", "Vite"],
    ui: "TailwindCSS + Framer Motion + React Hook Form + Heroicons",
    features: [
      "Smooth scroll navigation",
      "Dark mode toggle",
      "Animated transitions",
      "Form validations with react-hook-form",
      "Mobile-responsive design",
    ],
    github: "https://github.com/98ganesham/Gym",
  },
  {
    name: "Car Rental Project",
    image: CarRental,
    languages: ["JavaScript", "React", "express"],
    tools: [
      "Axios",
      "Bcrypt",
      "Cors",
      "Express",
      "ImageKit",
      "JsongWebToken",
      "Mongoose",
      "Multer",
    ],
    ui: ["Tailwindcss", "React-Hot-Toast", "Motion"],
    features: [
      "User registration and login",
      "Book and manage Car Rent",
      "JWT-based authentication",
      "Role-based dashboards (user/owner)",
      "Real-time toast notifications",
    ],
    github: "https://github.com/98ganesham/Rent_Car-fullstack",
  },
];

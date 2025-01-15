type Booking = {
  id: number;
  name: string;
  service: string;
  phoneNumber: string;
  date: string;
  time: string;
  price: string;
  status: string;
  email: string;
};

type BookingData = {
  price: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phoneNumber: string;
};

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: File;
}

interface Services {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

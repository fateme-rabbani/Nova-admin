export interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  phone: string;
}

export interface CreateUserValues {
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  password: string;
  phone: string;
}

import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('11111111', 10),
    isAdmin: true,
  },
  {
    name: "Johnny Depp",
    email: "jhonnydepp@gmail.com",
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: "Brad Pit",
    email: "bradpit@gmail.com",
    password: bcrypt.hashSync('123456', 10)
  },
];

export default users;

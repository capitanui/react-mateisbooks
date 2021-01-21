import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@cartileluimatei.ro",
    password: bcrypt.hashSync("asdasd123", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "john@cartileluimatei.ro",
    password: bcrypt.hashSync("asdasd123", 10),
  },
  {
    name: "Jane doe",
    email: "jane@cartileluimatei.ro",
    password: bcrypt.hashSync("asdasd123", 10),
  },
];

export default users;

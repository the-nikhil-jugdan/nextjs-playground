import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers, createUser, verifyUserUnique } from "@/db/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const users = await getAllUsers();
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const userData = req.body;
    const userExists = !(await verifyUserUnique(userData));
    if (userExists) {
      res.status(400).json({
        email: "User with that email already exists",
      });
    } else {
      await createUser(userData);
      res.status(201).json({
        email: userData.email,
      });
    }
  }
}

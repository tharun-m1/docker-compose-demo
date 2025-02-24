import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json({
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    await prismaClient.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    res.json({
      message: "user created",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});

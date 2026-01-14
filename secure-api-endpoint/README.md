# Secure API Endpoint (Node.js + Express + MongoDB)

A secure REST API built with **Node.js, Express, and MongoDB** that allows you to **store and retrieve user data** with proper validation.

---

## Project Description

This project provides a **secure POST endpoint** to save users with **email** and **password**, validating:

- Email presence and format
- Password presence and minimum length (8 characters)
- Unique email (no duplicates in the database)

It also provides a **GET endpoint** to retrieve all users.

The project is structured using **MVC pattern**:

- **Models** → Data schema (`userModel.js`)
- **Controllers** → Business logic (`userController.js`)
- **Routes** → API endpoints (`userRoutes.js`)
- **Config** → MongoDB connection (`db.js`)
- **App entry** → Server initialization (`app.js`)

---

## Project Structure

**put this in .env file**
*MONGOO_DB=mongodb+srv://Mag:mohammed26122003@mohammed.kxps2xh.mongodb.net/secureApiEndpoint <= mongoo-db url*
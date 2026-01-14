# Task Management – Mongoose Schema Design

This project demonstrates the database schema design for a simple **Task Management** application using **MongoDB** and **Mongoose**.

The implementation focuses only on:
- Defining the required schemas
- Providing a sample database query

As requested, no controllers or routes are included.

---

## 📌 Requirements Covered

A **Task** must have:
- `title` (String, required)
- `description` (String)
- `status` (Enum: Pending, In-Progress, Completed)
- `creator` (Reference to a User)

---

## 🗂 Project Structure


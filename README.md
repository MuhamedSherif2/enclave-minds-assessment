# Enclave Minds – MERN Internship Technical Assessment

This repository contains solutions for the Enclave Minds technical assessment, covering practical tasks across the MERN stack.

## Projects Overview

1. **frontend-search-filter/**
   - Dynamic search filter built with React.
   - Fetches users from an external API and filters by name or email in real time.

2. **secure-api-endpoint/**
   - Express.js POST endpoint with email and password validation.
   - Returns proper HTTP status codes with clear error messages.

3. **task-management-schema/**
   - Mongoose schema for a task management system.
   - Includes task status enum and a user reference.
   - Provides a sample query for fetching completed tasks per user.

4. **jwt-auth-flow/**
   - JWT authentication middleware for Express.
   - Frontend example attaching Bearer token from localStorage to requests.

5. **multi-step-registration-form/**
   - Two-step React registration form using Context API.
   - Preserves form state between steps and logs final data on submission.

6. **global-error-handling/**
   - Centralized Express middleware for handling 404 and 500 errors.
   - Returns structured JSON error responses with timestamps.

7. **orders-aggregation-pipeline/**
   - MongoDB aggregation pipeline to calculate total revenue per category.
   - Filters orders where quantity sold is greater than 5.

Each folder contains a dedicated README with setup and usage instructions.

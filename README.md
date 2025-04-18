# Cafe Management System

This project is a microservices-based cafe management system built using Node.js. It consists of six services that work together to manage various aspects of a cafe, including menu management, order processing, inventory tracking, customer management, and payment processing. The services communicate with each other and with a MongoDB database.

## Services Overview

- **API Gateway**: Acts as the entry point for all client requests and routes them to the appropriate microservice.
- **Menu Service**: Manages the cafe's menu items, including adding, updating, and deleting menu items.
- **Order Service**: Handles customer orders, including order creation, updates, and retrieval.
- **Inventory Service**: Tracks inventory levels and manages stock for menu items.
- **Customer Service**: Manages customer information and interactions.
- **Payment Service**: Processes payments for orders and manages payment-related operations.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cafe-management-system
   ```

2. Build and run the services using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the API Gateway at `http://localhost:3000`.

4. Access the MongoDB GUI (mongo-express) at `http://localhost:8081`.

### Directory Structure

```
cafe-management-system
├── api-gateway
├── menu-service
├── order-service
├── inventory-service
├── customer-service
├── payment-service
├── docker-compose.yml
└── .github
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
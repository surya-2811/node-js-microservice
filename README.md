# 📘 Node.js Microservices Backend — Production-Grade Learning Project

## 🚀 Overview
This project is a production-grade microservices backend system built using Node.js. It simulates real-world scalable backend architecture used in fintech, SaaS, and social platforms.

---

## 🧱 Architecture
Client → API Gateway → Microservices → RabbitMQ → Async Services

---

## 🧩 Services

### API Gateway
- Routing
- Rate limiting
- API versioning
- Security headers

### Auth Service
- JWT auth
- Refresh tokens
- Redis blacklist

### Post Service
- CRUD
- File upload
- Redis caching
- Event publishing

### Search Service
- Elasticsearch indexing
- RabbitMQ consumer

---

## ⚙️ Tech Stack

- Node.js, Express.js
- MongoDB, Redis
- RabbitMQ
- Elasticsearch
- Docker
- Winston, Prometheus, Grafana
- Jest, Supertest

---

## 🔐 Security
- Helmet
- Rate limiting
- JWT
- RBAC
- Joi validation
- Mongo sanitize

---

## 🔄 Key Concepts
- Caching (Redis)
- Idempotency
- Circuit Breaker
- Retry strategy
- Dead Letter Queue
- Correlation ID
- Graceful shutdown

---

## 🧪 Testing
- Unit (Jest)
- Integration (Supertest)

---

## 📊 Observability
- Logging (Winston)
- Metrics (Prometheus)
- Tracing (OpenTelemetry)

---

## 📄 API Docs
- Swagger / OpenAPI

---

## 🐳 Deployment
- Docker Compose

---

## 📁 Structure
/api-gateway
/auth-service
/post-service
/search-service
/shared

---

## 🎯 Goal
Master backend + microservices + system design.

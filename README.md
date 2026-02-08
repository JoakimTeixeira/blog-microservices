# Blog Microservices

Implementation and analysis of microservices trade-offs

## Traditional approach: Monolith

Ideal for small to medium teams working on single business domain, early-stage products, limited DevOps resources, or predictable traffic patterns that prioritize fast delivery over distributed scalability

<img width="991" height="auto" alt="traditional monolith architecture" src="./assets/1. monolith architecture.png"/>

### Pros

- **Deployment simplicity:** Everything bundled as one unit
- **Development efficiency:** One codebase speeds up local debugging and simplifies setup
- **Lower latency:** In-process calls avoid network delays, serialization, and retries
- **Database consistency:** One ACID database eliminates distributed transactions
- **Infrastructure simplicity:** Fewer services reduce DevOps complexity and simplify CI/CD
- **Testing/monitoring ease:** No need to track requests across multiple services or create API contract tests
- **Efficiency at small-medium scale:** Less processing, network, and infrastructure overhead (no extra services)

### Cons

- **Scaling limitations:** Must scale the entire application even when only certain parts are under heavy load
- **Blast radius issues:** Deployments and rollbacks affect the entire system
- **Slower releases:** More coordination, longer build and test cycles as organization grows
- **Zero-downtime complexity:** Requires rolling deployments, blue-green, or canary releases
- **Coupling tendency:** Higher maintenance cost and harder refactors over time (mitigated by modular design)
- **Single-process failure risk:** Needs health checks, automatic restarts, and load balancer instances

## Microservices Approach #1: Sync Communication

<img width="1075" height="auto" alt="sync microservices architecture" src="./assets/2. sync microservices architecture.png" />

## Microservices Approach #2: Async Communication

<img width="1071" height="auto" alt="async microservices architecture" src="./assets/3. async microservices architecture.png"/>

## Microservices Approach #3: Orchestrated Async Communication

<img width="1581" height="auto" alt="async microservices architecture orchestrated" src="./assets/4. async microservices architecture orchestrated.png" />

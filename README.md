# Blog Microservices

Implementation and analysis of microservices trade-offs

## Traditional approach: Monolith

Best suited for smaller teams/projects needing fast delivery and simplicity over distributed scalability

<img width="991" height="auto" alt="traditional monolith architecture" src="./assets/1. monolith architecture.png"/>

### Pros:

- Easier to deploy as a single codebase
- Faster intercommunication between modules
- Simpler to maintain transactional data consistency
- Lower overall computational and infrastructure costs

### Cons:

- Harder to scale or isolate specific modules
- Riskier deployments due to shared dependencies
- Harder to adopt new technologies due to tight integration
- More prone to full-system outages from a single failure
- Cumbersome to manage a growing codebase and release cycles

## Microservices Approach #1: Sync Communication

<img width="1075" height="auto" alt="sync microservices architecture" src="./assets/2. sync microservices architecture.png" />

## Microservices Approach #2: Async Communication

<img width="1071" height="auto" alt="async microservices architecture" src="./assets/3. async microservices architecture.png"/>

## Microservices Approach #3: Orchestrated Async Communication

<img width="1581" height="auto" alt="async microservices architecture orchestrated" src="./assets/4. async microservices architecture orchestrated.png" />

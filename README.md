# Blog Microservices

Implementation and analysis of microservices trade-offs

## Traditional approach: Monolith

Best suited for smaller teams/projects needing fast delivery and simplicity over distributed scalability

<img width="991" height="398" alt="monolith architecture" src="https://github.com/user-attachments/assets/bd6eebc0-65be-40d9-a2a2-4c25368eb8fd" />

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

<img width="1075" height="460" alt="sync microservices architecture" src="https://github.com/user-attachments/assets/30c1fe9d-882e-43ed-8b3e-ec3b922d30a9" />

## Microservices Approach #2: Async Communication

<img width="1071" height="989" alt="async microservices architecture" src="https://github.com/user-attachments/assets/16b7187b-1e7c-4304-bc1c-6982c285c880" />

## Microservices Approach #3: Orchestrated Async Communication

<img width="1581" height="1361" alt="async microservices architecture orchestrated" src="https://github.com/user-attachments/assets/b06877b8-6f3b-4eb5-b811-d78c720f861d" />

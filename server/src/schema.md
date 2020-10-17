# Database

User
- _id: ObjectID
- name: String!
- username: String!
- password: String!
- email: String!
- pantries: [ObjectID] -> pantry
- createdAt: String
- updatedAt: String

Pantry
- _id: ObjectID
- owner: [ObjectID] -> user
- name: String!
- contents: ObjectID -> contents
- createdAt: String
- updatedAt: String

Contents
- _id: ObjectID
- pantry: ObjectID! -> pantry
- name: String!
- count: Number
- createdAt: String
- updatedAt: String
# GRASP

| GRASP — **G**eneral **R**esponsibly **A**ssignment **S**oftware **P**atterns
| These are the main templates for duties distribution in Software
| GRASP consists of 9 templates:

- **Creator**
- **Controller**
- **Pure Fabrication**
- **Information Expert**
- **High Cohesion**
- **Indirection**
- **Low Coupling**
- **Polymorphism**
- **Protected Variations**

## Creator

| We have some conditions for correct object creation. **"A"** object can create **"B"** object by next conditions:

- **"A"** object contains or agregates objects **"B"**
- **"A"** object actively uses **"B"** object
- **"A"** object has **"B"** object initialization data

## Information Expert 

| The main point of this pattern — **provides object information**

| The secondary point is to divide **the roles and rights**

## Controller 

| This is the pattern from **MVC architecture**

## Low Coupling

| This pattern is responsible for **low coupling between entities**

| It helps to avoid some problems:
     
- Local changes should be made during changes in linked classes
- Hard understanding each class and require all linked classes research
- Reusage is impossible due to all system coupling

## High Cohesion

| One entity should be responsible for only 1 task

## Pure Fabrication

| This pattern ensures that our project has **Low Coupling and High Cohesion**

| Almost all **Facade** — Pure Fabrication

## Polymorphism

| Just like polymorphism in **OOP principles**

## Indirection

| Always should exist the **intermediary entity**

| Each object **should be called by intermediary entity**

## Protected variations

| This is **a target**, not a pattern

| We will achieve this target **only if we comply other patterns**



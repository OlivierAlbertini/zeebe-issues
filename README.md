# Minimal Reproducer

## The issue

workflow:

![](img/workflow1.png)

### Current behaviour

If message has not been correlated, it's a success. We use the `publishStartMessage` method but `publishMessage` has the same behaviour.

### Expected behaviour

If message has not been correlated, it should throw an exception because the message should be correlated at least to one bpmn.

## How to run

1. Install dependencies:
```bash
npm i
```
2. run latest Zeebe version 
```bash
docker/run
```
3. Deploy process, create one job and bind worker:
```bash
npm start
```

## Version

- zeebe_broker: 0.18.0
- zeebe_node: 2.3.0
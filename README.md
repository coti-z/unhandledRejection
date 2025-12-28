# Reproduction: Unhandled Promise Rejection in forwardRef with REQUEST scope

## Reproduce

```bash
npm install
npm run start:dev
curl http://localhost:3000/
```

## Result

```
aService: AService {}
serviceB: undefined
checking B: undefined
(node:XXXX) UnhandledPromiseRejectionWarning: Error: BService initialization failed
    at async Injector.resolveComponentHost (...)
```

- BService throws in constructor
- AService receives `undefined` (not an error)
- Request returns `ok` instead of failing

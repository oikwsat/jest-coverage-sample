# Jest Sample

## install

```
yarn
```

## run test

```sh
yarn test

$ jest
 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.374 s
Ran all test suites.
✨  Done in 1.37s.
```

## run coverage

```sh
yarn coverage

$ jest --coverage
 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 sum.js   |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.443 s, estimated 1 s
Ran all test suites.
✨  Done in 1.47s.
```

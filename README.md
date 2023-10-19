First element matching a boolean condition:

```ts
const Component = () => (
  <section>
    <header></header>
    <nav>
      {choose(
        [test === "blue", <BlueButton />],
        [test === "green", <GreenButton />],
        [true, <Button />],
      )}
    </nav>
  </section>
)
```

## Why?

Because `if` statement is a statement, but here we expect an expression.

## Alternatives

### Self-invoking function

```jsx
<div>
  {(() => {
    switch (test) {
      case "blue":
        return <BlueButton />
      case "green":
        return <GreenButton />
      default:
        return <Button />
    }
  })()}
</div>
```

### Pattern matching

Based on [TC39 proposal](https://github.com/tc39/proposal-pattern-matching) or [ts-pattern](https://github.com/gvergnaud/ts-pattern):

```js
match (test) {
  when ("blue"): <BlueButton />
  when ("green"): <GreenButton />
  default: <Button />
}
```

### Modern way

Use languages in which `if` and `switch` are expressions, e.g. [Civet](https://github.com/DanielXMoore/Civet).

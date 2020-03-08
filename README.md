# test-site

## Assignment

Create an E2E testing setup that does the following 2 tests:

### Test if filter works:

- Adjust filters: look for a booking between €30 and €60 per person.
- Assert that the correct booking is left in the overview

### Test booking flow:

- Click "book now" on a booking
- Enter a number of people greater than 0
- Check "Agree to terms and conditions"
- Click "Book this"
- Assert you end up on the confirmation page.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

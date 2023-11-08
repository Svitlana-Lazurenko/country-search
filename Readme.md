# Country Search

Web-app for searching countries and viewing info about it. Team project.

## API REST COUNTRIES

Web-app uses [[REST COUNTRIES]](https://restcountries.com/).

## Routes

The application uses the following routes:

- `'/'` - component `<Home>`, Home page with a list of European countries.
- `'/country'` - component `<CountrySearch>`, CountrySearch page by region.
- `'/country/:countryId'` - component `<Country>`, page with detailed
   information about the country.

If a user enters a route that does not exist, he is redirected to the home page.

## Navigation

The application has a ``Back'' button, as well as redirect when the country is entered incorrectly.

## Technologies

- JavaScript
- React
- React router
- Emotion
- Axios

## Contributors

- Svitlana-Lazurenko
- AleksanderMukhin

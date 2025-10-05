# Environments

## List of available environments and possible values.

## APP_KEY
::: danger   
this is very important, you need to generate a new key from [here](https://laravel-encryption-key-generator.vercel.app/)
:::

```dotenv
APP_KEY=
```

## DB_CONNECTION
By Default the value is `sqlite` if you are planning to use `MySQL` then you need to pass the following
```dotenv
DB_CONNECTION=mysql
DB_HOST=host
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=username
DB_PASSWORD=password
```

## Crons
if you like to customize the crons running, you can use the following options
:::tip
by default the crons will run every 5 minutes
:::

```dotenv
CRON='*/5 * * * *'
```

## App and Asset url
you need to update those depending on your configuration and how the app is accessed
```dotenv
APP_URL="http://localhost:8080"
ASSET_URL="http://localhost:8080"
```

## Change the theme color
by default it's `Stone`
```dotenv
THEME_COLOR="Stone"
```
but here's a list of all available colors

| {#remove_header} |        |        |         | 
|------------------|:------:|:------:|:-------:|
| Slate            |  Gray  |  Zinc  | Neutral |
| Stone            |  Red   | Orange |  Amber  |
| Yellow           |  Lime  | Green  | Emerald |
| Teal             |  Cyan  |  Sky   |  Blue   |
| Indigo           | Violet | Purple | Fuchsia |
| Pink             |  Rose  |        |         |

## Add Currency Exchange
you can get a key from [Exchange Rate] (https://www.exchangerate-api.com/)

```dotenv
EXCHANGE_RATE_API_KEY="http://localhost:8080"
```

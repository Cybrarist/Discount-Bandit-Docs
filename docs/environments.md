# Environments

## List of available environments and possible values.

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


## Ntfy 
you can go to [Ntfy](https://ntfy.sh/), subscribe to random topic and copy it the channel key
```dotenv
NTFY_CHANNEL_ID="discount-bandit"
```
if you are using custom notification server, then you need to add a base url (available from v3.2)
```dotenv
NTFY_BASE_URL="http://ip/"
```

## Telegram
if you are planning to use telegram for notification, then you can use the following
```dotenv
TELEGRAM_BOT_TOKEN= ""
TELEGRAM_CHANNEL_ID= ""
```

## Authentication
Here are the default user credentials that you can change
```dotenv
  DEFAULT_USER= "test"
  DEFAULT_EMAIL= "docker@test.com"
  DEFAULT_PASSWORD= "thisismypassword"
```
## RSS Feed 
if you enabled RSS, the page will be available in http://example.com/feed
```dotenv
  RSS_FEED: 1
```
## Top Navigation
```dotenv
TOP_NAVIGATION=1
```
## Remove Top Bar ( if you didn't enable top navigation)
```dotenv
DISABLE_TOP_BAR=1
```
## Enable SPA (the page changes content without reloading the whole page)
```dotenv
SPA=1
```
## Disable Authentication
if you are running the app locally or behind a firewall, you can remove the authentication completely
```dotenv
DISABLE_AUTH=1
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
THEME_COLOR= "Stone"
```
but here's a list of all available colors

| {#remove_header} |          |         |              | 
|-----------------|:--------:|:-------:|:------------:|
| Slate          |  Gray   | Zinc | Neutral |
| Stone          |  Red  |   Orange   |     Amber     |
| Yellow            | Lime | Green  |     Emerald     |
| Teal    | Cyan | Sky  |   Blue    |
| Indigo    | Violet | Purple  |   Fuchsia    |
| Pink    | Rose |   |       |

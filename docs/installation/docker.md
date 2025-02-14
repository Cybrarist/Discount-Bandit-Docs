# Linux / MAC / Windows Installation

## Requirements

- [Docker](https://www.docker.com/)

## How To Install
    
pull the image you want from docker repository [Discount Bandit](https://hub.docker.com/r/cybrarist/discount-bandit)

```
docker pull image_name
```

run the image with the env variables that are needed

```shell
docker run -d \
  -p 8080:80 \
  -v ./database/database.sqlite:/app/database/database.sqlite \
  -v ./.env:/app/.env \
  -v ./logs:/logs \
  -e DB_CONNECTION=sqlite \
  -e NTFY_CHANNEL_ID="" \
  -e NTFY_BASE_URL="https://ntfy.sh" \
  -e TELEGRAM_BOT_TOKEN="" \
  -e TELEGRAM_CHANNEL_ID="" \
  -e DEFAULT_USER="test" \
  -e DEFAULT_EMAIL="docker@test.com" \
  -e DEFAULT_PASSWORD="thisismypassword" \
  -e APPRISE_URL="" \
  -e APP_TIMEZONE=UTC \
  -e RSS_FEED=1 \
  -e TOP_NAVIGATION=0 \
  -e DISABLE_TOP_BAR=0 \
  -e BREADCRUMBS=1 \
  -e SPA=1 \
  -e DISABLE_AUTH=1 \
  -e THEME_COLOR=Stone \
  -e APP_URL="http://localhost:8080" \
  -e ASSET_URL="http://localhost:8080" \
  cybrarist/discount-bandit:latest
```
::: warning
Please refer to [Environments](/environments) to get a list of available options.
:::
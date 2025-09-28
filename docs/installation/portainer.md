# Linux / MAC / Windows Installation

## Requirements

- [Portainer](https://hub.docker.com/r/portainer/portainer-ce)
- [Docker](https://www.docker.com/)

## How To Install

### Method 1: Pull the image directly
you can pull the image directly in portainer

![Portainer add image](/images/portainer_add.png)

then you need to map the port

![Portainer add image](/images/portainer_port.png)

After that you can fill the environments with the values needed.

::: warning
Please refer to [Environments](/installation/environments) to get a list of available options.
:::

Finally, you can deploy and it should be running on port 8080 (per image)

### Method2: Use Docker Compose To Build Stack

Go to [Github](https://github.com/Cybrarist/Discount-Bandit) and check [docker-compose](https://github.com/Cybrarist/Discount-Bandit/blob/master/docker-compose.yaml) file.

Copy the content of docker-compose file

::: warning
you need to add the image name, and you can remove the volumes if not required.
:::

the updated docker compose file should look like the following
```yaml
s
networks:
  discount-bandit:
    driver: bridge

volumes:
  discount-bandit:
  discount-bandit-logs:

services:
  discount-bandit:
    image: cybrarist/discount-bandit:v4
    #    build:
    #      context: . 
    ports:
      - 8080:80
    networks:
      - discount-bandit
    volumes:
      - ./database/database.sqlite:/app/database/sqlite
      - ./logs:/logs
    environment:
      DB_CONNECTION: sqlite
      APP_TIMEZONE: UTC
      THEME_COLOR: Red
      APP_URL: "http://localhost:8080"
      ASSET_URL: "http://localhost:8080"
      EXCHANGE_RATE_API_KEY:
      CRON: "*/5 * * * *"

```

Choose "Web Editor" option and paste the content of the file

![Available Options](/images/web-editor.png)
![Available Options](/images/web-editor.png)

Change the values of the environment variable to anything you want.

::: warning
Please refer to [Environments](/installation/environments) to get a list of available options.
:::

Deploy the Stack.

Go To "Containers" and you should be able to find the following

![Available Options](/images/containers.png)

::: warning
you won't see mysql image if you choose sqlite
:::

::: tip
The website will be available on port 8080 by default.

then you can setup the admin account.
:::

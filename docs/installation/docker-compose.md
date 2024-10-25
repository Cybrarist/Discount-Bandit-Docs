# Linux / MAC / Windows Installation

## Requirements

- [Docker](https://www.docker.com/)

## How To Install

you can download the [docker-compose](https://github.com/Cybrarist/Discount-Bandit/blob/master/docker-compose.yaml) file.

then you can change the values inside the file as needed, if you already cloned the code you can keep 
```yaml
  build:
    context: .
```
otherwise you need ro remove the above and add the image needed.

## Volumes
you need to create the volumes in your host machine first, otherwise docker will create them as directories 
and you won't be able to keep them if you re-pulled the image.

::: warning
Please refer to [Environments](/environments) to get a list of available options.
:::

::: tip
The website will be available on port 8080 by default.

The default user username
```docker@test.com```

The default password
```thisismypassword```

:::

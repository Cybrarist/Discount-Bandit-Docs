# التثبيت على Linux / Mac / Windows

## المتطلبات

- [Docker](https://www.docker.com/)

## طريقة التثبيت

قم أولًا بسحب الصورة التي تريدها من مستودع Docker الخاص بـ [Discount Bandit](https://hub.docker.com/r/cybrarist/discount-bandit).

```bash
docker pull cybrarist/discount-bandit:v4
```

بعدها شغّل الصورة مع متغيرات البيئة المطلوبة:

```shell
docker run -d \
  -p 8080:80 \
  -v ./database/database.sqlite:/app/database/sqlite \
  -v ./logs:/logs \
  -e DB_CONNECTION=sqlite \
  -e APP_TIMEZONE=UTC \
  -e THEME_COLOR=Red \
  -e APP_URL="http://localhost:8080" \
  -e ASSET_URL="http://localhost:8080" \
  -e EXCHANGE_RATE_API_KEY="" \
  cybrarist/discount-bandit:v4
```

::: warning
راجع صفحة [البيئات](/ar/installation/environments) للاطلاع على جميع الخيارات المتاحة.
:::

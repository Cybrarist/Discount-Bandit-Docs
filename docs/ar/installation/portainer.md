# التثبيت على Linux / Mac / Windows

## المتطلبات

- [Portainer](https://hub.docker.com/r/portainer/portainer-ce)
- [Docker](https://www.docker.com/)

## طريقة التثبيت

### الطريقة الأولى: تنزيل الملف مباشرة

يمكنك تنزيل الملف مباشرة من داخل Portainer.

![Portainer add image](/images/portainer_add.png)

بعدها ستحتاج إلى ربط منفذ الشبكة.

![Portainer add image](/images/portainer_port.png)

بعد ذلك، يمكنك تعبئة متغيرات البيئة بالقيم التي تحتاجها.

::: warning
راجع صفحة [البيئات](/ar/installation/environments) للاطلاع على جميع الخيارات المتاحة.
:::

وفي النهاية، قم بعملية النشر، ومن المفترض أن يعمل التطبيق على المنفذ `8080` بحسب إعداد الصورة.

### الطريقة الثانية: استخدام Docker Compose لبناء Stack

اذهب إلى [GitHub](https://github.com/Cybrarist/Discount-Bandit) واطّلع على ملف [docker-compose](https://github.com/Cybrarist/Discount-Bandit/blob/master/docker-compose.yaml).

انسخ محتوى ملف `docker-compose`.

::: warning
تحتاج إلى إضافة اسم الصورة، ويمكنك حذف `volumes` إذا لم تكن بحاجة إليها.
:::

يجب أن يصبح ملف Docker Compose المعدّل مشابهًا لما يلي:

```yaml
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

اختر خيار `Web Editor` ثم الصق محتوى الملف.

![Available Options](/images/web-editor.png)
![Available Options](/images/web-editor.png)

بعدها غيّر قيم متغيرات البيئة كما يناسب إعدادك.

::: warning
راجع صفحة [البيئات](/ar/installation/environments) للاطلاع على جميع الخيارات المتاحة.
:::

قم بعدها بنشر الـ Stack.

ثم اذهب إلى قسم `Containers`، ويُفترض أن ترى الحاوية هناك.

![Available Options](/images/containers.png)

::: warning
لن ترى صورة MySQL إذا اخترت استخدام SQLite.
:::

::: tip
الموقع سيكون متاحًا على المنفذ `8080` بشكل افتراضي.

بعدها يمكنك إعداد حساب المدير.
:::

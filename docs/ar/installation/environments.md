# البيئات

## قائمة بمتغيرات البيئة المتاحة والقيم الممكنة لها

## APP_KEY

::: danger
هذا المتغير مهم جدًا. يجب عليك إنشاء مفتاح جديد من [هنا](https://laravel-encryption-key-generator.vercel.app/).
:::

```dotenv
APP_KEY=
```

## DB_CONNECTION

القيمة الافتراضية هي `sqlite`. وإذا كنت تنوي استخدام `MySQL`، فعليك تمرير القيم التالية:

```dotenv
DB_CONNECTION=mysql
DB_HOST=host
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=username
DB_PASSWORD=password
```

## Crons

إذا كنت تريد تخصيص مواعيد تشغيل مهام `Cron`، يمكنك استخدام الخيار التالي:

::: tip
بشكل افتراضي، يتم تشغيل مهام `Cron` كل 5 دقائق.
:::

```dotenv
CRON='*/5 * * * *'
```

## App URL و Asset URL

تحتاج إلى تحديث هاتين القيمتين بحسب إعدادك والطريقة التي يتم من خلالها الوصول إلى التطبيق:

```dotenv
APP_URL="http://localhost:8080"
ASSET_URL="http://localhost:8080"
```

## تغيير لون الواجهة

اللون الافتراضي هو `Stone`.

```dotenv
THEME_COLOR="Stone"
```

وهذه قائمة بجميع الألوان المتاحة:

| {#remove_header} |        |        |         |
|------------------|:------:|:------:|:-------:|
| Slate            |  Gray  |  Zinc  | Neutral |
| Stone            |  Red   | Orange |  Amber  |
| Yellow           |  Lime  | Green  | Emerald |
| Teal             |  Cyan  |  Sky   |  Blue   |
| Indigo           | Violet | Purple | Fuchsia |
| Pink             |  Rose  |        |         |

## إضافة تحويل العملات

يمكنك الحصول على مفتاح من [Exchange Rate](https://www.exchangerate-api.com/).

```dotenv
EXCHANGE_RATE_API_KEY="http://localhost:8080"
```

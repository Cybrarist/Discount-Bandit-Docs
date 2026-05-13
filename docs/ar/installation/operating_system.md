# التثبيت على Linux / Mac / Windows

## المتطلبات

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Apache](https://httpd.apache.org/) أو [Nginx](https://www.nginx.com/)
- [MySQL](https://www.mysql.com/)
- SQLite (افتراضيًا)

::: tip
إذا لم تكن ترغب في تثبيت خادم ويب، يمكنك تشغيل `php artisan serv`.
:::

## طريقة التثبيت

اذهب إلى [GitHub](https://github.com/Cybrarist/Discount-Bandit)، ثم انسخ المستودع إلى جهازك وضعه في المجلد الذي يناسبك.

بعد ذلك، شغّل أمر تثبيت الحزم باستخدام Composer من داخل المجلد:

```bash
composer install
```

ثم شغّل الأمر التالي واتبع التعليمات التي ستظهر لك:

```bash
php artisan discount:install
```

ولا تنسَ تجهيز مهام `Cron` أو إبقاء الطرفية قيد التشغيل، حسب الطريقة التي اخترتها لتشغيل التطبيق.

::: warning
إذا فشل الأمر السابق، احذف ملف `.env` ثم أصلح المشكلة وجرّب مرة ثانية.
:::

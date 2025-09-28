# Linux / MAC / Windows Installation

## Requirements

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Apache](https://httpd.apache.org/) / [Nginx](https://www.nginx.com/)
- [MySQL](https://www.mysql.com/)

::: warning  
You can run `php artisan serv` if you don't want to install a webserver
:::

## How To Install

Go to [Github](https://github.com/Cybrarist/Discount-Bandit) and download / clone the repository and extract it in your desired folder.

Run Composer Install inside the folder.
``` 
composer install 
```
then run the following command and follow the prompts
```
php artisan discount:install
```
and don't forget to prepare the Crons / terminal depending on the method chosen.


::: warning
if the previous command has failed.
please remove .env and try again after you fix the error.
:::
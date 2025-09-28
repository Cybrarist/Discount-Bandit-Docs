# Contribution


::: warning
if you want to implement a new feature or new store, please reach out first,
as i or someone else might be working on it already.
:::


## Add New Store

Few things to know before starting: 

- Verifying products uniqueness and stores availability along with creating queues for the new store are managed by the software.
- All crawled pages have an instance of DomDocument and SimpleXMLElement variables ( check all available variables inside StoreTemplate.php).
- All data crawled MUST be assigned to the corresponding variable and not returned by the function.
- Use logging for each step of crawling, so it's easier to trace the error (check Amazon.php for example)
- Typically, you won't need to edit The steps in red, but feel free if you were facing a specific settings of that store.

![discount-process.svg](/images/discount-process.svg)

### Steps:

#### Add The New Store to The Seeder
go to ```database/seeders/StoreSeeder.php``` and append your store in the following format

```php
[
    'name' => 'New Store',
    'domain' => 'newstore.com',
    'image' => 'newstore_com.png',
    'currency_id' => Currency::firstOrCreate(['code' => '$'])->id,
    'slug' => 'newstore_com',
],
```
::: info
you can check other examples that are available in the same file.
:::

once you are finished adding the store, you need to run the following command

```shell
php artisan db:seed
```

and the store should be added to the database.

#### create Store Class

next step is to create a new class that responsible for the store you 
want to add.

go to ```app/Helpers/StoresAvailable``` and copy ```Amazon.php``` or create new class with the following basic template.

```php
<?php

namespace App\Helpers\StoresAvailable;


class Newstore extends StoreTemplate
{

    public function __construct(int $product_store_id)
    {
        parent::__construct($product_store_id);
    }
    
    public function crawler(): void {}
    
    public function prepare_sections_to_crawl(): void {}
    
    public static function prepare_url($domain, $product, $store = null): string {}
    
    public function is_system_detected_as_robot(): bool{}
    
    public function get_name() {}
    
    public function get_image() {}    

    public function get_price() {}
    
    public function get_used_price() {}
    
    public function get_stock() {}
    
    public function get_no_of_rates() {}
    
    public function get_rate() {}
    
    public function get_seller() {}
    
    public function get_shipping_price(){}
    
    public function get_condition () {}
```

#### Decide Which Crawler to use

you can either have a basic curl or chrome based crawler.

```php
public function crawler(): void {
    //choose one
    parent::crawl_url(extra_headers: [])
    parent::crawl_url_chrome(extra_headers : [])
}
```

#### Check The Crawled Page and Prepare it

in the following function, you can check if your crawl has been detected by robot and what actions to take
if it was. Also, you can filter out specific sections to enhance the crawling or filter out unwanted sections that might conflict with your xpaths mainly.

a basic code would look like this

```php
public function prepare_sections_to_crawl(): void
    {
        if (! $this->is_system_detected_as_robot()) {
            try {
            
                return;
            } catch (Throwable $exception) {
                $this->log_error("Page Structure", $exception->getMessage());
            }

        } else {
            Log::warning("System was detected as bot, but we're continuing to try to get the price at least");
            try {
                $this->get_other_options();
                
            } catch (Throwable $exception) {
                $this->log_error("Page Structure Second", $exception->getMessage());
            }
        }

    }
```

#### Code the Crawling methods to get the data
now you can code how to get the name, image, price ...etc.

## Add Verification for the new store

Go to ```app/Helpers/URLHelper.php``` and create new function with the following format:
```get_domain_key```, so if your store is www.newstore.com, then the function would be ```get_newstore_key```

in this function you need to return the unique key of the product for that store. feel free to check other available examples in the same file.

Then start testing to see if all data is being processed and create a PR of the new store.

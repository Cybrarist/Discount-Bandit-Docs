# Features

## Stores Supported


| {#remove_header} |               |            |                          | 
|------------------|:-------------:|:----------:|:------------------------:|
| Ajio             |  Aliexpress   |   Amazon   |          Argos           | 
| BestBuy          | Canadian Tire |   Costco   |          Currys          |
| DIY              |     Ebay      |    Emax    |          EPrice          |
| FlipKart         |     FNAC      | Home Depot |       Media Markt        |
| Microless        |    Myntra     |  New Egg   | Next Hardware & Software |
| Noon             |     Nykaa     |  Otaku ME  |      Princess Auto       |
| Snapdeal         |    Target     | Tata Cliq  |         Walmart          |


And you can add unlimited custom stores, just paste a product url and the system will fetch it's information.
if it requires extra steps then it must be done manually, and feel free to open a PR for it.

## Track Products Across Multiple Stores.

With Discount Bandit, You can track the prices of your products across multiple stores at the same time to understand the trend of the product and when is the right time to buy.

## Get Notified

With [Ntfy](https://ntfy.sh), [Telegram](https://web.telegram.org) and  [Gotify](https://gotify.net/)  you will be able to receive notifications depending on the criteria that you set for each product.

### Available Rules

![Available Options](/images/website/available_options.png)
* Price Desired
* Percentage Drop
* Product is the lowest within X days
* Official Sellers only
* Stock Available
* Any price change up/down

### Multiple notifications per link
you can set multiple notification settings for each link, this will allow you to calculate extra costs, shipping, prices if seller is official or not.

### Multi-User Support
when you spin up the app for the first time, you will create an admin account. this account can create multiple users later on with each user managing his own products, links and notifications.

you can also set maximum links allowed per user to add. 

### Currency Conversion
if you set a default currency for your user from the settings, the application will consider all prices to be in that currency.
this requires an API key that you can see in [environment](/installation/environments)
# Available ENV / Customization

## Track Products Across Multiple Stores.

With Discount Bandit, You can track the prices of your products across multiple stores at the same time to understand the trend of the product and when is the right time to buy.

## Get Notified

With [Ntfy](https://ntfy.sh) you will be able to receive notifications depending on the criteria that you set for each product.

### Available Criteria
![Available Options](/public/website/available_options.png)
* Only Official Sellers
* Stock Availability
* If Product is the lowest within X days
* Multiple Stores with multiple currencies

## Build Your Groups

Groups are a way to check if multiple products have reached together a specified price.

#### Example:
Think of it as you are building a PC with a budget of 700$, so you have the following options.

| Product Name | Key | current crawled price |
|--------------|:---:|:---------------------:|
| Intel i7     | cpu |         300 $         |
| Intel i5     | cpu |         200 $         |
| Nvidia 3060  | GPU |         400 $         |
| Nvidia 4060  | GPU |         500 $         |

the system will check what is the lowest of products for each key.
So, the lowest in "cpu" is i5 and lowest of "GPU" is Nvidia 3060 and the total will be 600 $, so you will be notified.

But as you have noticed, you can have other combinations such as i7 with 3060 or i5 and nvidia 4060 which they both add up to 700$ , but the system will only notify you for the LOWEST combination only, So you need to Check for other avialable options.

## Check Your Favourite Products From the browser

Extension is available for both [Firefox](https://addons.mozilla.org/en-US/firefox/addon/discount-bandit) and [Chrome](https://ntfy.sh) 



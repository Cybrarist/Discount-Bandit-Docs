# Linux / MAC / Windows Installation

## Requirements

- Discount Bandit

## How To Install
Extension is available for both [Firefox](https://addons.mozilla.org/en-US/firefox/addon/discount-bandit) and [Chrome](https://chromewebstore.google.com/detail/mbbmbpolbdcgbchbbpmigbkpnfbghihn)

### Web server Setup

First Access the website and click on profile to go to your profile page

<img src="/public/website/Profile.png" alt="Profile" width="200" style="margin: auto" />

Go Down to "API Token" Section 

<img src="/public/website/API_Token.png" alt="API Token"  style="margin: auto" />

Create New token, allow "get_product" permission

<img src="/public/website/API_token_creation.png" alt="Create API Token" width ="300"  style="margin: auto" />

Copy The API Token Generated

<img src="/public/website/copy_API.png" alt="Create API Token"   style="margin: auto" />

__________

## Extension Setup


Access The Extension Options Page

### Firefox
Open the plugins from the toolbars and click on the "gear"

![Firefox Option 1](/public/website/firefox_options_1.png)

Click on the 3 dots and select "Preferences"

<img src="/public/website/firefox_options_2.png" alt="Firefox Option"  style="margin: auto" />

### Chrome

Open the plugins from the toolbars and click on "Options"

![Chrome Option 1](/public/website/chrome_options_1.png)


_____
### Setup Credentials

You should be greeted with the following page, where you should fill your server URL with the token

::: danger
Do NOT put a slash at the end of the URL
:::

![Options Page](/public/website/options_page.png)

### Test Implementaion

Access any Product page and you should get the following 
::: info
if the product doesn't exist in your server the lowest and highest price will be 0
:::

![Product Page](/public/website/product_1.png)

Price History Chart (all stores for this product will be shown)

![Product Page](/public/website/product_2.png)

### Add a product from the extension

Click on the small Discount Bandit logo next to the product title and you should be able to see the following form to create/update the product

<img src="/public/website/popup.png" alt="Product Popup" width="400" style="margin: auto" />


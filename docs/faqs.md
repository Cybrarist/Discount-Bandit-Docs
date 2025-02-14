
# FAQs and Tips

## FAQs
### Can I add new stores ?
no, you can't add a new store directly, the available button is to be able to create a new branch of the current available stores.

For example, if amazon opens in new country that is not available in the application, the user can create that store directly with its domain.

### Why is product not crawled on creation
The product will be fetched with the next cron, or you can open the product page and press "Fetch" to directly get the product.




## Tips

### Reduce Memory usage
The system will check all the stores even if that store doesn't have a product, that might cause a higher memory usage.

To reduce the usage,  disable stores that are not used and restart the container.


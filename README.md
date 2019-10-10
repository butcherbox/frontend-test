# ButcherBox Frontend Interview Project

Fork this repo and clone to your machine. Run yarn install to install the npm dependencies. Run yarn start to start up the local server.

When have completed the project please commit and push up to your forked repo and email me at jeffreygnatek@butcherbox.com.

Please recreate the design shown at [here](https://www.figma.com/file/SqKMB75lspAOntDACqXeNE/Untitled?node-id=1%3A2) 

## Directions

The objective of this exercise is to see how well you can replicate a design file and create a basic example of a shopping cart. 

We have included the Roboto font already (link found in public/index.html)

You will find mock data in src/data.json import/fetch/copy this into your app and render the items to match the look of the individual cards in the design. The required functionality is that clicking the add button will add 1 unit of the item. When an item has been added, it will then show a quantity input in place of the add button, allowing the user to add more items or remove items and even reset it back to its initial state. The data.json file has both a total_allowed and an allowed property per item. The total is how many total units the user can add to their shopping cart. The allowed property indicated how many of that item the user can add. You will notice there are several values for allowed, including -1 and 0. -1 indicated that there is no limit to the ammount a user can add up to the total ammount. 0 indicated this item is sold out and no items can be added. Once an item has reached its allowed quantity, the buttons to add should be disabled (but not the minus). As the user adds items, update the progress bar at the bottom to reflect the percentage of items until the order is complete. Each item will show up in the sidebar cart as its added, with its current quantity. The X button on each item allows the user to remove all units of that item from the cart with a single click.

If you have any questions please feel free to contact me directly, jeffreygnatek@butcherbox.com

Thank you

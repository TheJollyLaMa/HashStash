# HashStash
- Supply Chain management for Smarthome Entities
- A decentralized application for the management of household inventory
- a reason to play with angularjs animations

## Introduction
What's coming in? What's going out?  Where's it coming from? Where's it going?  Who has it? For how long? How much of the global supply burden does each household carry?

Can it be organized more efficiently with more transparency for the benefit of all?


## Input
A simple input form to record the purchase of new inventory.  The form should include the following fields:

* Item Name
* Item Description
* Item Quantity
* Item Cost
* Item Source
* Item Purchase Date

Upon submition, the form will send a POST request to an ERC721 or ERC1155 recording the new inventory on a public ledger with the following JSON:

```json
{
    "name": "Item Name",
    "description": "Item Description",
    "quantity": 1,
    "cost": 1.00,
    "source": "Item Source",
    "purchase_date": "2015-01-01",
    "owner": "0x0000000000000000000000000000000000000000"
    "data": [
        {
            "temperature": 0,
            "humidity": 0
        },
    ]
}
```

## Output
A simple output form to record the consumption of inventory.  The form should include the following fields:

* Item Name
* Item Quantity
* Item Price
* Item Destination
* Item Consumption Date

Upon submition, the form will send a POST request to an ERC721 or ERC1155 recording the new inventory on a public ledger with the following JSON:

```json
{
    "name": "Item Name",
    "description": "Item Description",
    "quantity": 1,
    "price": 1.00,
    "destination": "Item Destination",
    "consumption_date": "2015-01-01",
    "owner": "0x0000000000000000000000000000000000000000"
    "data": [
        {
            "temperature": 0,
            "humidity": 0
        },
    ]
}
```

## Display Inventory
Bind local data to blockchain orcale data to display the current inventory of the household.

## Display History
Bind local data to blockchain orcale data to display the history of the household.




significant specs:
    Neo's backend error page
    Jolly Header and Footer with customizable nav bar
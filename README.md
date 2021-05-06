# API SPEC

## PRODUCT

### Get All Product

#### Request:

- Method: GET
- Endpoint: /api/product

#### Response:

```json
{
	"code": "number",
	"status": "string",
	"data": [
		{
			"id": "ObjectId",
			"name": "string",
			"price": "string",
			"quantity": "number",
			"createdAt": "date",
			"updatedAt": "date"
		}
	]
}
```

### Get Product

#### Request:

- Method: GET
- Endpoint: /api/product/:id

#### Response

- Body:

```json
{
	"code": "number",
	"status": "string",
	"data": [
		{
			"id": "ObjectId",
			"name": "string",
			"price": "string",
			"quantity": "number",
			"createdAt": "date",
			"updatedAt": "date"
		}
	]
}
```

### Create Product

#### Request:

- Method: POST
- Endpoint: /api/products/
- Body:

```json
{
	"name": "string",
	"price": "string",
	"quantity": "number"
}
```

#### Response:

- Body:

```json
{
  "code": "number",
  "status": "Created",
	"data": [
		"id": "number",
		"name": "string",
		"description": "text",
		"price": "number"
    }
  ],
}
```


### Update Product

#### Request:

- Method: PUT
- Endpoint: /api/product/:id
- Body:

```json
{
	"name": "string",
	"price": "string",
	"quantity": "number"
}
```

#### Response:

- Body:

```json
{
	"code": "number",
	"status": "string",
	"data": "string"
}
```
### Delete Product

#### Request:
- Method: DELETE
- Endpoint: /api/product/:id

#### Response:

- Body:

```json
    {
        "code": "number",
        "status": "string",
        "data": "string"
    }
```


## Create the products table
```pg
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);
```

## Insert some initial data
```pg
INSERT INTO products (name, description, price) VALUES
  ('Product 1', 'This is the first product', 10.99),
  ('Product 2', 'This is the second product', 19.99),
  ('Product 3', 'This is the third product', 5.99);
```

## Select all products
```pg
SELECT * FROM products;
```

## Insert a new product
```pg
INSERT INTO products (name, description, price) VALUES
  ('Product 4', 'This is the fourth product', 15.99);
  ```

## Update a product
```pg
UPDATE products SET price = 14.99 WHERE id = 3;
 ```
## Delete a product
```pg
DELETE FROM products WHERE id = 2;
```
## Insert some additional data
```pg
INSERT INTO products (name, description, price) VALUES
  ('Product 5', 'This is the fifth product', 8.99),
  ('Product 6', 'This is the sixth product', 25.99);
```
## Select all products again
```pg
SELECT * FROM products;
```

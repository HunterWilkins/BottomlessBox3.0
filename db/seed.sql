INSERT INTO pockets(name, taxable) VALUES("Fruit", 0);
INSERT INTO pockets(name, taxable) VALUES("Veggies", 0);
INSERT INTO pockets(name, taxable) VALUES("Food", 0);
INSERT INTO pockets(name, taxable) VALUES("Junk Food", 0);
INSERT INTO pockets(name, taxable) VALUES("Drinks", 0);
INSERT INTO pockets(name, taxable) VALUES("Medicine", 1);
INSERT INTO pockets(name, taxable) VALUES("Pet Supplies", 1);
INSERT INTO pockets(name, taxable) VALUES("Misc", 1);

INSERT INTO users(username, password) VALUES("test", "test");

INSERT INTO items(name, price, quantity, pocket_id, user_id) VALUES("Handbag", 20.50, 1, 8, 1);
INSERT INTO items(name, price, quantity, pocket_id, user_id) VALUES("Apple", 20.50, 1.5, 8, 1);

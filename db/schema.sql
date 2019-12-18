CREATE DATABASE IF NOT EXISTS productInfo;

USE productInfo;

CREATE TABLE products(id VARCHAR(50), product_name VARCHAR (100), price DECIMAL(7, 2), line_1 VARCHAR (200), line_2 VARCHAR(200), line_3 VARCHAR (200));


INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("17264ec6","X-Wing",  69999.99, 
"The X-wing is a versatile Rebel Alliance starfighter that balances speed with firepower.", "Armed with four laser cannons and two proton torpedo launchers, the X-wing can take on anything the Empire 
throws at it.", "Nimble engines give the X-wing an edge during dogfights, and it can make long-range jumps with its hyperdrive and its 
astromech droid co-pilot.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1726883c", "B-Wing",  59999.99, 
"Includes a cylindrical cockpit on one end and a heavy weapons armament of proton torpedoes on the opposite end.","The center of the airfoil includes the primary engine located just above an s-foil attachment.", 
"The cockpit has a gyroscopic control system allowing the pilot to always remain upright regardless of what the remainder of the fighter is doing.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1726a68c", "E-Wing",  54999.99, 
"The E-Wing is slightly shorter than the X-Wing, and its cockpit is located just in front of the center of the fighter.", "If the pilot has to eject, the top of the cockpit is blow off and the pilot ejects out of the top of the fighter.", 
"Unlike in the X-Wing, the astromech droid is completely located inside of the hull of the fighter, and as such is much less vulnerable.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1726d116", "Hornet Interceptor",  49999.95, 
"Fast, lightweight, and easily mass-produced with low-cost standard parts.","Hornets had thin, rounded bodies with wings that could be deployed in atmospheres.","Lightly armored, shielded, and highly 
maneuverable.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("17271b8a", "Imperial Star Destroyer",  89999.99, 
"A wedge-shaped capital ship", "Bristles with weapons emplacements", "Assault troops, boarding craft, and TIE line starfighters.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1727634c", "A280 Blaster Rifle", 999.99, 
"Powerful blaster rifles, known for their impressive power and capable of piercing armor", "Used by planetary forces across the galaxy.", 
"With their widespread use, it makes them easy for the Rebel Alliance to procure on the black market.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1727c83c", "EL-16HFE Blaster Rifle",  1599.99, 
"Steady, sturdy, and built for medium to long-range combat distances.", "The EL-16HFE was the preferred blaster rifle among fighters with the Resistance.", "Manufactured by BlasTech Industries.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("17281350", "A-300 Blaster Rifle",  1249.99 , 
"Similar in appearance to the A280 blaster rifle and almost identical to the A280-CFE", "Notably used by many Alliance Special Forces members of Rogue One during the Battle of Scarif.", 
"Manufactured by BlasTech Industries.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("172834c0", "ARC Caster",  999.99, 
"Modified E-11 blaster rifle that is utilized by some types of dark troopers in the Galactic Empire.", "Uses a charge function to prepare a blast of electricity ",
"Can be fired at a target or group of targets.");

INSERT INTO products
    (id, product_name, price, line_1, line_2, line_3)
VALUES("1729b8ea", "HB-9",  499.99, 
"A long-range blaster rifle with an intricately-patterned barrel and an elegant, curving stock and shoulder brace.", "Features a front sight over the tip of the barrel and a 
hand-turned recharge valve.", "A blaster rifle manufactured by Zenoti Arms during the 
Clone Wars.");
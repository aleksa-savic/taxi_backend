CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	user_id uuid default uuid_generate_v4 (),
	username varchar(16) not null,
	email varchar(1024) unique not null,
	first_name varchar(30) not null,
	last_name varchar(30) not null,
	password varchar(1024) not null,
	registred_at_date date not null default CURRENT_DATE,
	
	PRIMARY KEY(user_id)
);
drop table driver
CREATE TABLE driver(
	driver_id uuid unique default uuid_generate_v4() ,
	jmbg varchar(13) not null,
	driving_licence varchar(30) not null,
	employed_date date not null,
	average_mark decimal(3,1),
	personal_vehicle bool default false,
	user_id uuid not null unique,
	
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	PRIMARY KEY(driver_id)
);
CREATE TABLE client(
	client_id uuid unique default uuid_generate_v4() ,
	payment_info varchar(50),
	user_id uuid not null,
	
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	PRIMARY KEY(client_id)
);
create table admin(
	admin_id uuid default uuid_generate_v4 (),
	user_id uuid not null,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	PRIMARY KEY(admin_id)
);
drop table vehicle
CREATE TABLE vehicle(

	vehicle_id uuid unique default uuid_generate_v4(),
	licence_plate varchar(10) not null,
	is_caravan bool default false,
	
	PRIMARY KEY (vehicle_id)
);

CREATE TABLE ride(
	ride_id uuid default uuid_generate_v4(),
	start_location_long varchar(20) not null,
	start_location_lat varchar(20) not null,
	end_location_long varchar(20) not null,
	end_location_lat varchar(20) not null,
	start_time timestamp not null default CURRENT_TIMESTAMP,
	end_time timestamp default null,
	distance_km decimal(6,2) default null,
	client_ride_rating int default null,
	driver_id uuid not null,
	client_id uuid not null,
	
	FOREIGN KEY(driver_id) REFERENCES driver(driver_id),
	FOREIGN KEY(client_id) REFERENCES client(client_id),
	PRIMARY KEY(ride_id)
);
CREATE TABLE ride_tariff(
	tariff_id uuid default uuid_generate_v4(),
	base_tariff decimal(5,2) not null,
	rate_per_h_waited decimal(5,2) not null,
	rate_per_km decimal(5,2) not null,
	
	PRIMARY KEY(tariff_id)
);
CREATE TABLE transaction(
	transaction_id uuid default uuid_generate_v4(),
	transaction_time timestamp not null default CURRENT_TIMESTAMP,
	total_price decimal(7,2),
	tariff_id uuid not null,
	ride_id uuid not null,
	
	FOREIGN KEY(tariff_id)REFERENCES ride_tariff(tariff_id),
	FOREIGN KEY(ride_id)REFERENCES ride(ride_id),
	PRIMARY KEY(transaction_id)
);

CREATE TABLE asigned_vehicle(
	driver_id uuid not null,
	vehicle_id uuid not null,

	created_at date not null default CURRENT_DATE, /*obelezava kada je dodeljeno vozilo vozacu */
	closed_at date default null,  	/*kada je veza vozac-vozilo zatvorena, dok je aktivna veza je null*/
	
	FOREIGN KEY(driver_id) REFERENCES driver(driver_id),
	FOREIGN KEY(vehicle_id) REFERENCES vehicle(vehicle_id),
	
	PRIMARY KEY(driver_id, vehicle_id)
);
/*
//////////////////////////////////////
ovo cu kasnije da implementiram
//////////////////////////////////////
create table message( 
	sent_by uuid not null,
	sent_to uuid not null,
	sent_at timestamp,
	content varchar(100),
	
	FOREIGN KEY(sent_by)REFERENCES users(user_id),
	FOREIGN KEY(sent_by)REFERENCES users(user_id),
	PRIMARY KEY(???) composit?
) */




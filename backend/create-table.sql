CREATE TABLE IF NOT EXISTS ACCOUNT (
    Email TEXT PRIMARY KEY,
    Password TEXT,
    Ph_Num TEXT,
    City TEXT,
    Postal_Code TEXT,
    Street TEXT,
    Province TEXT ,
    User_Type TEXT
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS USER (
	Email TEXT PRIMARY KEY,
    First_Name TEXT,
    Last_Name TEXT,
    DOB TEXT,
    FOREIGN KEY(Email) REFERENCES ACCOUNT(Email)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS INSPECTOR (
	Email TEXT PRIMARY KEY,
    First_Name TEXT,
    Last_Name TEXT,
    DOB TEXT,
    FOREIGN KEY(Email) REFERENCES ACCOUNT(Email)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS INSPECTION_REPORT (
	Report_ID TEXT PRIMARY KEY,
    Damages_Level TEXT,
    Cleanliness_Level TEXT,
    Overall_Rating TEXT,
    Inspector_Email TEXT,
    Vehicle_Reg TEXT,
    FOREIGN KEY(Inspector_Email) REFERENCES INSPECTOR(Email),
    FOREIGN KEY(Vehicle_Reg) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS COMPANY (
	Email TEXT PRIMARY KEY,
    Comp_Name TEXT ,
    FOREIGN KEY(Email) REFERENCES ACCOUNT(Email)
) WITHOUT ROWID;


CREATE TABLE IF NOT EXISTS VEHICLE (
	REG_NUM TEXT PRIMARY KEY,
    License TEXT,
    Num_Of_Passengers INTEGER,
    Mileage TEXT,
    Model TEXT,
    Make TEXT,
    Color TEXT,
    Price TEXT,
    Availability INTEGER ,
    Reviewed INTEGER ,
    Mechanic_ID INTEGER,
    Cleaner_ID INTEGER,
    Owner_ID TEXT ,
    Date_Posted TEXT,
    FOREIGN KEY(Mechanic_ID) REFERENCES MECHANIC(Mechanic_ID),
    FOREIGN KEY(Cleaner_ID) REFERENCES CLEANER(Cleaner_ID),
    FOREIGN KEY(Owner_ID) REFERENCES ACCOUNT(Email_ID)
) WITHOUT ROWID;


CREATE TABLE IF NOT EXISTS CAR (
	REG_NUM TEXT PRIMARY KEY,
    Type TEXT,
    FOREIGN KEY(Reg_Num) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS TRUCK (
	REG_NUM TEXT PRIMARY KEY,
    Tonnage TEXT,
    FOREIGN KEY(Reg_Num) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS BOAT (
	REG_NUM TEXT PRIMARY KEY,
    Knots TEXT,
    FOREIGN KEY(Reg_Num) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS MOTORCYCLE (
	REG_NUM TEXT PRIMARY KEY,
    CC TEXT,
    FOREIGN KEY(Reg_Num) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS JET (
	REG_NUM TEXT PRIMARY KEY,
    TBO TEXT,
    FOREIGN KEY(Reg_Num) REFERENCES VEHICLE(Reg_Num)
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS BOOKING (
	Booking_ID INTEGER PRIMARY KEY ,
    Number_Days INTEGER ,
    Start_Date TEXT ,
    End_Date  TEXT ,
    Insurance_ID INTEGER,
    Coupon_ID INTEGER,
    PickUp_Location INTEGER ,
    DropOff_Location INTEGER ,
    FOREIGN KEY(Insurance_ID) REFERENCES INSURANCE(Insurance_ID),
    FOREIGN KEY(Coupon_ID) REFERENCES COUPON(Coupon_ID),
    FOREIGN KEY(PickUp_Location) REFERENCES LOCATION(Location_ID),
    FOREIGN KEY(DropOff_Location) REFERENCES LOCATION(Location_ID)
);

CREATE TABLE IF NOT EXISTS BILL (
	Booking_ID INTEGER ,
    Bill_ID INTEGER ,
    Cost INTEGER ,
    Bill_Date  TEXT ,
    Discount_Applied INTEGER ,
    PRIMARY KEY(Bill_ID, Booking_ID),
    FOREIGN KEY(Booking_ID) REFERENCES BOOKING(Booking_ID)
) ;

CREATE TABLE IF NOT EXISTS INSURANCE (
	Insurance_ID INTEGER PRIMARY KEY ,
    Cost INTEGER 
) ;


CREATE TABLE IF NOT EXISTS COUPON (
	Coupon_ID INTEGER PRIMARY KEY ,
    Discount INTEGER ,
    Exp_Date TEXT 
) ;

CREATE TABLE IF NOT EXISTS LOCATION (
	Location_ID INTEGER PRIMARY KEY,
    City TEXT ,
    Postal_Code TEXT ,
    Street TEXT ,
    Province TEXT 
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS MECHANIC (
	Mechanic_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    First_Name TEXT ,
    Last_Name TEXT 
) ;


CREATE TABLE IF NOT EXISTS CLEANER (
	Cleaner_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    First_Name TEXT ,
    Last_Name TEXT 
) ;


CREATE TABLE IF NOT EXISTS BOOKS (
	Vehicle_ID TEXT,
    Email_ID TEXT,
    Booking_ID TEXT,
    PRIMARY KEY(Vehicle_ID,Email_ID,Booking_ID),
    FOREIGN KEY(Vehicle_ID) REFERENCES VEHICLE(Reg_Num),
    FOREIGN KEY(Booking_ID) REFERENCES BOOKING(Booking_ID)

) WITHOUT ROWID;



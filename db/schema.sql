CREATE DATABASE disasters_db;

USE disasters_db;

CREATE TABLE storm_events_details (
event_type VARCHAR(100),
begin_yearmonth INTEGER(10),
injuries_direct INTEGER(5),
injuries_indirect INTEGER(5),
deaths_direct INTEGER(5),
deaths_direct INTEGER(5),
longitude DECIMAL(9,6),
latitude DECIMAL(9,6)

)
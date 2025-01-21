




to connect to server
psql -U postgres


to change database

\c  <databasename>




dvdrental=# \dt
             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | actor         | table | postgres
 public | address       | table | postgres
 public | category      | table | postgres
 public | city          | table | postgres
 public | country       | table | postgres
 public | customer      | table | postgres
 public | film          | table | postgres
 public | film_actor    | table | postgres
 public | film_category | table | postgres
 public | inventory     | table | postgres
 public | language      | table | postgres
 public | payment       | table | postgres
 public | rental        | table | postgres
 public | staff         | table | postgres
 public | store         | table | postgres
(15 rows)


dvdrental=# \dt customer
          List of relations
 Schema |   Name   | Type  |  Owner
--------+----------+-------+----------
 public | customer | table | postgres
(1 row)


dvdrental=# select version();
                                 version
-------------------------------------------------------------------------
 PostgreSQL 17.2 on x86_64-windows, compiled by msvc-19.42.34433, 64-bit
(1 row)


dvdrental=# select current_database();
 current_database
------------------
 dvdrental
(1 row)


dvdrental=# select inet_server_addr(),inet_server_port();
 inet_server_addr | inet_server_port
------------------+------------------
 ::1              |             5432
(1 row)











select staff_id ,customer_id,count(customer_id),sum(amount) 
from payment
group by staff_id ,customer_id 
order by staff_id;




select staff_id,customer_id,sum(amount)
 from payment
 group by grouping sets((customer_id,staff_id),(staff_id),(customer_id),());
-- SQL DAY 3 ASSIGNMENT
-- AJINKYA NARWADE (B9 TL Group C)

/*****************************************************************************************************************************
*
*    Q1] Delete one row and recover the deleted data on student table
*
*****************************************************************************************************************************/


CREATE TABLE EMPLOY(
    ENO number(5),
    ENAME varchar2(20),
    GENDER char(1),
    SALARY number(9, 2)
);

INSERT INTO EMPLOY VALUES(100, 'aaa', 'M', 10000);
INSERT INTO EMPLOY VALUES(200, 'bbb', 'F', 10000);

DELETE FROM EMPLOY WHERE ROWID='AINC9WAAkAAAArOAAA';
ROLLBACK;


/*****************************************************************************************************************************
*
*    Q2] Remove all the rows from student table and confirm that the deleted rows are recovered with ROLLBACK
*
*****************************************************************************************************************************/


CREATE TABLE STUDENT(
    SNO NUMBER(5),
    SNAME VARCHAR2(20),
    SGENDER CHAR(1)
);

INSERT INTO STUDENT VALUES(101, 'Radhika', 'F');
INSERT INTO STUDENT VALUES(102, 'Akshay', 'M');

DELETE FROM STUDENT;
ROLLBACK;
SELECT * FROM STUDENT;


/*****************************************************************************************************************************
*
*    Q3] Drop student table and restore back student table
*
*****************************************************************************************************************************/


TRUNCATE TABLE STUDENT;
FLASHBACK TABLE STUDENT TO BEFORE DROP; -- Will not work if the USER is SYSTEM


/*****************************************************************************************************************************
*
*    Q4] Create table items with item_no, item_name, unit_price
*
*****************************************************************************************************************************/


CREATE TABLE ITEMS(
    ITEM_NO NUMBER(10),
    ITEM_NAME VARCHAR2(30),
    UNIT_PRICE NUMBER(10,2)
);


/*****************************************************************************************************************************
*
*    Q5] Insert 2 rows into the items table and observe that unit_price is entered
with fractional data
*
*****************************************************************************************************************************/


INSERT INTO ITEMS VALUES(201, 'Chivda', 130.80);
INSERT INTO ITEMS VALUES(201, 'Chakli', 98.75);


/*****************************************************************************************************************************
*
*    Q6] Create table company table with columns company_id and turn_over
and see that turn_over column value is rounded to thousands place.
Perform data insertion and observe the rounding operations
*
*****************************************************************************************************************************/


CREATE TABLE COMPANY(
    COMPANY_ID NUMBER(10),
    TURN_OVER NUMBER(10,-4)
);

INSERT INTO COMPANY VALUES(301, 125000);
INSERT INTO COMPANY VALUES(401, 234999);

SELECT * FROM COMPANY;


/*****************************************************************************************************************************
*
*    Q7] Create table blood_test with columns test_id and test_result. See that
the test_result accept only micro values. Ex: .000001 or below
*
*****************************************************************************************************************************/


CREATE TABLE BLOOD_TEST(
    TEST_ID NUMBER(10),
    TEST_RESULT NUMBER(2, 7)
);

INSERT INTO BLOOD_TEST VALUES(1039751, 0.000001);
INSERT INTO BLOOD_TEST VALUES(9850061, 0.02); -- ORA-01438: value larger than specified precision allowed for this column ORA-06512: at "SYS.DBMS_SQL"

SELECT * FROM BLOOD_TEST;
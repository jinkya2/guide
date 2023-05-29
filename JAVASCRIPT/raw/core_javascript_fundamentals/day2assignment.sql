-- SQL DAY 2 ASSIGNMENT
-- AJINKYA NARWADE (B9 TL Group C)

/*****************************************************************************************************************************
*
*    Q1] Create table STUDENT with the following columns SNO,SNAME, GENDER, EMAIL_ID, PHONE_NO.
*
*****************************************************************************************************************************/
CREATE TABLE STUDENT (
    SNO NUMBER(6),
    SNAME VARCHAR2(40),
    GENDER CHAR(1),
    EMAIL_ID VARCHAR2(80),
    PHONE_NO NUMBER(12)
);

DESCRIBE STUDENT

/*****************************************************************************************************************************
*
*    Q2] Perform data insertion with full row and partial row (with or without contact details)
*
*****************************************************************************************************************************/

-- Method 1: Insert one row at a time
INSERT INTO STUDENT VALUES ('201', 'Ajinkya', 'M', 'ajinkya@gmail.com', 1111111111);
INSERT INTO STUDENT (SNO, SNAME, GENDER, EMAIL_ID, PHONE_NO) VALUES ('202', 'Anamika', 'F', 'anamika@gmail.com', 2222222222);
INSERT INTO STUDENT (SNO, SNAME, GENDER) VALUES ('203', 'Aarunya', 'F');

-- Method 2: Insert multiple rows at once using INSERT ALL suqueries and oracle auto created special dummy table "dual"
INSERT ALL
    INTO STUDENT VALUES ('204', 'Bahubali', 'M', 'bahu@bali.com', 4444444444)
    INTO STUDENT (SNO, SNAME, GENDER, EMAIL_ID, PHONE_NO) VALUES ('205', 'Zoro', 'M', 'zoro@spain.com', 5555555555)
SELECT * FROM dual; 


/****************************************************************************************************************************
*
*    Q3] Display all the rows of the table
*
*****************************************************************************************************************************/

SELECT * FROM STUDENT;


/****************************************************************************************************************************
*
*    Q4] Display all Male Students list
*
*****************************************************************************************************************************/

SELECT * FROM STUDENT WHERE GENDER='M';

/*****************************************************************************************************************************
*
*    Q5] Update details of students whose contact details are not there
*
******************************************************************************************************************************/

UPDATE STUDENT
SET EMAIL_ID='aarunya@live.com', PHONE_NO=3333333333
WHERE EMAIL_ID IS NULL AND PHONE_NO IS NULL;



/*****************************************************************************************************************************
*
*    Q6] Remove selected rows and all rows from student table
*
******************************************************************************************************************************/

DELETE FROM STUDENT WHERE SNAME='Zoro';
DELETE FROM STUDENT;


/*****************************************************************************************************************************
*
*    Q7] Remove all contact details from student table
*
******************************************************************************************************************************/

UPDATE STUDENT SET EMAIL_ID=NULL, PHONE_NO=NULL;


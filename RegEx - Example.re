/*-------------------------------------------*\
  Case 1 - Redirection to fix broken image link
\*-------------------------------------------*/

From : http://www.covenant-tech.net/techsupport/email/images/staff/bdawson.jpg
To : http://www.covenant-tech.net/wp-content/uploads/sites/2867/techsupport/email/images/staff/bdawson.jpg

/* RegEx */

From : ^/techsupport/(.*)
To : $scheme://www.covenant-tech.net/wp-content/uploads/sites/2867/techsupport/$1
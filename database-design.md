types:

id 		name 	slug 	description 	status 	

projects:

id 	type_id 	title   introduction 	provided 	challanges_overcome

images:
id imageable_id imageable_type 	type 	status 	 src  	

students:
id 	student_unique_id 	name  mobile  dob 

#student_unique_id = ecl-181-100

courses:
id 	name 	description 	course_fee

student_course:
id 	student_id 	course_id 	expired_at
1  	1			1			30/11/2018
2	1			2			30/12/2018

results:
id 	student_id 	course_id 	result 	result_published_date

jobs:
id 		student_id 	company_name 	company_domain designation 	started_at	end_at	

accounce:
id 		student_id 		dabit 		credit

transactions:
id 		student_id 	amount	dabit 	credit 	transaction_date

categories:
id 	name slug

courses:
id 	category_id 	name 	title 	sumery 	 duration	about 	learning reference course_fee



#sedin dujone

# Organizations Training DB design::

# Organization's chairman is a user of this system
# Each organization should have only one billing account
# Organizations has many employes(students)
# Students are assigned in a batch
# Students may regiter one or more courses
# Organization should pay for every students that belongs to that organization
# Batchs

id 	number 	

#course_batch
course_id 	batch_id

#course_student
course_id   student_id   batch_id




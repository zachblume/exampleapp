# default should be first command
.DEFAULT_GOAL := start

start:
	@echo "Starting the application"
	# first, docker up the db
	docker run --name example-app-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
	npm run dev
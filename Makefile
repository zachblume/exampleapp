# default should be first command
.DEFAULT_GOAL := start

start:
	@echo "Starting the application"
	# first, docker up the db
	docker run --name example-app-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
	# wait 2 seconds for db to come up before running migrations
	sleep 4
	npx prisma migrate deploy
	npm run dev

stop:
	@echo "Destroy the database"
	docker rm -f example-app-db

clean: stop start
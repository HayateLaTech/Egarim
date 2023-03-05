# General
start:
	docker compose --env-file .env up -d 

stop:
	docker compose down

# Database
migrate:
	docker compose exec app npx sequelize-cli db:migrate

undo:
	docker compose exec app npx sequelize-cli db:migrate:undo

reset:
	docker compose exec app npx sequelize-cli db:migrate:undo:all
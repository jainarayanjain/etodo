FROM python:3.10-slim-bullseye

LABEL maintainer="Jai Jain <jainarayanjain2604@gmail.com>"

WORKDIR /etodo

RUN apt-get update
RUN apt-get install -y gcc libssl-dev libmariadb-dev
RUN python3 -m pip install poetry gunicorn

COPY ./pyproject.toml ./poetry.lock /etodo/

RUN poetry config virtualenvs.create false
RUN poetry install --no-root --no-interaction --no-ansi

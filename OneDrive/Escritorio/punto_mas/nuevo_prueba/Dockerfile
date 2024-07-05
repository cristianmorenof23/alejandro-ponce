FROM python:slim AS base

ARG CI_JOB_TOKEN

ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive
ENV PATH=$PATH:/root/.local/bin
ENV PIP_EXTRA_INDEX_URL="https://__token__:${CI_JOB_TOKEN}@gitlab.com/api/v4/groups/12103897/-/packages/pypi/simple"
ENV LISTEN=0.0.0.0:8000

WORKDIR /root

FROM base as dev
COPY ./src ./src
COPY pyproject.toml ./
RUN pip install -e .[dev]
CMD ["punto_mas", "runserver", "0.0.0.0:8000"]

FROM base as runtime
RUN pip install punto_mas==0.1.8
CMD ["gunicorn", "punto_mas.wsgi:application", "-w", "2", "-b", ":8000", "--capture-output"]

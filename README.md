# FGTS POROS

Before running the project, please check for any conflicting ports. All ports used are listed in .env.example.
To build the project, run make on the root project.

```sh
make
```

# FAQ
**PostGres isn't working after reinitialization or after running make init**
For whatever reason if you need a new postgres volume (ex. deleted .env file or recreation of new one). Delete the docker volume and run make again.

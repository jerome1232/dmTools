# Dungeon Master Tool (dmTool)

This is a web application built in Angular that helps Dungeon Masters (DMs) manage their tabletop role-playing game sessions. It provides a user-friendly interface for DMs to manage their campaigns, characters, encounters, and more.

## Features

- **Loot Generator:** DMs can generate loot for encounters based on loot tables found in the DMG.

### Planned

- **Encounter Management:** DMs can create and manage encounters for their campaigns, including adding and editing encounter information, as well as tracking initiative order and character status during the encounter.
- **Dice Roller:** DMs can roll dice for various in-game actions directly in the application, including custom rolls with modifiers.
- **Random Name Generators:** DMs can generate random names for NPCs.

### Local Development
Install nodejs and npm: [Instructions](https://github.com/nodesource/distributions)

Install angular cli: [Instructions](https://angular.io/cli)

cd into project `cd dmTools`

Run `npm i`

Start development server to see live changes `ng serve`
```bash
cd dmTools
npm i
ng serve
```

Development server will be accessable at http://localhost:4200

## Accessing the tool

The latest release is hosted at [DmTools](http://devrandom.duckdns.org:8081).

## Using Docker to self host

To use the dmTool with Docker, you can pull the Docker image from GitHub Container Registry. Here are the steps to follow:

1. Install Docker on your machine if you haven't already done so. You can download it from the [Docker website](https://www.docker.com/products/docker-desktop).
2. Pull the Docker image from GitHub Container Registry: `docker pull ghcr.io/jerome1232/dmtool:latest`
3. Run the Docker image: `docker run -d -p 80:80 ghcr.io/jerome1232/dmtool:latest`

You should now be able to access the application in your browser at `http://localhost`.

## Contributing

If you would like to contribute to the dmTool, feel free to submit pull requests with your changes or enhancements. Please be sure to adhere to the code style and testing practices used in the project.

## License

This project is licensed under the [GNU General Public License v3.0](https://github.com/your-username/dmtool/blob/main/LICENSE).

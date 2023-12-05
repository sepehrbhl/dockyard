# Dockyard: Docker Compose Templates

Welcome to Dockyard, a curated collection of Docker Compose templates designed to kickstart development environments for various programming stacks. The goal of this project is to provide a centralized repository of configuration files that can quickly set up consistent, reproducible, and isolated development environments.

## Project Structure

Each directory within this project contains a full set of Docker Compose and related configuration files tailored for a specific technology stack. Here’s what you can expect within each stack’s directory:

- `docker-compose.yml`: The main Docker Compose file that defines and runs the multi-container applications.
- `nginx/`: Contains the Nginx configuration for web server setups.
- `README.md`: Provides detailed instructions about how to use the templates and any prerequisites or dependencies.

## Available Stacks

- `php/`: A LEMP stack with PHP-FPM, Nginx, MySQL, and phpMyAdmin, perfect for running PHP-based applications.
- `js/`: A stack configured for JavaScript development, including Node.js, and can be extended with databases and other services as required.

## Usage

To use any of these templates:

1. Clone this repository to your local machine:

   ```bash
   git clone https://sepehrbhl.gitlab.com/dockyard.git
   cd dockyard


2. docker-compose up -d


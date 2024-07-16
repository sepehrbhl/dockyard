 Dockyard: Docker Compose Templates

Welcome to Dockyard, a curated collection of Docker Compose templates designed to kickstart development environments for various programming stacks. The goal of this project is to provide a centralized repository of configuration files that can quickly set up consistent, reproducible, and isolated development environments.

## Environments

### 1. Nginx
A simple environment with Nginx to test web files.

### 2. Nginx + PHP
An environment with Nginx and PHP to test and run PHP files.

### 3. Nginx + PHP + MySQL + phpMyAdmin
An extended environment with Nginx, PHP, MySQL, and phpMyAdmin to simulate a complete web server setup.

### 4. Node.js + MongoDB
An environment for Node.js that includes a backend, frontend, and MongoDB for database management.

## Usage

To use any of these templates:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/sepehrbhl/dockyard.git
    cd dockyard
    ```

2. Navigate to the desired environment directory:

    ```bash
    cd nginx  # or any other stack directory
    ```

3. Build and run the Docker environment:

    ```bash
    docker-compose up -d
    ```

4. Follow the instructions in the specific environment's `README.md` file for further details.

### Structure

. Dockyard
├── nginx
│   ├── docker-compose.yml
│   ├── nginx
│   │   └── conf.d
│   │       └── default.conf
│   └── www
│       └── index.php
├── nginx+php
│   ├── docker-compose.yml
│   ├── nginx
│   │   └── conf.d
│   │       └── default.conf
│   └── www
│       └── index.php
├── nginx+php+mysql+phpmyadmin 
│   ├── docker-compose.yml
│   ├── nginx
│   │   └── conf.d
│   │       └── default.conf
│   └── www
│       └── index.php
├── Node.js
│    ├── api
│    │   ├── dockerfile
│    │   └── src
│    ├── app
│    │   ├── dockerfile
│    │   └── src
│    └── docker-compose.yaml
└── README.md

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue in the repository or contact the maintainer at [sepehrBHL@outlook.com].

---

Happy developing!


# Grocery Prices Tracker Web

## Internal Docs

- [Check out internal docs: Prices Tracker App Notes](https://devkobetran.github.io/prices-tracker-app-notes/)
- [Developers can contribute to docs](https://github.com/devkobetran/prices-tracker-app-notes)

## Run Locally

- Open terminal and in the root directory, run: `docker-compose up --build`
  - If issues occur: `docker-compose down`, then build it again.
- View React app locally here: [http://localhost:3000](http://localhost:3000)

### Connect to AWS EC2 Instance Locally

- Connect via SSH into the instance using your Key Pair like this template:

```bash
ssh -i ./your-directory-path/your-key-pair.pem ec2-user@<PUBLIC-IP-ADDRESS>
```

- Ask App Owner for **pem** file, then `cd` to the directory that contains that file.

```bash
chmod 400 "prices-tracker-app-dev-ec2-key.pem"
```

- Ask App Owner for special terminal command from AWS to connect to the instance from EC2 which can look like this:

```bash
ssh -i "prices-tracker-app-dev-ec2-key.pem" ec2-user@ec2-18-212-50-122.compute-1.amazonaws.com
```

- If issues persist, then update security groups in EC2.
  - Ensure it has an inbound rule allowing SSH (port 22):
    - Type: SSH
    - Protocol: TCP
    - Port Range: 22
    - Source: 0.0.0.0/0
      - This allows all IP Addresses to have access.
  - Reboot the instance and try again.
- After accessing the instance, start by updating the server package and installing the latest version of Docker and Docker-compose:

```bash
[ec2-user]$ sudo yum update -y
[ec2-user]$ sudo yum install -y docker
[ec2-user]$ sudo service docker start
[ec2-user]$ sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
[ec2-user]$ sudo chmod +x /usr/local/bin/docker-compose

[ec2-user]$ docker --version

[ec2-user]$ docker-compose --version

[ec2-user]$ sudo usermod -a -G docker ec2-user
```

- Generate the SSH Key and save the key without setting any password

```bash
[ec2-user]$ ssh-keygen -t rsa
```

- Copy the public key into the authorized_keys file and set the appropriate authorizations:

```bash
[ec2-user]$ cat ~/.ssh/id_rsa.pub 
# Copy this public key into ~/.ssh/authorized_keys
[ec2-user]$ vi ~/.ssh/authorized_keys
# After adding the public key into authorized_key then exits  from vi text editor 
# Then add these commands are used to change the permissions of these files 
[ec2-user]$ chmod 600 ~/.ssh/authorized_keys
[ec2-user]$ chmod 600 ~/.ssh/id_rsa
```

- Now, copy the contents of the private key
```bash
[ec2-user]$ cat ~/.ssh/id_rsa
```

## Tech Stack

- React Typescript for frontend
  - NGINX is a reverse proxy to serve the built static files of your React application.
    - This setup is used to improve performance and manage routing in production environments. 
- Kotlin Spring Boot for backend

### CI/CD

- GHA Workflow is used as the CI/CD Pipeline
- AWS EC2 for deployments
- Need to configure release.version to release tag of github repo in workflow!!!
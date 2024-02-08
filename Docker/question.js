/**
 * 1. What is Docker?
    Docker is an open-source containerization platform. It is used to automate the deployment of any application, using lightweight, portable containers.

2. What are Docker’s most notable features?
    Docker’s most essential features include:

    - Application agility
    - Developer productivity
    - Easy modeling
    - Operational efficiencies
    - Placement and affinity
    - Version control

3. Why should anyone use Docker? What does it offer?
    Docker gives users many incentives for adoption, such as:

    - An efficient and easy initial set up experience
    - The means to describe an application lifecycle in detail
    - Simple configuration and smooth interaction with Docker Compose
    - Complete and well-detailed documentation
    - Ability to run on a PC or enterprise IT system with equal ease
 
4. What about the opposite? Does Docker have any downsides?
    Docker isn’t perfect. It comes with its share of drawbacks, including:

    - Lacks a storage option
    - Monitoring options are less than ideal
    - You can’t automatically reschedule inactive nodes
    - Automatic horizontal scaling set up is complicated

5. Name and explain the various Docker components.
    The three main Docker components are:

    1. Docker Client. Performs Docker build pull and run operations to open up communication with the Docker Host. The Docker command then employs Docker API to call any queries to run.
    2. Docker Host. Contains Docker daemon, containers, and associated images. The Docker daemon establishes a connection with the Registry. The stored images are the type of metadata dedicated to containerized applications.
    3. Registry. This is where Docker images are stored. There are two of them, a public registry and a private one. Docker Hub and Docker Cloud are two public registries available for use by anyone.

6. What is a container?
    Containers are deployed applications bundled with all necessary dependencies and configuration files. All of the elements share the same OS kernel. Since the container isn’t tied to any one IT infrastructure, it can run on a different system or the cloud.

7. Explain virtualization.
    Virtualization is the means of employing software (such as Hypervisor) to create a virtual version of a resource such as a server, data storage, or application. Virtualization lets you divide a system into a series of separate sections, each one acting as a distinct individual system. The virtual environment is called a virtual machine.

8. What’s the difference between virtualization and containerization?
    Virtualization is an abstract version of a physical machine, while containerization is the abstract version of an application.

9. Last simple question…Describe a Docker container’s lifecycle.
    Although there are several different ways of describing the steps in a Docker container’s lifecycle, the following is the most common:

    1. Create container
    2. Run container
    3. Pause container
    4. Unpause container
    5. Start container
    6. Stop container
    7. Restart container
    8. Kill container
    9. Destroy container
    We will next look at the intermediate-level docker interview questions and answers.

----------------------------------------------------------
Exclusive Intermediate Interview Questions on Docker
----------------------------------------------------------


10. Name the essential Docker commands and what they do.
    The most critical Docker commands are:

    - Build. Builds a Docker image file
    - Commit. Creates a new image from container changes
    - Create. Creates a new container
    - Dockerd. Launches Docker daemon
    - Kill. Kills a container

11. What are Docker object labels?
    Labels are the mechanism for applying metadata to Docker objects such as containers, images, local daemons, networks, volumes, and nodes.

12. How do you find stored Docker volumes?
    Use the command: /var/lib/docker/volumes

13. How do you check the versions of Docker Client and Server?
    This command gives you all the information you need: $ docker version

14. Show how you would create a container from an image.
    To create a container, you pull an image from the Docker repository and run it using the following command: $ docker run -it -d <image_name>

15. How about a command to stop the container?
    Use the following command: $ sudo docker stop container name

16. How would you list all of the containers currently running?
    Use the command: $ docker ps
 
17. What’s involved in scaling a Docker container?
    Docker containers have the potential to be scaled to any level needed. Thanks to the platform’s flexibility, you can have anything from a few hundred to a few thousand, to millions of containers, providing they all have continual, unconstrained access to the required memory and OS.

18. What do you know about the Docker system prune?
    It’s a command used to remove all stopped containers, unused networks, build caches, and dangling images. Prune is one of the most useful commands in Docker. The syntax is:  $ docker system prune

     

-----------------------------
Advanced Docker Interview Questions for Experienced Professionals
----------------------------------

19. List some of the more advanced Docker commands and what they do.
Some advanced commands include:

 - Docker info. Displays system-wide information regarding the Docker installation
 - Docker pull. Downloads an image
 - Docker stats. Provides you with container information
 - Docker images. Lists downloaded images
20. Can you lose data stored in a container?
Any data stored in a container remains there unless you delete the container.

21. What platforms can you run Docker on?
The Linux platforms are:

 - ArchLinux
 - CentOS 6+
 - CRUX 3.0+
 - Fedora 19/20+
 - Gentoo
 - openSUSE 12.3+
 - RHEL 6.5+
 - Ubuntu 12.04, 13.04 et al

Docker can also run on the following cloud-based platforms:

 - Amazon EC2
 - Amazon ECS
 - Google Compute Engine
 - Microsoft Azure
 - Rackspace

22. Which is the best method for removing a container: the command “stop container” followed by the command “remove the container,” the rm command by itself?
Stop the container first, then remove it. Here’s how:

 - $ docker stop <coontainer_id>
 - $ docker rm -f <container_id>

23. Can a container restart on its own?
Since the default flag -reset is set to false, a container cannot restart by itself.

24. How do Docker daemon and the Docker client communicate with each other?
You use a combination of Rest API, socket.IO, and TCP to facilitate communication.

25. Can you implement continuous development (CD) and continuous integration (CI) in Docker?
Yes, you can. You can run Jenkins on Docker and use Docker Compose to run integration tests.

26. Finally, how do you create a Docker swarm?
Use the following command: docker swarm init –advertise-addr <manager IP>



 */
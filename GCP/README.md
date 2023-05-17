# GCP
- Google Cloud Platform
- 200+ Services
- GCP ACE Exam expects to know 40+ services, indepth knowledge. Decision making ability for situations. 
- Challenging certification, work hard! Practice
    - `Active Learning` think and take notes
    - `Review` the presentation every once in a while
    - Take your time. Dont rush. Do not hesitate to revise.
    - It will be boring, so try to make it fun

# Cloud
- Before Cloud
    - A web commerce App or a suddenly popular startup needs to handle a sudden huge amount of load. Before Cloud, the solution was to procure(buy) infrastructure assuming they would be successful
    - High Cost of procuring infrastructure
    - Needs ahead of time planning(guess the future)
    - Low infrastructure utilization(PEAK LOAD Utilization)
    - Dedicated infrastructure maintenance team (difficult to affor for startups)
- After Cloud
    - Silver Lining - Provisioning(renting) resources when you need them and releasign back when not needed
    - On demand resource provisioning
    - Also called Elasticity
    - Trade capital expense for variable expense
    - Benefit from massive economics of scale
    - Stop guessing capacity
    - Stop spending money running and maintaining data centers
    - Go global in minutes

# GCP Coogle Cloud Platform
- One of the top 3 cloud service provider(besides AWS and Azure)
- Provides a no of services(200+)
- Reliable, Secure, and highly performant.
    - Infrastructure that powers 8 services with over 1 Billion Users: Gmail, Google Search, YouTube etc.
- CLeanest Cloud
    - Net carbon neutral cloud (electricity used matched 100% with renewabel energy)

# Regions and Zones
- Imagine you have application deployed in a data center in london.
- What would be the challenges?
    - Challenge 1: Slow access for users from other parts of the world(High Latency)
    - Challenge 2: What if the data center crashes?
         - Application goes down (low avaibility)
- Solution 1
    - Multiple data center
        - Lets add one or more data centers in London
        - Challenge 1: Slow access for users from other parts of the world(High Latency)
        - Challenge 2: Above will be solved
        - Challenge 3: What if entire region of London is unavailable?
- Solution 2
    - Multiple Region
        - Lets replicate London Infra in Mumbai.
        - Challenge 1: Partly solved, other world users will have high latency, maybe add more regions if need?
        - Challnege 2: Solved
        - Challenge 3: Solved
- Its not easy to setup multi region, multiple data centers, but with Cloud Solution it can be made much more convenient.

# Regions
- Imagine setting up data centers in different regions around the world
- Google provide 20+(and expanding) regions around the world
- Region: Specific geographic location host the resources
- Advantages
    - High Avaibility
    - Low latency
    - Global footprint
    - Adhere to government regulations

# Zones
- Each region have three or more zones
- Zones are used to achieve high avibility in the same region(or geographic location eg_ Mumbai)
- Increased avaibility and default tolerance within the same region
- **Clusters** Distinct physical infrastructure that is housed in a data center. Each zone have one or more discrete clusters. 
- Zones in a region are connected through low latency links.
- Example
    - Region Code: us-west1
    - Region: The Dalles, Oregeon, North America, 
    - Zones: 3
    - Zones List: us-west1-a, us-west1-b, us-west1-c





# Compute Engine Fundamentals
- Virtual servers for application
- In corporate data centers, applications are deployed to physical servers.
- Where do you deply applications in the cloud?
    - Rented Virtual Servers
    - Virtual Machines: Virtual Servers in GCP
    - Google Compute Engine (GCE): Provision and Manage Virtual Machines
- Compute Engine Features
    - Create and Manage lifecycles of Virtual Machines (VM) instances
    - Load balancing and auto balancing for multiple VM instances
    - Attach storage (and networkstorage) to our VM instances.
    - Maange network connectivity and configuration for your VM instances

# Compute Engine Hands On
- Create an VM instance with Compute Engine. (Caution - Stop it when you are not using, else credit will be deducted.)
- Compute Engine Machine Family
    - What type of hardware you wanr uour workloads on?
    - Different machine families for different workloads
        - General Purpose(E1, N2, N2D, N1):
            - Best price-performance ration
            - Web and application servers, small medium databases, dev environments
        - Machine Optimised(M2, M1)
            - Ultra High Memory workloads
            - Large in-memory databases and in-memory anlytics
        - Compute Optimised(C2):
            - Compute intensive workloads
            - Gaming applications
- Compute Engine Machine Type
    - How much CPU, memory, or disk ?
        - Variety of machine types are available for each machine family.
        - eg: e2-standard-2
            e2: Machine Type Family
            standard: Type of workload
            2: No of CPUs
        - Memory, disk and networking capabilities increase along with vCPUs
- Image
    - What OS and software to run on the VM instance?
    - Types of Images
        - Public Images
            - Provided and maintaned by Google or Open Source communities or third party vendors
        - Custom Images
            - Created by you for your projects
- External IP is the IP with which you can communicate with Internet.
- Once instance is created, you can nonnect to it via SSH.
- SSH Commands(for Linux Distro)
    - sudo su (get root access)
    - apt update
    - apt install apache2
    - ls /var/www/html
    - echo "Hello world from $(hostname) $(hostname -i)" > /var/www/html/index.html
    - sudo service apache2 start (well I didnt used this comd and still the server was running ;/)
    - Now if you hit external IP from any system, you will render this index.html


## A quick Break
- SSH
    - Secure Shell is a cryptographic network protocol for operating network services securely over an unsecured network.
    - Typical applications include remote command line, login, and remote commnd execution. 
- Command Line Tools/ Bash/ Shell
    - https://devblogs.microsoft.com/commandline/windows-command-line-backgrounder/
    - Commands
        - whoami
        - pwd (absolute path)
        - ls (show all files AND with -a also shows hidden file: ls -a)
        - cd <DirectoryName / ..>
        - mkdir <DirectoryName> (Creates an empty directory)
        - rmdir <DirectoryName> (Deletes ONLY empty folder/directory)
        - rm -r <DirectoryName> (Deletes directory with its content)
        - touch <FileName> (Creates a new file)
        - cp <path/path/fileName> <path/to/copy>
        - mv <path/path/fileName> <path/to/move>
        - echo content > <FILENAME> (Writes/ Overrides in a file)
        - cat <FILENAME> (displays content of file)
        - namo <FILENAME> (edits/creates a new file)
        - sudo (SuperUserDo, any command with administrative or root privilages)
        - df -m (check disk space in MegaBytes(-m))
        - du <DirectoryName> (check directory usage, size) 
        - uname (Linux distros information)
        - chmod +x <FILENAME> (make a file executable) eg_ chmod +x file1.py => Now you can directly run file1.py in shell
        - hostname (Your identification name in host/network)
        - ping <URL/IP> (check connection to a serevr) eg_ ping google.com
        - clear (clear the console)
        - sudo su (switch user, to become root user)
        - apt update (pull in all latest updates)
        - apt install apache2 (install package apache2)

# Internal and External IP
- External (Public) IP addresses are Internet addressable.
- Internal (Private) IP Addresses are internal to corporate network.
- You CANNOT have two reesources with same public(extenral) IP address
    - However two different corporate network CAN have resources with same(private) IP address
- All VM instances are assigned with atleast one internal(private) IP
- Creation of External IP addresses can be enabled for VM instances
    - CAUTION - When VM instances are stopped, External IP is lost! Basically the same IP address is not guaranteed, it can be allocated to other running resources.

# Static IP Address
- How to get a CONSTANT IP Address for a VM instance?
    - Without static IP, we have ephemeral(temporary) IP address.
    - Quick and dirty way is to assign a Static IP address to the VM
        - Go to VPC Network > External IP Addresses > Reserve a static Address
            - Network Service Tier: Premium/ Standard
            - IP Version: IPv4/IPv6
            - Type: Regional/Global
        - If you are using type `region`, be mindful to use the same region as that of the VM instance!
        - Now go to VM instances and `change` the VM IP to static
    - The best way is to change IPs through Load Balancers
- Static IP can be switched between VM instances.
- Static IP remains attached even when insatnce is stopped
- You are billed for static IP even when you are not using it. Surprisingly, the bill for not using is more than bill for using it.
    - Make sure to release static IP when you are not using it.
- Services are NOT FREE, you are billed! whenever not using stop them!

# Simplify Web Server setup in VM instance
- Ways
    - Startup Script
        - **Bootstrapping** Install patches or softwares when a VM instance is launched.
        - While creating a VM instance, click `Networking, Disks, Security, Management, Sole-tenacy` and go to `management` tab and add script. for example like-
        ```bash
        #!/bin/bash # Caution- Do not forget to add this comment, it is used to identify bash
        apt update 
        apt -y install apache2 # -y is YES, install without asking
        echo "Hello world from $(hostname)$(hostname -I)" > /var/www/html/index.html
        ```
    - Instance Template
        - Define machine type, image, labels, startup scripts and other properties for reuse!
        - Used to create VM instances and managed instance groups
        - CANNOT be UPDATED!
            - To make a copy, change an existing template and modify it.
        - (Optional) Image family can be specified (example debian 9)
            - Latest non deprecate version of the family is used
        - No cost for creating instance template, only charged when you create a instance of the template.
        - Go to Compute Engine > Virtual Machines > Instance templates > Add values, for startup script, go to Management and startup script for automation   
            ```bash
            #!/bin/bash # Caution- Do not forget to add this comment, it is used to identify bash
            apt update 
            apt -y install apache2 # -y is YES, install without asking
            echo "Hello world from $(hostname)$(hostname -I)" > /var/www/html/index.html
            ```
        - Now go to actions in the row of instance template and create VM where all the data is prepopulated from instance, you can add required regions.
        - Pre-emptive VMs [link](https://www.youtube.com/watch?v=ljol9IipvWs)
        - **Errors**
            - If the VM instance template have set with `aviability policies` i.e. (ie Preemptibility as 'off' & On host maintenance as 'Terminate VM instance'), and the VM created with this template having different policies might result in error as VM instance templates are immutable.
            - [Error](https://groups.google.com/g/google-cloud-dev/c/niZMjISqtTo?pli=1)
    - Custom Image
        - Installing OS patches and softwares at the lauch of VM instances increases bootup time.
        - How about creating a custom image with OS patches and softwares pre-installed?
            - Can be created from an instance, a persistent disk,  a snapshot, another image, or a file  in Cloud Storage
            - Can be shared across projects
            - (Recommendation) Deprecate old images (and specify replacement time)
            - (Recommendation) Hardening an image: Customise images to your corporate security standards.
        - Prefer usign Custom Image to Startup Script.
        - Demo
            - Go to `Storage` > `Disks` (this is the harddisk for your VM)
            - All running instances will be listed here
            - Recommendation: Stop all instances before creating an image from them
            - Now when you create a cusutom image, it will be listed in `Storage` > `Images` alongside public available images.
            - Now you can create instance from the custom image. OR you can also create a instance template based on image.
            - Copy an existing VM instance template and add image(Custom Boot Disk) to it to create a new template. Now as you copied the boot disk with an existing template, you don't need to add startup script for installing apache2 as its already installed in boot disk. So remove it from startup script, you may change the index.html if need. And start the server
                - ```bash
                    #!bin/bash
                    echo "Hi" > /var/www/html/index.html
                    service apache2 start
                  ```

# Quiz
- Static IP CAN be switched to another VM instance in the same project!

# Google Compute - Cost and Performance Optimization
- **Sustained Use Discount**
    - `Automatic DIscounts` for running VM instances for significant portions of the billing month. 
        - Example: If you se N1, N2 machine type for more than 25% of the month, you get a 20% to 50% discount on every incremental minute.
        - Disxount increases with usage
        - No action required on your part!
    - Applicable for instances created by Google Kubernetes Engine and Compute Engine
    - RESTRICTION: Does NOT apply on certain machine types(example E2 and A2)
    - RESTRICTION: Does NOT apply to VMs created by App Engine flexible and DataFlow
- **Commited Use Discount**
    - Go to `Virtual Machine` > `Commited Use Discounts`
    - For workloads with predictable resource needs.
    - Commit for 1 or 3 years.
    - Up to 70% discount based on machine type and GPUs
    - Applicable for instances created by Google Kubernetes Engine and Compute Engine
    - RESTRICTION: Does NOT apply on certain machine types(example E2 and A2)
    - RESTRICTION: Does NOT apply to VMs created by App Engine flexible and DataFlow
- Saving Costs with pre-emptible VMs
    - Short lived cheaper(upto 80%) compute instances
        - Can be stopped by GCP any time(preempted) within 24 hours
        - Instances get 30 seconds warning(to save anything they want to save)
    - Use preempt VM's if
        - Your application is fault tolerant
        - You are very cost sensitive
        - Your workload is NOT immediate
        - Example: Non-immediate batch processing
    - RESTRICTIONS:
        - Not always available
        - NO SLA and CANNOT be migrated to regular VMs
        - NO Automatic Restarts
        - Free Tier creits not applicable
- Understand Billing for Google Compute Engine GCE VMs
    - You are billed by second(after a min of 1 min)
    - You are not billed for compute when a compute instance is stopped
        - However, you will be billed for any storage attached to it!
    - RECOMMENDATION: Always create Budget Alerts and make use of Budget Exports to stay on top of billing!
    - Go to Billing and create budget: billing threshold for alerts.
    - What are the ways you can save money?
        - Choose the right machine type and image for your workload
        - Be aware of the discounts available:
            - Sustained Use discounts
            - COmmitted use discounts
            - Discounts for preemptible VM instances
- Achieving high avaibility with Live Mighration and Automatic Restart
    - Ho do you keep your VM instances running when a host  sytem needs to be updated(a software or a hardware update needs to be performed)
    - Live Migration
        - Your running instance is migrated to another host in the same zone
        - Does NOT change any attribute or properties of VM
        - Supported for instances with local SSDs
        - No support for GPUs and preemptible instances
    - Important configuration `Avibility Policy`
        - On host maintenance: What should happen during periodic infra mainrenance?
            - Migrate(default): Migrate VM instance to other hardware
            - Terminate: Stop the VM instance
        - Automatic Restart:L Restart VM instances if they are terminated due to non-user-initiated reasons (maintenance event, hardware failure)
- Compute Engine Features: Custom Machine Types
    - What do you do when predefined VM options are NOT appropriate for your workload?
        - Create a machine type customised to your needs ( a Custom Machine Type)
    - Custom Machine Type: Adjust vCPU Memory and GPUs
        - Choose between E2, N2, or N1 machine types
        - Support a wide variety of Operating Systems, CentOS, Debian, Red Hat, ubuntu, WIndows, etc
        - Billed per vCPUs, memory provisioned to each instance
            - Example Hourly Price: $0.033174/vCPU + $0.004446/GB
- Compute Engine Features: GPUs
    - How do you accelerate math intensive and graphic intensive workloads for Ai/MLetc?
    - Add a GPU to your virtual machine
        - High performance for math intensive and graphic intensive workloads
        - Higher cost
        - (Remember) USe images with GPU libraries(Deep Learning) installed
            - Otherwise, GPU will not be used
        - GPU Restrictions:
            - NOT supported on all machine types (For example, not supported on shared-core or memory optimised machine types)
            - On host maintenance can only have the value "Terminate the VM instance"
    - Recommended **Avaibility Policy** for GPUs
        - Automatic Restart: On
- Quick Review
    - A virtual machine is associated with a project.
    - Machine type avibility vary from region to region
    - You can only change the machine type(adjust the number of vCPUs and memory) of a stopped instance. You can not change machine type of running instance.
    - VMs can be filterred by various properties(name, zone, machine type, network, label, intenal/ external ip etc)
    - Instances are specific to Zones(Run in specific zone(in specific region)). But images are global. Instance templates are also global unless you provde specific zonal resources in template.
    - Automatic Basic Monitoring is enabled. (Default metriccs like CPU utilization, Network bytes: in/out, Disk Throughputs/IOPS). However if for memory utilization adn Disk Space Utilization, CLoud Monitoring agent is needed.
- Virtual Machine: Best Practices
    - Choose Zone and Region based on :
        - Cost, Regulations, Avaibility Needs, Latency, Specific Hardware Needs
        - Distribute instances in multiple zones and regions for high avaibility.
    - Choose Right Machine for your needs
        - Play with them to find out the right machine
        - Use GPUs for math and graphic intensive applications.
    - Use preemptible instance for fault-tolerant, NON time critical workloads.
    - Use labels to indicate environment, team, business unit etc.
- GCP VM Scenarios
    - What are pre-requisotes to be able to create a VM instance?
        - 1. Project 2. Billing Account 3. Compute Eingine APIs should be enabled
    - You want dedicated hardware for your compliance, licensing, and managemen needs?
        - Sole-tenant nodes
    - I have 1000s of VM and I want to automate OS patch management, OS inventory management and OS configuration management(manage software installed)
        - Use `VM Manager`
    - You want to login to your VM instance to install software
        - You can SSH into it.
    - You do not want to expose  a VM to internet
        - Do NOT assign an external IP Address
    - You wan to allow HTTP traffic to your VM
        - Configure firewall rules
- Question: Which of the metrics available by default (without installing Cloud Monitoring agent) for a Compute Engine Virtual Machine Ans: CPU Utilization


## A quick Break
- CPU and GPU [link](https://www.intel.com/content/www/us/en/products/docs/processors/cpu-vs-gpu.html)
    - Both are critical computing engines on silicon based microprocessors. 
    - But both have different architecture and used for different purposes.
    - The **CPU** is suited to a wide variety of workloads, especially those for which latency or per-core performance are important. A powerful execution engine, the CPU focuses its smaller number of cores on individual tasks and on getting things done quickly. This makes it uniquely well equipped for jobs ranging from serial computing to running databases.
    - **GPUs** began as specialized ASICs (Application Specific Integrated Chip) developed to accelerate specific 3D rendering tasks. Over time, these fixed-function engines became more programmable and more flexible. While graphics and the increasingly lifelike visuals of today’s top games remain their principal function, GPUs have evolved to become more general-purpose parallel processors as well, handling a growing range of applications.






















@section()
# Gcloud

## Gcloud
- Command line interface to interact with Google Cloud Resources
- Most GCP Services can be manged from CLI using Gcloud
    - Compute Engine Virtula Machines
    - Managed Instance Groups
    - Databases
    - and ...many more
- You can create/delete/update/read existing resources and perform action like deployment as well.
- (Rmemeber) Some GCP services have specific CLI tools
    - Cloud Storage: gsutil
    - CLoud BigQuery: bq
    - Cloud Bigtable: cbt
    - Kubernetes: kubectl(in addition to Gcloud which is used to manage clusters)
- Installation
    - Gcloud is part of Google Cloud SDk
        - Cloud SDK reuires Python
        - Instructions [link](https://cloud.google.com/sdk/docs/install)
    - You can also use Gcloud from cloud shell. Cloud shell symbol is at the header to activate and use it. Cloud shell have weekly usage limit of 50 hours
    - Connecting to GCP
        - `gcloud init`: initialize or reinitialize gcloud
            - authorise gcloud to use your user account credentials
            - Setup configuration
                - Includes current project, default zones
        - `gcloud config list`: list all properties of the active configuration

## Gcloud commands
gcloud config list project  // core/project, you cant directly use regions, it comes under compute/region
gcloud config configurations list
gcloud config configurations activate my-default-configuration
gcloud config list
gcloud config configurations describe my-second-configuration
gcloud compute instances list
gcloud compute instances create
gcloud compute instances create my-first-instance-from-gcloud
gcloud compute instances describe my-first-instance-from-gcloud
gcloud compute instances delete my-first-instance-from-gcloud
gcloud compute zones list
gcloud compute regions list
gcloud compute machine-types list
 
gcloud compute machine-types list --filter zone:asia-southeast2-b
gcloud compute machine-types list --filter "zone:(asia-southeast2-b asia-southeast2-c)"
gcloud compute zones list --filter=region:us-west2
gcloud compute zones list --sort-by=region
gcloud compute zones list --sort-by=~region
gcloud compute zones list --uri
gcloud compute regions describe us-west4
 
gcloud compute instance-templates list
gcloud compute instance-templates create instance-template-from-command-line
gcloud compute instance-templates delete instance-template-from-command-line
gcloud compute instance-templates describe my-instance-template-with-custom-image

## PLaying with GCloud config set
- gcloud config set core/project VALUE
                    compute/region VALUE
                    compute/zone VALUE
                    core/verbosity VALUE(debug)
- Take help --help
    gcloud config list --help
- Opposite gcloud config unset <project, compute/region,zone etc>


## Managing multiple Configurations in Gcloud

## Understanding command structure in Gcloud to play with Services

## PLaying eith GCloud compute instance create

## Setting default Region and Zones for Compute Engine

## Explring Gcloud Commands - list and describe

## 
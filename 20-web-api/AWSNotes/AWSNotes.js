const AWSDict = {
    AppStream : {
        Is : 'Used to Provide access to applications from any location',
    },
    Artifact : {
        Is : 'Used to Download AWS Security & Compliance Documents',
    },
    Athena : {
        Is : 'Query Service, allows for Data Analysis in S3 by using standard SQL',
    },
    Audit_Manager : {
        Is : 'Used for auditing AWS usage and building audit reports for risk and compliance' 
    },
    auto_scaling_group : {
        Is : 'Requires a Launch Configuration based on what Resources would be Provisioned to meet Predefined Parameters'
    },
    availability_zones : {
        Is : 'A set of One or more Data Centers, resouces deployed to multiple availability zones for fault-tolerance',
    },
    Budgets : {
        Is : '',
    },
    Certificate_Manager : {
        Is : 'Used to Store and Provision SSL/TLS Certificates, Can directly import Certificates to Elastic Load Balancer'
    },
    CloudFormation : {
        Is : 'Provides Templates to Provision and Configure Resources',
    },
    CloudFront : {
        Is : 'Content Distribution, Uses Edge Locations, Improving Performance for both Cacheable and Dynamic (API) content; Pay as you go',
    },
    CloudTrail : {
        Is : '',
    },
    CloudWatch : {
        Is : '',
        Anomaly_Detection : 'Machine-Learning feature for CloudWatch Metrics',
    },
    CodeCommit : {
        Is : 'Managed Source Control, Used as a Data Store for Source Code, Binaries, Scripts, HTML and Images; Encrypts files, '
    },
    CodeDeploy : {
        Is : 'Automates Application Deployments to EC2 Instances, On-Premise Instances, Serverless Lambda Functions, or ECS'
    },
    CodeStar : {
        Is : 'Unified User Interface for Managing Development Activities',
    },
    Cognito : {
        Is : 'Used to Control Access to AWS Resources from an application',
        Identity_Pools : 'Authorizes Access, Used to Provide Priveledge Credentials for Accessing AWS Services',
        User_Pools : 'Used to Manage User Authentication to Mobile Applications, User Sign-In, Can Scale Up to Millions of Users',
    },
    Config : {
        Is : 'Used to Audit and Evaluate Configurations of resources, and retrieve configurational changes made to resources',
    },
    consolidated_billing : {
        Is : ''
    },
    cost_allocation_tags : {
        Is : ''
    },
    decoupling : {
        Is : 'Ensures that components of applications can be managed and maintained separately',
    },
    Detective : {
        Network_reachability_rules : 'Performs Network Accessbility Checks on EC2 Instances',
        Host_assessment_rules : 'Used to Identify Root Cause of Potential Security threat; Machine-Learning Algorithm that Automatically Collates Log Data to Derive Patterns for Graph Theory and Analysis, Allowing for efficient conduction of security investigations',
    },
    Directory_Service : {
        Is : 'Provides Multiple ways to Use Cloud Directory and MS Active Directory with other AWS Services',
    },
    EBS : {
        Is : '',
        Volumes : 'Can Be Attached to EC2 Instances to Store Data; Primary Storage for data that requires Frequent Updates',
        Snapshots : '',
    },
    EC2 : {
        Is : '',
        Full_Upfront_Reserved : 'Instances for specified time at reduced cost',
        Partial_Upfront_Reserved : '',
        On_Demand : '',
        Spot_Instances : 'For instances that can be Interrupted and Resumed at any time, Price varies upon demand',
    },
    EFS : {
        Is : '',
    },
    Elastic_Load_Balancer : {
        Is : 'Distributes Load to Multiple Instances within a particular Region',
        Application_Load_Balancer : 'ISO 7, Uses URL Path-Based Routing, Uses target groups (EC2s, auto-scaling groups, ECS) that keep track of instances and intelligently route requests based on the load within a specific group',
        Network_Load_Balancer : 'ISO 4, Distributes load based on IP addresses and destination ports, not based on application availability',
        Classic_Load_Balancer : 'Provides basic capabilities that will distribute traffic equally among many servers'
    },
    elasticity : 'Creates systems that scale to the required capacity based on changes in demand',
    Firewall_Manager : {
        Is : 'Providing a centralized Point for Setting Firewall Rules Across Different Resources administering WAF',
    },
    Glacier : {
        Is : 'Used for Archival and Long-Term Storage; Can receive authenticated REST requests with checksum',
        Glacier_console : 'Used only for creating Glacier vaults, not for upload of data directly into Glacier',
    },
    Global_Accelerator : {
        Is : 'Routes traffic to the Optimal Regional Endpoint, Increasing the Availability of the Application; Provides static IP addresses for fixed entry point to applications',
        Diagram: 'User => Edge Location => AWS Global Accelerator => Endpoint Group => Endpoints',
    },
    Glue : {
        Is : '',
    },
    GuardDuty : {
        Is : 'Threat-detection Service, Monitors logs from CloudTrail Event logs, VPC Flow logs, and DNS logs to Detect any malicious activity',
    },
    IAM : {
        Is : 'Control Access to AWS Services and Resources, Rule of Least-Priviledge',
    },
    Inspector : {
        Is : 'Used to Inspect EC2 Instances against common Threats',
    },
    Kinesis : {
        Is : '',
    },
    Lambda : {
        Is : 'Run functions without provisioning servers, only pay for compute time used',
    },
    License_Manager : {
        Is : 'Used for Differentiating and Maintaining Third-Party Software Provisioning Vendor Licenses, Decreases risk of License Expirations',
    },
    Lifecycle_Manager : {
        Is : 'Creates Lifecycle Policies for Specified Resources to Automate Operations',
    },
    Macie : {
        Is : 'Matches and Discovers Sensitive Data such as Personally Identifiable Information',
    },
    MFA : {
        Is : 'Adds another layer of protection on top of usernames and passwords'
    },
    Organizations : {
        Is : '',
    },
    Partner_Solutions : {
        Is : '',
    },
    QuickSight : {
        Is : 'Fully-Managed, Insightful Business Intelligence Reporting including Graphical and Interactive Dashboards',
    },
    Redshift : {
        Is : 'Data Warehouse',
    },
    regions : {
        Is : '',
    },
    Resource_Center : {
        Is : 'Repository of Tutorials, Whitepapers, Digital Training and Project Use-Cases',
    },
    Route53 : {
        Is : 'DNS Management, Traffic Management, Routing, Global, Highly-Scalable DNS Service, Used for Multiregion Deployment',
        Diagram : 'User (requesting domain) => DNS Resolver (requesting IP) => Route 53',
        Geolocation_Routing_Policy : 'Route traffic to resources based on user location',
        Geoproximity_Routing_Policy : 'Route traffic based on location of resources',
        Latency_Routing_Policy : 'Routing based on lowest latency to resources from user location',
        Multivalue_Answer_Routing_Policy : 'Responds with multiple (up to 8) records to any Route 53 query',
        Simple_Routing_Policy :  'Suitable for a single resource, not by location',
        Weighted_Routing_Policy : 'Round Robin, Divert traffic in proportions to multiple resources',
        Failover_Routing_Policy : 'Routing to a secondary resource only in case of failure of the primary',
    },
    scaling : {
        Up : 'Adds More Resources to an Instance, Does not provide more availability, Not a best-practice',
        Out : 'Adds More Instances, Responds to Demand, More Cost Effective'
    },
    SDK : {
        Is : 'Used to develop applications for Glacier, mapping the REST API and providing objects to construct requests and process responses',
    },
    Secrets_Manager : {
        Is : 'Used to Implement Secrets Keys Rotation Policy',
    },
    Security_Hub : {
        Is : 'Aggregates Alerts from Various Services such as GuardDuty, Inspector, Macie, and Partner Solutions',
    },
    Service_Catalog : {
        Is : 'Allows Organizations to Create and Save their own IT Service Catalogs, Must be Approved by AWS, can be Multi-tiered Application Architectures',
    },
    SES : {
        Is : '',
    },
    Shared_Responsibility_Model : {
        Is : '',
        AWS : 'Infrastructure Layer, Patching Host of OS/Configuration for S3',
        Customer : 'Resources they have launched, Patching of Guest OS Deployed on an EC2 instance',
    },
    Shield : {
        Is : 'DDoS Protection Service',
    },
    Single_Sign_On : {
        Is : 'Authenticates Employees for Accessing AWS Services',
    },
    SNS : {
        Is : 'Service for Push Notifications',
    },
    SQS : {
        Is : '',
    },
    Storage_Gateway : {
        Is : '',
    },
    Support : {
        Is : '',
    },
    Systems_Manager_Parameter_Store : {
        Is : 'Used to Store Configuration Data and Passwords in Plain or Encrypted Text',
    },
    S3 : {
        Is : 'Can assign URL to each Object for Download',
        Lifecycle_Policies : 'Automatically reviews items in S3 buckets, having them moved to Glacier (transition) or being deleted from the S3 (expiration)',
        Transfer_Acceleration : 'Fast, Easy and Secure File Transfers Over Long Distances between Client and S3; Takes advantage of CloudFront Edge Locations',
    },
    Trusted_Advisor : {
        Is : 'Provides Recommendations to Optimize Environment following AWS Best Practices, Reducing cost, Increasing performance and Improving Security',
        Notification : 'Set up in Dashboard providing a list of recipients and selecting resource items for which status is required',
    },
    VPC : {
        Is : '',
    },
    VPN : {
        Is : '',
    },
    Well_Architected_Tool : {
        Is : 'Used for Architectural Best Practices and Guidance'
    },
    WorkLink : {
        Is : 'Used by Internal Employees to Securely Access Interal Websites and Applications using Mobile Phones',
    },
    WorkSpaces : {
        Is : 'Managed Service for Virtual desktops for remote users, provides both Windows and Linux desktops',
    },
}
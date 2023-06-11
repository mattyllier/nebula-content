const AWSDict = {
    Artifact : {
        Is : 'Used to Download AWS Security & Compliance Documents',
    },
    Audit_Manager : {
        Is : 'Used for auditing AWS usage and building audit reports for risk and compliance' 
    },
    EC2 : {
        Is : '',
        Spot_Instances : 'Price varies upon demand',
    },
    Route53 : {
        Is : 'DNS Management, Traffic Management, Routing, Global, Highly-Scalable DNS Service',
        Diagram : 'User (requesting domain) => DNS Resolver (requesting IP) => Route 53',
        Geolocation_Routing_Policy : 'Route traffic to resources based on user location',
        Geoproximity_Routing_Policy : 'Route traffic based on location of resources',
        Latency_Routing_Policy : 'Routing based on lowest latency to resources from user location',
        Multivalue_Answer_Routing_Policy : 'Responds with multiple (up to 8) records to any Route 53 query',
        Simple_Routing_Policy :  'Suitable for a single resource, not by location',
        Weighted_Routing_Policy : 'Round Robin, Divert traffic in proportions to multiple resources',
        Failover_Routing_Policy : 'Routing to a secondary resource only in case of failure of the primary',
    },
    Trusted_Advisor : {
        Is : '',
    },
    Well_Architected_Tool : {
        Is : 'Used for Architectural Best Practices and Guidance'
    },
}
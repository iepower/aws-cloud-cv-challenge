# AWS Cloud Resume Challenge

[![Upload Website](https://img.shields.io/badge/Upload%20Website-passing-brightgreen)](#)

This is my attempt at the cloud resume challenge in AWS. What is Cloud Resume Challenge? – [The Cloud Resume Challenge](https://cloudresumechallenge.dev/) is a multiple-step resume project which helps build and demonstrate skills fundamental to pursuing a career in Cloud. The project was published by Forrest Brazeal.

## Architecture

Here is the architecture for my Cloud Resume project:

![Architecture Diagram](images/Architecture.png)

## Key Features

- **Frontend:** A responsive resume website built with HTML, CSS, and JavaScript, hosted on an AWS S3 bucket with static website hosting and accelerated through AWS CloudFront for global content delivery.
- **Serverless Backend:** An AWS Lambda function for implementing a visitor counter, integrated with DynamoDB to track page views.
- **Infrastructure-as-Code:** Leveraged Terraform to automate the provisioning of cloud resources, including S3 buckets, Lambda functions, DynamoDB, CloudFront distributions, AWS Certificate Manager (ACM) for SSL/TLS, IAM roles and policies, and more.
- **Secure DNS and Protection:** Used Cloudflare for domain registration, DNS management, proxying traffic, and applying Web Application Firewall (WAF) rules to protect the website from threats.
- **CI/CD:** Automated deployment using GitHub Actions to build, test, and deploy the website and backend services, ensuring quick and reliable updates.

## Technologies Used

- **AWS Services:** S3, Lambda, DynamoDB, CloudFront, Certificate Manager (ACM), AWS Identity and Access Management (IAM)
- **DevOps:** Terraform (Infrastructure as Code), GitHub Actions (CI/CD)
- **Security and DNS:** Cloudflare Registrar, Cloudflare Proxy with Web Application Firewall (WAF), Github Secrets
- **Frontend:** HTML, CSS, JavaScript

## Live Demo
[https://cv.mypuhi.org](https://cv.mypuhi.org)

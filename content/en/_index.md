---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: github.quincy-u.myprofile
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'
  - block: experience
    id: research
    content:
      title: Research Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Robot-Assisted Vascular Shunt Insertion with the dVRK Surgical Robot
          company: Prof. Ken Goldberg @UC Berkeley & Prof. Animesh Garg @Georgia Tech
          company_url: ''
          company_logo: robot-hand
          location: UC Berkeley, BAIR Lab & Georgia Tech, PAIR Lab
          date_start: '2023-07-31'
          date_end: '2023-10-10'
          description: |2-
              * https://sites.google.com/berkeley.edu/ravsi
              * Paper accepted at JMRR 2023 
              * Research on Robot-Assisted Vascular Shunt Insertion with the dVRK Surgical Robot
        - title: (First Author) ORBIT-Surgical - An Open-Simulation Framework for Accelerated Learning Environments in Surgical Autonomy
          company: Prof. Ken Goldberg @UC Berkeley & Prof. Animesh Garg @Georgia Tech
          company_url: ''
          company_logo: robot-hand
          location: UC Berkeley, BAIR Lab & Georgia Tech, PAIR Lab
          date_start: '2022-11-01'
          date_end: '2023-09-30'
          description: |2-
              * https://orbit-surgical.github.io
              * First-Author paper under review at ICRA 2024
              * Research on Robot Learning For Surgical Manipulation Tasks With ORBIT (ORBIT-SURGICAL)
        - title: ORBIT - A Unified Simulation Framework for Interactive Robot Learning Environments
          company: Prof. Animesh Garg @Georgia Tech
          company_url: ''
          company_logo: robot-hand
          location: PAIR Lab
          date_start: '2021-07-01'
          date_end: '2022-11-01'
          description: |2-
              *  https://isaac-orbit.github.io/
              * Paper accepted at IEEE Robotics and Automation Letters (RA-L) and ICRA 2023
              * Develop simulation framework ORBIT for robot learning environments
        - title: Hybrid RL with Preference-Based Reward Learning
          company: Prof. Wen Sun @Cornell University
          company_url: ''
          company_logo: brain
          location: Cornell University
          date_start: '2023-06-12'
          date_end: ''
          description: |2-
              * Project in progress
              * Develop new preference-based reinforement learning algorithm.
    design:
      columns: '2'
  - block: collection
    id: publications
    content:
      title: Publication
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: experience
    id: work
    content:
      title: Work Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Software Development Engineer
          company: Amazon, AWS
          company_url: 'https://aws.amazon.com/'
          company_logo: aws
          location: Toronto, Canada
          date_start: '2023-07-31'
          date_end: ''
          description: Work on AWS directory service.
        
        - title: Software Development Engineer Intern
          company: Amazon, AWS
          company_url: 'https://aws.amazon.com/'
          company_logo: aws
          location: Toronto, Canada
          date_start: '2022-05-21'
          date_end: '2022-08-01'
          description: Develop the functionality of changing the priority of availability zones to use for AWS directory service.
        - title: Software Development Engineer Intern
          company: Kijiji Canada
          company_url: 'https://www.kijiji.ca/'
          company_logo: kijiji
          location: Toronto, Canada
          date_start: '2021-05-01'
          date_end: '2022-04-30'
          description: Work on backend development.
    design:
      columns: '2'
  - block: accomplishments
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Awards & Scholarships'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - organization: University of Toronto
          date_start: '2021-12-16'
          title: Robin Harris Memorial Scholarship
        - organization: University of Toronto
          date_start: '2020-11-19'
          title: Winifred Florence Hughes Scholarships 
        - organization: University of Toronto
          date_start: '2019-11-15'
          title: Innis College Anniversary Scholarship
        - organization: University of Toronto
          date_start: '2019-09-01'
          date_end: '2023-09-01'
          title: Dean’s List Scholar
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # Contact (add or remove contact options as necessary)
      email: quincyouxiang@gmail.com
      phone: 1(647)336-5110
      address:
        street: 73 Denison Ave
        city: Toronto
        Province: Ontario
        postcode: 'M5T2M7'
        country: Canada
        country_code: CA
      # Automatically link email and phone or display as text?
      autolink: true
    design:
      columns: '2'
---

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
      title: 科研经历
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: 科研助理
          company: 基于偏好的强化学习算法
          company_url: ''
          company_logo: brain
          location:
          date_start: '2023-06-12'
          date_end: ''
          description: |2-
              * 受Wen Sun教授指导
              * 项目进行中
              * 研究新的基于偏好的强化学习算法
        - title: 科研助理
          company: 基于医学机器的强化学习
          company_url: ''
          company_logo: brain
          location: BAIR Lab & PAIR Lab
          date_start: '2023-07-31'
          date_end: '2023-06-20'
          description: |2-
              * 受Ken Goldberg教授和Animesh Garg教授指导
              * 项目进行中
              * 在模拟环境中训练强化学习算法来完成医疗机械的任务。并且把训练的算法实施在现实的机械上。
        - title: 科研助理
          company: 医疗机械学习框架
          company_url: ''
          company_logo: robot-hand
          location: PAIR Lab & BAIR Lab
          date_start: '2022-11-01'
          date_end: '2023-06-09'
          description: |2-
              * 受Animesh Garg教授和Ken Goldberg教授指导
              * 论文审理中
              * (第一作者) 开发新的，专注于医疗机械的框架
        - title: 科研助理
          company: Isaac Orbit
          company_url: 'https://isaac-orbit.github.io/'
          company_logo: robot-hand
          location: PAIR Lab
          date_start: '2021-07-01'
          date_end: '2022-11-01'
          description: |2-
              * 受Animesh Garg教授指导
              * 论文已被IEEE Robotics and Automation Letters 2023录取
              * 开发机器人学习的模拟框架ORBIT
    design:
      columns: '2'
  - block: collection
    id: 论文
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
      title: 工作经历
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: 软件开发工程师
          company: 亚马逊云
          company_url: 'https://aws.amazon.com/'
          company_logo: aws
          location: 多伦多，加拿大
          date_start: '2023-07-31'
          date_end: ''
          description: 工作于亚马逊云directory service。
        
        - title: 软件开发工程师实习生
          company: 亚马逊云
          company_url: 'https://aws.amazon.com/'
          company_logo: aws
          location: 多伦多，加拿大
          date_start: '2022-05-21'
          date_end: '2022-08-01'
          description: 为directory service开发更换AZ优先极的功能。
        - title: 软件开发工程师实习生
          company: Kijiji 加拿大
          company_url: 'https://www.kijiji.ca/'
          company_logo: kijiji
          location: 多伦多，加拿大
          date_start: '2021-05-01'
          date_end: '2022-04-30'
          description: 负责后端开发。
    design:
      columns: '2'
  - block: accomplishments
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: '奖项与奖学金'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - organization: 多伦多大学
          date_start: '2021-12-16'
          title: Robin Harris Memorial Scholarship
        - organization: 多伦多大学
          date_start: '2020-11-19'
          title: Winifred Florence Hughes Scholarships 
        - organization: 多伦多大学
          date_start: '2019-11-15'
          title: Innis College Anniversary Scholarship
        - organization: 多伦多大学
          date_start: '2019-09-01'
          date_end: '2023-09-01'
          title: Dean’s List Scholar
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: 联系方式
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

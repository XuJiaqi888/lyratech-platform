// 学习资源数据
export const LEARNING_RESOURCES = {
  technicalSkills: {
    'JavaScript Fundamentals': {
      primary: [
        { name: 'W3Schools JavaScript Tutorial', url: 'https://www.w3schools.com/js/', type: 'tutorial' },
        { name: 'JavaScript.info', url: 'https://javascript.info/', type: 'guide' },
        { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'documentation' }
      ],
      video: [
        { name: 'JavaScript Full Course for Beginners', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', type: 'youtube' },
        { name: 'JavaScript Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', type: 'youtube' },
        { name: 'Modern JavaScript ES6+ Tutorial', url: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc', type: 'youtube' }
      ]
    },
    'React Basics': {
      primary: [
        { name: 'React Official Documentation', url: 'https://react.dev/learn', type: 'documentation' },
        { name: 'W3Schools React Tutorial', url: 'https://www.w3schools.com/react/', type: 'tutorial' }
      ],
      video: [
        { name: 'React Course for Beginners', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'youtube' },
        { name: 'React JS Full Course', url: 'https://www.youtube.com/watch?v=DLX62G4lc44', type: 'youtube' },
        { name: 'React Hooks Complete Tutorial', url: 'https://www.youtube.com/watch?v=O6P86uwfdR0', type: 'youtube' }
      ]
    },
    'Node.js Introduction': {
      primary: [
        { name: 'Node.js Official Getting Started', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', type: 'documentation' },
        { name: 'W3Schools Node.js Tutorial', url: 'https://www.w3schools.com/nodejs/', type: 'tutorial' }
      ],
      video: [
        { name: 'Node.js Full Course for Beginners', url: 'https://www.youtube.com/watch?v=RLtyhwFtXQA', type: 'youtube' },
        { name: 'Node.js Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', type: 'youtube' },
        { name: 'Node.js Express Tutorial', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE', type: 'youtube' }
      ]
    },
    'Database Design': {
      primary: [
        { name: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'tutorial' },
        { name: 'MySQL Official Documentation', url: 'https://dev.mysql.com/doc/', type: 'documentation' }
      ],
      video: [
        { name: 'SQL Tutorial - Full Database Course', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', type: 'youtube' },
        { name: 'Database Design Course', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc', type: 'youtube' },
        { name: 'MySQL Complete Tutorial', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', type: 'youtube' }
      ]
    },
    'API Development': {
      primary: [
        { name: 'MDN Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs', type: 'documentation' },
        { name: 'RESTful API Guide', url: 'https://restfulapi.net/', type: 'guide' }
      ],
      video: [
        { name: 'REST API Tutorial', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', type: 'youtube' },
        { name: 'Build a REST API with Node.js', url: 'https://www.youtube.com/watch?v=0oXYLzuucwE', type: 'youtube' },
        { name: 'API Development with Express', url: 'https://www.youtube.com/watch?v=L8KQLDNY79s', type: 'youtube' }
      ]
    },
    'Testing Fundamentals': {
      primary: [
        { name: 'Jest Getting Started', url: 'https://jestjs.io/docs/getting-started', type: 'documentation' },
        { name: 'MDN Testing Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing', type: 'guide' }
      ],
      video: [
        { name: 'JavaScript Testing Introduction', url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI', type: 'youtube' },
        { name: 'Unit Testing with Jest', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho', type: 'youtube' },
        { name: 'Testing React Applications', url: 'https://www.youtube.com/watch?v=3e1GHYEO2dw', type: 'youtube' }
      ]
    },
    'Version Control (Git)': {
      primary: [
        { name: 'Git Official Tutorial', url: 'https://git-scm.com/docs/gittutorial', type: 'documentation' },
        { name: 'GitHub Getting Started', url: 'https://docs.github.com/en/get-started', type: 'guide' }
      ],
      video: [
        { name: 'Git and GitHub for Beginners', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'youtube' },
        { name: 'Git Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=8JJ101D3knE', type: 'youtube' },
        { name: 'GitHub Tutorial', url: 'https://www.youtube.com/watch?v=0fKg7e37bQE', type: 'youtube' }
      ]
    },
    'Cloud Computing Basics': {
      primary: [
        { name: 'AWS Getting Started', url: 'https://aws.amazon.com/getting-started/', type: 'documentation' },
        { name: 'Microsoft Azure Learn', url: 'https://docs.microsoft.com/en-us/learn/azure/', type: 'tutorial' }
      ],
      video: [
        { name: 'AWS Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', type: 'youtube' },
        { name: 'Azure Fundamentals Course', url: 'https://www.youtube.com/watch?v=NKEFWyqJ5XA', type: 'youtube' },
        { name: 'Cloud Computing Full Course', url: 'https://www.youtube.com/watch?v=M988_fsOSWo', type: 'youtube' }
      ]
    },
    'Security Best Practices': {
      primary: [
        { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'guide' },
        { name: 'MDN Web Security', url: 'https://developer.mozilla.org/en-US/docs/Web/Security', type: 'documentation' }
      ],
      video: [
        { name: 'Web Security Tutorial', url: 'https://www.youtube.com/watch?v=VR_tKaHILUU', type: 'youtube' },
        { name: 'Cybersecurity Full Course', url: 'https://www.youtube.com/watch?v=inWWhr5tnEA', type: 'youtube' },
        { name: 'Secure Coding Practices', url: 'https://www.youtube.com/watch?v=F5KJVuii0Yw', type: 'youtube' }
      ]
    },
    'Performance Optimization': {
      primary: [
        { name: 'Web.dev Performance', url: 'https://web.dev/learn/performance/', type: 'tutorial' },
        { name: 'MDN Performance Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance', type: 'documentation' }
      ],
      video: [
        { name: 'Web Performance Optimization', url: 'https://www.youtube.com/watch?v=_srJ7eHS3IM', type: 'youtube' },
        { name: 'JavaScript Performance Tips', url: 'https://www.youtube.com/watch?v=Wm_xI7KntDs', type: 'youtube' },
        { name: 'Website Speed Optimization', url: 'https://www.youtube.com/watch?v=AQqFZ5t8uNc', type: 'youtube' }
      ]
    },
    'Data Structures': {
      primary: [
        { name: 'GeeksforGeeks Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/', type: 'tutorial' },
        { name: 'W3Schools Data Structures', url: 'https://www.w3schools.com/dsa/', type: 'tutorial' }
      ],
      video: [
        { name: 'Data Structures Full Course', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM', type: 'youtube' },
        { name: 'Data Structures and Algorithms', url: 'https://www.youtube.com/watch?v=8hly31xKli0', type: 'youtube' },
        { name: 'JavaScript Data Structures', url: 'https://www.youtube.com/watch?v=t2CEgPsws3U', type: 'youtube' }
      ]
    },
    'Algorithms': {
      primary: [
        { name: 'LeetCode Learn', url: 'https://leetcode.com/explore/learn/', type: 'interactive' },
        { name: 'Algorithm Visualizer', url: 'https://algorithm-visualizer.org/', type: 'tool' }
      ],
      video: [
        { name: 'Algorithms Course', url: 'https://www.youtube.com/watch?v=09_LlHjoEiY', type: 'youtube' },
        { name: 'JavaScript Algorithms', url: 'https://www.youtube.com/watch?v=KEEKn7Me-ms', type: 'youtube' },
        { name: 'Sorting Algorithms', url: 'https://www.youtube.com/watch?v=kPRA0W1kECg', type: 'youtube' }
      ]
    },
    'System Design': {
      primary: [
        { name: 'High Scalability', url: 'http://highscalability.com/', type: 'blog' },
        { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'github' }
      ],
      video: [
        { name: 'System Design Course', url: 'https://www.youtube.com/watch?v=bUHFg8CZFws', type: 'youtube' },
        { name: 'System Design Fundamentals', url: 'https://www.youtube.com/watch?v=SqcXvc3ZmRU', type: 'youtube' },
        { name: 'Scalable System Design', url: 'https://www.youtube.com/watch?v=xpDnVSmNFX0', type: 'youtube' }
      ]
    },
    'DevOps Fundamentals': {
      primary: [
        { name: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', type: 'documentation' },
        { name: 'Kubernetes Tutorials', url: 'https://kubernetes.io/docs/tutorials/', type: 'tutorial' }
      ],
      video: [
        { name: 'DevOps Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=9pZ2xmsSDdo', type: 'youtube' },
        { name: 'Docker Tutorial', url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI', type: 'youtube' },
        { name: 'Kubernetes Tutorial', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', type: 'youtube' }
      ]
    },
    'Microservices': {
      primary: [
        { name: 'Microservices.io', url: 'https://microservices.io/', type: 'guide' },
        { name: 'Spring Boot Guides', url: 'https://spring.io/guides/gs/spring-boot/', type: 'tutorial' }
      ],
      video: [
        { name: 'Microservices Tutorial', url: 'https://www.youtube.com/watch?v=rv4LlmLmVWk', type: 'youtube' },
        { name: 'Building Microservices', url: 'https://www.youtube.com/watch?v=CdBtNQZH8a4', type: 'youtube' },
        { name: 'Microservices with Node.js', url: 'https://www.youtube.com/watch?v=XUSHH0E-7zk', type: 'youtube' }
      ]
    },
    'Machine Learning Basics': {
      primary: [
        { name: 'Coursera ML Course', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
        { name: 'Scikit-learn Tutorial', url: 'https://scikit-learn.org/stable/tutorial/', type: 'tutorial' }
      ],
      video: [
        { name: 'Machine Learning Explained', url: 'https://www.youtube.com/watch?v=aircAruvnKk', type: 'youtube' },
        { name: 'Python Machine Learning', url: 'https://www.youtube.com/watch?v=7eh4d6sabA0', type: 'youtube' },
        { name: 'Machine Learning Course', url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg', type: 'youtube' }
      ]
    },
    'Mobile App Development': {
      primary: [
        { name: 'React Native Getting Started', url: 'https://reactnative.dev/docs/getting-started', type: 'documentation' },
        { name: 'Flutter Get Started', url: 'https://docs.flutter.dev/get-started', type: 'tutorial' }
      ],
      video: [
        { name: 'React Native App Tutorial', url: 'https://www.youtube.com/watch?v=ur6I5m2nTvk', type: 'youtube' },
        { name: 'Flutter Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU', type: 'youtube' },
        { name: 'Mobile App Development', url: 'https://www.youtube.com/watch?v=VPvVD8t02Z8', type: 'youtube' }
      ]
    },
    'Frontend Frameworks': {
      primary: [
        { name: 'Vue.js Tutorial', url: 'https://vuejs.org/tutorial/', type: 'tutorial' },
        { name: 'Angular Tutorial', url: 'https://angular.io/tutorial', type: 'tutorial' }
      ],
      video: [
        { name: 'Vue.js Course for Beginners', url: 'https://www.youtube.com/watch?v=4deVCNJq3qc', type: 'youtube' },
        { name: 'Angular Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=k5E2AVpwsko', type: 'youtube' },
        { name: 'Frontend Frameworks Comparison', url: 'https://www.youtube.com/watch?v=cuHDQhDhvPE', type: 'youtube' }
      ]
    },
    'Backend Architecture': {
      primary: [
        { name: 'Enterprise Patterns', url: 'https://martinfowler.com/eaaCatalog/', type: 'reference' },
        { name: 'Clean Architecture', url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html', type: 'article' }
      ],
      video: [
        { name: 'Backend Development Tutorial', url: 'https://www.youtube.com/watch?v=XBu54nfzxAQ', type: 'youtube' },
        { name: 'Clean Architecture Explained', url: 'https://www.youtube.com/watch?v=DJtef410XaM', type: 'youtube' },
        { name: 'Scalable Backend Architecture', url: 'https://www.youtube.com/watch?v=dmxzfCT7GRE', type: 'youtube' }
      ]
    },
    'Project Management Tools': {
      primary: [
        { name: 'Atlassian Jira Guide', url: 'https://www.atlassian.com/software/jira/guides', type: 'guide' },
        { name: 'Trello Guide', url: 'https://trello.com/guide', type: 'tutorial' }
      ],
      video: [
        { name: 'Agile Project Management', url: 'https://www.youtube.com/watch?v=502ILHjX9EE', type: 'youtube' },
        { name: 'Scrum Tutorial', url: 'https://www.youtube.com/watch?v=9TycLR0TqFA', type: 'youtube' },
        { name: 'Project Management Fundamentals', url: 'https://www.youtube.com/watch?v=ZKOL-rZ79gs', type: 'youtube' }
      ]
    }
  },

  behavioralQuestions: {
    'Leadership Scenarios': {
      primary: [
        { name: 'Harvard Business Review Leadership', url: 'https://hbr.org/topic/leadership', type: 'articles' },
        { name: 'MindTools Leadership', url: 'https://www.mindtools.com/pages/main/newMN_LDR.htm', type: 'guide' }
      ],
      video: [
        { name: 'What it takes to be a great leader | TED', url: 'https://www.youtube.com/watch?v=aUYSDEYdmzw', type: 'youtube' },
        { name: 'Great leadership starts with self-leadership | TEDx', url: 'https://www.youtube.com/watch?v=vlpKyLklDDY', type: 'youtube' },
        { name: 'Everyday leadership | Drew Dudley | TED', url: 'https://www.youtube.com/watch?v=uAy6EawKKME', type: 'youtube' }
      ]
    },
    'Team Collaboration': {
      primary: [
        { name: 'Google re:Work Teams', url: 'https://rework.withgoogle.com/subjects/teams/', type: 'guide' },
        { name: 'Atlassian Team Playbook', url: 'https://www.atlassian.com/team-playbook', type: 'playbook' }
      ],
      video: [
        { name: 'The power of vulnerability | Brené Brown | TED', url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o', type: 'youtube' },
        { name: 'Google: How to build perfect team | TEDx', url: 'https://www.youtube.com/watch?v=hHIikHJV9fI', type: 'youtube' }
      ]
    },
    'Problem Solving': {
      primary: [
        { name: 'Design Thinking Guide', url: 'https://www.ideou.com/blogs/inspiration/what-is-design-thinking', type: 'guide' },
        { name: 'MIT Problem Solving', url: 'https://web.mit.edu/~mi22295/www/problemsolving.html', type: 'article' }
      ],
      video: [
        { name: 'How to solve problems like a designer | TED-Ed', url: 'https://www.youtube.com/watch?v=_r0VX-aU_T8', type: 'youtube' },
        { name: 'Critical Thinking | TED-Ed', url: 'https://www.youtube.com/watch?v=dItUGF8GdTw', type: 'youtube' }
      ]
    },
    'Communication Skills': {
      primary: [
        { name: 'Toastmasters Education', url: 'https://www.toastmasters.org/education', type: 'program' },
        { name: 'Coursera Communication Specialization', url: 'https://www.coursera.org/specializations/improve-business-communication', type: 'course' }
      ],
      video: [
        { name: 'How to speak so that people want to listen | TED', url: 'https://www.youtube.com/watch?v=eIho2S0ZahI', type: 'youtube' },
        { name: 'The art of effective communication | TEDx', url: 'https://www.youtube.com/watch?v=HAnw168huqA', type: 'youtube' },
        { name: 'Your body language may shape who you are | TED', url: 'https://www.youtube.com/watch?v=Ks-_Mh1QhMc', type: 'youtube' }
      ]
    },
    'Conflict Resolution': {
      primary: [
        { name: 'Harvard Negotiation Project', url: 'https://www.pon.harvard.edu/category/conflict-resolution/', type: 'articles' },
        { name: 'MindTools Conflict Resolution', url: 'https://www.mindtools.com/pages/main/newMN_TCS.htm', type: 'guide' }
      ],
      video: [
        { name: 'Getting to yes in difficult situations | TED', url: 'https://www.youtube.com/watch?v=kxlSuW9wpEQ', type: 'youtube' },
        { name: 'How to deal with difficult people | TEDx', url: 'https://www.youtube.com/watch?v=hF_8ISN5vZI', type: 'youtube' },
        { name: 'The art of negotiation | Harvard Business School', url: 'https://www.youtube.com/watch?v=guOljrn2w_o', type: 'youtube' }
      ]
    },
    'Time Management': {
      primary: [
        { name: 'Getting Things Done', url: 'https://gettingthingsdone.com/getting-started/', type: 'methodology' },
        { name: 'Pomodoro Technique', url: 'https://francescocirillo.com/pages/pomodoro-technique', type: 'technique' }
      ],
      video: [
        { name: 'How to manage your time effectively | TED-Ed', url: 'https://www.youtube.com/watch?v=iDbdXTMnOmE', type: 'youtube' },
        { name: 'Inside the mind of a master procrastinator | TED', url: 'https://www.youtube.com/watch?v=arj7oStGLkU', type: 'youtube' },
        { name: 'The art of stress-free productivity | TEDx', url: 'https://www.youtube.com/watch?v=CHxhjDPKfbY', type: 'youtube' }
      ]
    },
    'Adaptability': {
      primary: [
        { name: 'McKinsey Adaptability', url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance', type: 'insights' },
        { name: 'Harvard Adaptability Research', url: 'https://hbr.org/topic/adaptability', type: 'articles' }
      ],
      video: [
        { name: 'The power of believing that you can improve | TED', url: 'https://www.youtube.com/watch?v=_X0mgOOSpLU', type: 'youtube' },
        { name: 'Grit: the power of passion and perseverance | TED', url: 'https://www.youtube.com/watch?v=H14bBuluwB8', type: 'youtube' },
        { name: 'The puzzle of motivation | TED', url: 'https://www.youtube.com/watch?v=rrkrvAUbU9Y', type: 'youtube' }
      ]
    },
    'Decision Making': {
      primary: [
        { name: 'Decision Making Models', url: 'https://www.mindtools.com/pages/main/newMN_TED.htm', type: 'guide' },
        { name: 'Behavioral Economics', url: 'https://www.behavioraleconomics.com/', type: 'resource' }
      ],
      video: [
        { name: 'How to make better decisions | TED-Ed', url: 'https://www.youtube.com/watch?v=BrK7X_XlGB8', type: 'youtube' },
        { name: 'Your brain on future | TEDx', url: 'https://www.youtube.com/watch?v=LWULB9Aoopc', type: 'youtube' },
        { name: 'The paradox of choice | TED', url: 'https://www.youtube.com/watch?v=VO6XEQIsCoM', type: 'youtube' }
      ]
    },
    'Customer Focus': {
      primary: [
        { name: 'Design Thinking Customer Journey', url: 'https://www.ideou.com/blogs/inspiration/human-centered-design', type: 'guide' },
        { name: 'Salesforce Customer Journey', url: 'https://www.salesforce.com/resources/articles/customer-journey/', type: 'article' }
      ],
      video: [
        { name: 'The customer experience revolution | TEDx', url: 'https://www.youtube.com/watch?v=pKrKekl_VqM', type: 'youtube' },
        { name: 'Design thinking process | IDEO', url: 'https://www.youtube.com/watch?v=_r0VX-aU_T8', type: 'youtube' },
        { name: 'Customer empathy mapping | Stanford d.school', url: 'https://www.youtube.com/watch?v=QwF9a56WFWA', type: 'youtube' }
      ]
    },
    'Innovation Thinking': {
      primary: [
        { name: 'IDEO Design Kit', url: 'https://www.designkit.org/', type: 'toolkit' },
        { name: 'MIT Innovation', url: 'https://web.mit.edu/innovation/', type: 'resource' }
      ],
      video: [
        { name: 'Where do good ideas come from | TED', url: 'https://www.youtube.com/watch?v=NugRZGDbPFU', type: 'youtube' },
        { name: 'The surprising habit of original thinkers | TED', url: 'https://www.youtube.com/watch?v=fxbCHn6gE3U', type: 'youtube' },
        { name: 'How to build your creative confidence | TED', url: 'https://www.youtube.com/watch?v=16p9YRF0l-g', type: 'youtube' }
      ]
    },
    'Stress Management': {
      primary: [
        { name: 'Mindfulness Getting Started', url: 'https://www.mindful.org/meditation/mindfulness-getting-started/', type: 'guide' },
        { name: 'Mayo Clinic Stress Management', url: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management', type: 'medical' }
      ],
      video: [
        { name: 'How to make stress your friend | TED', url: 'https://www.youtube.com/watch?v=RcGyVTAoXEU', type: 'youtube' },
        { name: 'All it takes is 10 mindful minutes | TED', url: 'https://www.youtube.com/watch?v=qzR62JJCMBQ', type: 'youtube' },
        { name: 'Why we have too little time | TED', url: 'https://www.youtube.com/watch?v=n3kNlFMXslo', type: 'youtube' }
      ]
    },
    'Goal Setting': {
      primary: [
        { name: 'SMART Goals Guide', url: 'https://www.mindtools.com/pages/article/smart-goals.htm', type: 'framework' },
        { name: 'OKRs Guide', url: 'https://www.whatmatters.com/faqs/okr-meaning-definition-example/', type: 'methodology' }
      ],
      video: [
        { name: 'The power of goal setting | TEDx', url: 'https://www.youtube.com/watch?v=L4N1q4RNi9I', type: 'youtube' },
        { name: 'Keep your goals to yourself | TED', url: 'https://www.youtube.com/watch?v=NHopJHSlVo4', type: 'youtube' },
        { name: 'How to set goals that motivate you | TED-Ed', url: 'https://www.youtube.com/watch?v=MZFaNuYAhxw', type: 'youtube' }
      ]
    },
    'Feedback Reception': {
      primary: [
        { name: 'Harvard Feedback Culture', url: 'https://hbr.org/topic/feedback', type: 'articles' },
        { name: 'Growth Mindset', url: 'https://www.mindsetworks.com/science/', type: 'research' }
      ],
      video: [
        { name: 'How to receive feedback | Harvard Business Review', url: 'https://www.youtube.com/watch?v=FQNbaKkYk_Q', type: 'youtube' },
        { name: 'The power of believing that you can improve | TED', url: 'https://www.youtube.com/watch?v=_X0mgOOSpLU', type: 'youtube' },
        { name: 'Why feedback rarely does what it is meant to | TEDx', url: 'https://www.youtube.com/watch?v=oUpw2dQdFaE', type: 'youtube' }
      ]
    },
    'Cultural Awareness': {
      primary: [
        { name: 'Cultural Intelligence Center', url: 'https://culturalq.com/', type: 'assessment' },
        { name: 'Hofstede Insights', url: 'https://www.hofstede-insights.com/', type: 'framework' }
      ],
      video: [
        { name: 'The danger of a single story | TED', url: 'https://www.youtube.com/watch?v=D9Ihs241zeg', type: 'youtube' },
        { name: 'Cross-cultural communication | TEDx', url: 'https://www.youtube.com/watch?v=YMyofREc5Jk', type: 'youtube' },
        { name: 'How to overcome our biases | TED', url: 'https://www.youtube.com/watch?v=uYyvbgINZkQ', type: 'youtube' }
      ]
    },
    'Ethical Dilemmas': {
      primary: [
        { name: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics', type: 'code' },
        { name: 'Stanford Ethics Resources', url: 'https://ethics.stanford.edu/', type: 'academic' }
      ],
      video: [
        { name: 'Ethics in technology design | TED', url: 'https://www.youtube.com/watch?v=WV_pQCjVBf4', type: 'youtube' },
        { name: 'How to make ethical decisions | TED-Ed', url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY', type: 'youtube' },
        { name: 'The moral roots of liberals and conservatives | TED', url: 'https://www.youtube.com/watch?v=8SOQduoLgRw', type: 'youtube' }
      ]
    }
  },

  practicalProjects: {
    'Personal Portfolio Website': {
      primary: [
        { name: 'freeCodeCamp Portfolio Guide', url: 'https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/', type: 'tutorial' },
        { name: 'GitHub Pages', url: 'https://pages.github.com/', type: 'hosting' }
      ],
      video: [
        { name: 'Build a Portfolio Website', url: 'https://www.youtube.com/watch?v=xV7S8BhIeBo', type: 'youtube' },
        { name: 'React Portfolio Tutorial', url: 'https://www.youtube.com/watch?v=r_hYR53r61M', type: 'youtube' },
        { name: 'Modern Portfolio Design', url: 'https://www.youtube.com/watch?v=ldwlOzRvYOU', type: 'youtube' }
      ]
    },
    'Task Management App': {
      primary: [
        { name: 'React To-Do Tutorial', url: 'https://react.dev/learn/tutorial-tic-tac-toe', type: 'tutorial' },
        { name: 'Vue.js Task App', url: 'https://vuejs.org/tutorial/', type: 'tutorial' }
      ],
      video: [
        { name: 'React Todo App Tutorial', url: 'https://www.youtube.com/watch?v=hQAHSlTtcmY', type: 'youtube' },
        { name: 'Full Stack Todo App', url: 'https://www.youtube.com/watch?v=MnpuK0k3vFg', type: 'youtube' },
        { name: 'Task Manager with Authentication', url: 'https://www.youtube.com/watch?v=9Vmwsg7yaDk', type: 'youtube' }
      ]
    },
    'E-commerce Platform': {
      primary: [
        { name: 'Shopify Development', url: 'https://shopify.dev/', type: 'platform' },
        { name: 'Stripe Payment Integration', url: 'https://stripe.com/docs', type: 'documentation' }
      ],
      video: [
        { name: 'Full Stack E-commerce', url: 'https://www.youtube.com/watch?v=1aP4A1vO_Zs', type: 'youtube' },
        { name: 'E-commerce with React', url: 'https://www.youtube.com/watch?v=377AQ0y6LPA', type: 'youtube' },
        { name: 'Next.js E-commerce', url: 'https://www.youtube.com/watch?v=4mOkFXyxfsU', type: 'youtube' }
      ]
    },
    'Data Visualization Dashboard': {
      primary: [
        { name: 'D3.js Getting Started', url: 'https://d3js.org/getting-started', type: 'documentation' },
        { name: 'Chart.js Documentation', url: 'https://www.chartjs.org/docs/latest/', type: 'documentation' }
      ],
      video: [
        { name: 'Data Visualization with React', url: 'https://www.youtube.com/watch?v=2LhoCfjm8R4', type: 'youtube' },
        { name: 'Dashboard Build Tutorial', url: 'https://www.youtube.com/watch?v=jx5jmI0UlXU', type: 'youtube' },
        { name: 'D3.js Complete Course', url: 'https://www.youtube.com/watch?v=_8V5o2UHG0E', type: 'youtube' }
      ]
    },
    'Mobile App Development': {
      primary: [
        { name: 'React Native Tutorial', url: 'https://reactnative.dev/docs/tutorial', type: 'documentation' },
        { name: 'Expo Getting Started', url: 'https://docs.expo.dev/tutorial/introduction/', type: 'tutorial' }
      ],
      video: [
        { name: 'React Native App Tutorial', url: 'https://www.youtube.com/watch?v=ur6I5m2nTvk', type: 'youtube' },
        { name: 'Flutter Complete Course', url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU', type: 'youtube' },
        { name: 'Mobile App UI Design', url: 'https://www.youtube.com/watch?v=VPvVD8t02Z8', type: 'youtube' }
      ]
    },
    'API Integration Project': {
      primary: [
        { name: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'guide' },
        { name: 'GraphQL Learn', url: 'https://graphql.org/learn/', type: 'tutorial' }
      ],
      video: [
        { name: 'API Integration Tutorial', url: 'https://www.youtube.com/watch?v=GZvSYJDk-us', type: 'youtube' },
        { name: 'REST API with Node.js', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', type: 'youtube' },
        { name: 'GraphQL Tutorial', url: 'https://www.youtube.com/watch?v=ZQL7tL2S0oQ', type: 'youtube' }
      ]
    },
    'Database Management System': {
      primary: [
        { name: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html', type: 'documentation' },
        { name: 'MongoDB Manual', url: 'https://docs.mongodb.com/manual/tutorial/', type: 'documentation' }
      ],
      video: [
        { name: 'Database Management Course', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', type: 'youtube' },
        { name: 'SQL Complete Tutorial', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc', type: 'youtube' },
        { name: 'MongoDB Tutorial', url: 'https://www.youtube.com/watch?v=E_hR_iuZ4_A', type: 'youtube' }
      ]
    },
    'Machine Learning Model': {
      primary: [
        { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'tutorial' },
        { name: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'tutorial' }
      ],
      video: [
        { name: 'Machine Learning Project', url: 'https://www.youtube.com/watch?v=aircAruvnKk', type: 'youtube' },
        { name: 'Python ML Complete Course', url: 'https://www.youtube.com/watch?v=7eh4d6sabA0', type: 'youtube' },
        { name: 'TensorFlow Tutorial', url: 'https://www.youtube.com/watch?v=tpCFfeUEGs8', type: 'youtube' }
      ]
    },
    'Cloud Deployment Project': {
      primary: [
        { name: 'AWS Deployment Guide', url: 'https://aws.amazon.com/getting-started/hands-on/', type: 'guide' },
        { name: 'Vercel Deployment', url: 'https://vercel.com/docs', type: 'documentation' }
      ],
      video: [
        { name: 'Cloud Deployment Tutorial', url: 'https://www.youtube.com/watch?v=NjYsXuSBZ5U', type: 'youtube' },
        { name: 'AWS Full Stack Deployment', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', type: 'youtube' },
        { name: 'Docker Deployment Guide', url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI', type: 'youtube' }
      ]
    },
    'Open Source Contribution': {
      primary: [
        { name: 'First Contributions', url: 'https://github.com/firstcontributions/first-contributions', type: 'guide' },
        { name: 'Good First Issues', url: 'https://goodfirstissues.com/', type: 'platform' }
      ],
      video: [
        { name: 'Contributing to Open Source', url: 'https://www.youtube.com/watch?v=yzeVMecydCE', type: 'youtube' },
        { name: 'Git Workflow for Open Source', url: 'https://www.youtube.com/watch?v=k6KcaMffxac', type: 'youtube' },
        { name: 'Open Source Best Practices', url: 'https://www.youtube.com/watch?v=MT6M_sqAuZo', type: 'youtube' }
      ]
    }
  }
};

// 额外学习建议和社区资源
export const ADDITIONAL_RESOURCES = {
  womenInTech: [
    { name: 'Women Who Code', url: 'https://www.womenwhocode.com/', description: 'Global nonprofit dedicated to inspiring women to excel in technology careers' },
    { name: 'AnitaB.org', url: 'https://anitab.org/', description: 'Connecting, inspiring, and guiding women in computing' },
    { name: 'R-Ladies', url: 'https://rladies.org/', description: 'A worldwide organization promoting gender diversity in the R community' }
  ],
  careerDevelopment: [
    { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', description: 'Online courses from industry experts' },
    { name: 'Coursera', url: 'https://www.coursera.org/', description: 'University-level courses from top institutions' },
    { name: 'edX', url: 'https://www.edx.org/', description: 'High-quality courses from the world\'s best universities' },
    { name: 'Udacity', url: 'https://www.udacity.com/', description: 'Tech skills and career services for cutting-edge technology' },
    { name: 'Beyond Cracking the Coding Interview', url: 'https://www.beyondctci.com/', description: 'Official sequel to the best-selling coding interview preparation book' }
  ],
  interviewPrep: [
    { name: 'LeetCode', url: 'https://leetcode.com/', description: 'Platform for preparing technical coding interviews' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/', description: 'Competitive programming and technical interview preparation' },
    { name: 'Pramp', url: 'https://www.pramp.com/', description: 'Practice coding interviews for free' },
    { name: 'Cracking the Coding Interview', url: 'https://www.amazon.com/dp/195570600X', description: 'Essential book for technical interview preparation' },
    { name: 'InterviewBit', url: 'https://www.interviewbit.com/', description: 'Programming interview questions and preparation platform' },
    { name: 'AlgoExpert', url: 'https://www.algoexpert.io/', description: 'Algorithm practice platform with video explanations' }
  ]
};

// 获取特定模块的学习资源
export function getResourcesForModule(area, moduleName) {
  if (LEARNING_RESOURCES[area] && LEARNING_RESOURCES[area][moduleName]) {
    return LEARNING_RESOURCES[area][moduleName];
  }
  return { primary: [], video: [] };
}

// 获取资源类型的图标
export function getResourceTypeIcon(type) {
  const icons = {
    tutorial: '📖',
    documentation: '📋',
    guide: '🗺️',
    youtube: '🎥',
    course: '🎓',
    interactive: '🖱️',
    tool: '🔧',
    github: '💻',
    blog: '✍️',
    reference: '📚',
    article: '📄',
    playbook: '📝',
    methodology: '⚙️',
    program: '🏫',
    articles: '📰',
    insights: '💡',
    resource: '🌐',
    toolkit: '🧰',
    medical: '🏥',
    framework: '🏗️',
    research: '🔬',
    assessment: '📊',
    code: '⚖️',
    academic: '🎓',
    hosting: '🌍',
    platform: '🛒'
  };
  return icons[type] || '🔗';
} 
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Govindh',
	initials: 'GR',
	location: 'Tamil Nadu,India',
	locationLink: 'https://www.google.com/maps/place/tamilnadu',
	about:
		'Aspiring Full-Stack Developer | Design and Innovation Enthusiast',
	summary: `Specialized in full-stack development with expertise in both frontend and backend technologies. Passionate about creating seamless,
	 user-focused solutions that integrate cutting-edge technology and intuitive design. I strive to deliver impactful applications that make a difference,
	  emphasizing social impact and innovation. Dedicated to leveraging advanced tools and frameworks to enhance web application functionality, scalability, 
	  and user experience, ensuring robust and efficient solutions for every project.`,
	avatar: './assets/avatar.webp',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://gokulraj-max.github.io/main-portfolio/'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://gokulraj-max.github.io/other-links/'
		},
		email: {
			name: 'Email',
			at: 'grajbits@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+918531041822'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/Gokulraj-max',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/gokul-raj-089682249/',
				icon: LinkedInIcon
			},
			{
				name: 'X (Twitter)',
				url: 'https://x.com/grajbits',
				icon: XIcon
			}
		]
	},
	education: [

		{
			school: 'Sacred Heart College,Thiruppathur',
			degree: "Cyber Security",
			start: 'June,2024',
			end: 'present',
			description: [
			"Building a strong foundation in cybersecurity principles, including network security, cryptography, and ethical hacking.",
    "Learning the fundamentals of securing systems, identifying vulnerabilities, and preventing cyber threats.",
    "Understanding various types of malware, phishing attacks, and their mitigation strategies.",
    "Gaining proficiency in security tools like firewalls, antivirus software, and intrusion detection systems.",
    "Exploring the basics of data protection, secure coding practices, and compliance with cybersecurity standards."
			]
		},

		{
			school: 'Sacred Heart College,Thiruppathur',
			degree: "Master of Computer Applications",
			start: 'June,2023',
			end: 'present',
			description: [
			"Pursuing comprehensive studies in Frontend Development, .NET and C#, Java, Python, and Android Development.",
    "Gained hands-on experience in software testing methodologies and best practices.",
    "Developed and deployed applications using modern frameworks and programming languages.",
    "Enhanced problem-solving skills by working on diverse projects involving mobile and web development.",
			]
		},

		{
			school: 'Don Bosco College,Yelagiri Hills',
			degree: "Bachelor of Computer Application",
			start: 'June, 2020',
			end: 'April, 2023',
			description: [
				"Completed with 78%",
				"Studied foundational and advanced concepts in programming, including C, C++, Java, and Python.",
		"Developed skills in Database Management Systems (DBMS) for efficient data handling and storage solutions.",
		"Explored Android Development, focusing on creating user-friendly mobile applications.",
		"Engaged in academic projects that enhanced problem-solving and critical-thinking abilities in software development.",
			]
		},
		{
			school: 'Govt. Hr Sec School',
			degree: "HSC",
			start: 'June, 2019',
			end: 'April, 2020',
			description: [
				
		'Completed with 55%',
			]
		},
		{
			school: 'Govt. Hr Sec School',
			degree: "SSLC",
			start: 'June, 2017',
			end: 'April, 2018',
			description: [
				"Completed with 80%",
				
			]
		},
		

	],
	work: [
		{
			company: 'Mobile Application Development',
		//	link: 'https://github.com/thefrontendlab',
			badges: ['Course'],
			jobs: [
				{
					title: 'Sacred Heart College,Thiruppathur',
					start: 'July, 2023',
					end: 'December, 2023',
					description: [
						"Researched and implemented modern frontend technologies and tools to enhance application performance and user experience.",
    "Developed and optimized mobile app interfaces to ensure responsive and intuitive designs.",
    "Collaborated with cross-functional teams to integrate backend APIs with seamless frontend functionality."
  
					]
				},
	
			]
		},

		{
			company: 'Technology for Data Science',
		//	link: 'https://github.com/thefrontendlab',
			badges: ['Course'],
			jobs: [
				{
					title: 'Sacred Heart College,Thiruppathur',
					start: 'January, 2024',
					end: 'April, 2024',
					description: [
						"Explored and utilized modern technologies and tools essential for data science applications.",
        "Developed and implemented algorithms to analyze and interpret complex datasets.",
        "Worked on real-world projects to apply machine learning techniques and data visualization strategies.",
        "Collaborated on designing scalable solutions for processing and managing large data volumes."
  
					]
				},
	
			]
		},
	
		
		
	],
	skills: [
		'Android Studio',
		'c#',
		'CSS',
		'GNU/Linux',
		'HTML',
		'Java(core)',
		'JavaScript',
		'Python',
		'PHP',
		'React.js',
		'RESTful APIs',
		'SQL (MySQL, PostgreSQL)',
	],
	projects: [
		{
			title: 'Resume Builder using HTML, CSS, JavaScript, and PHP',
			techStack: [
				'HTML','CSS','JavaScript','PHP','MySQL'
			],
			description:
				'A simple yet powerful resume builder application built with HTML, CSS, JavaScript, and PHP. ',
			link: {
				label: '',
				href: ''
			}
		},
		{
			title: 'Soul of Tune Mobile Application',
			techStack: ['XML','Java','Firebase Database'],
			description: 'A mobile app that connects students with skilled tutors to learn musical instruments and purchase quality instruments. ',
			link: {
				label: '',
				href: ''
			}
		},
		{
			title: 'RR Bowl Mobile Application',
			techStack: ['XML','Java','Firebase Database'],
			description:
				'RR BowlDeveloped a mobile app for ordering biryani with delivery and integrated payment options, ensuring a smooth and user-friendly experience.',
			link: {
				label: '',
				href: ''
			}
		},
		{
			title: 'Notepad Editor Using C#',
			techStack: [
			'c#','MySQL',
			],
			description:
			"Created a system-based Notepad application providing text editing and file management features.Implemented core functionalities to enhance user experience in managing plain text files.",
		link: {
				label: '',
				href: ''
			}
		},

	]
}

export const VERIFIED_ON = "4 Oct 2026";

export const activities = [
  {
    id: "young-athletes-global", title: "Young Athletes", provider: "Special Olympics", type: "Multi-sport",
    difficulty: "Introductory", ages: ["Child"], ageText: "Ages 2–7", support: "Family or coach",
    format: "Local & at home", region: "Global", location: "175+ country and US state programs",
    availability: "Find a local program", cost: "Ask local program", icon: "YA", color: "coral",
    url: "https://www.specialolympics.org/what-we-do/inclusive-health/young-athletes/get-involved-in-young-athletes",
    short: "Inclusive sport and play for children ages 2–7 at home, in schools, and in communities.",
    description: "Young Athletes introduces children with and without intellectual disabilities to running, kicking, throwing, and other basic sport skills.",
    facts: ["Children with and without intellectual disabilities", "Home, school, and community formats", "Local schedules vary"],
    access: "Ask the local program about group size, visual instructions, sensory conditions, physical access, and supporter participation."
  },
  {
    id: "unified-sports-global", title: "Unified Sports", provider: "Special Olympics", type: "Team sport",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Ages 8+; teams match age and ability",
    support: "Trained coach", format: "Local team", region: "Global", location: "Programs worldwide",
    availability: "Find a local program", cost: "Ask local program", icon: "US", color: "green",
    url: "https://www.specialolympics.org/what-we-do/sports/unified-sports",
    short: "People with and without intellectual disabilities train and play together on the same team.",
    description: "Unified Sports brings athletes with intellectual disabilities and Unified partners together for shared training and competition.",
    facts: ["More than one million participants worldwide", "Similar age and ability grouping", "Local sport choices differ"],
    access: "Ask the team about eligibility, venue access, changing areas, whistles or crowd noise, and available breaks."
  },
  {
    id: "matp-global", title: "Motor Activity Training Program", provider: "Special Olympics", type: "Movement skills",
    difficulty: "Personalized", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Children and adults with high support needs",
    support: "High-support coaching", format: "Local program", region: "Global", location: "Participating country programs",
    availability: "Ask the local program", cost: "Ask local program", icon: "MA", color: "blue",
    url: "https://resources.specialolympics.org/sports-essentials/sports-and-coaching/motor-activity-training-program",
    short: "Non-competitive movement training for athletes with profound intellectual disabilities and high support needs.",
    description: "MATP emphasizes participation, core motor skills, and each athlete’s personal best rather than competition.",
    facts: ["Participation rather than competition", "Individual movement goals", "Multilingual official resources"],
    access: "Agree communication, positioning, physical support, sensory needs, and personal equipment with the local program."
  },
  {
    id: "gigifit", title: "GiGiFIT", provider: "GiGi’s Playhouse", type: "Fitness",
    difficulty: "Progressive", ages: ["Child", "Teen", "Adult"], ageText: "Infants through adults",
    support: "PT-designed guidance", format: "Local & online", region: "North America", location: "US Playhouses and virtual platform",
    availability: "Seasonal sessions and on-demand videos", cost: "Free", icon: "GF", color: "plum",
    url: "https://gigisplayhouse.org/virtual/gigifit/",
    short: "Free fitness pathways designed with physical therapists for people with Down syndrome of different ages.",
    description: "GiGiFIT uses progressive activities to support strength, endurance, joint stability, balance, coordination, and movement control.",
    facts: ["Infant, preschool, child, teen, and adult pathways", "Local and on-demand options", "15-week seasonal sessions"],
    access: "Online participation lets people control pace and environment. Ask a local Playhouse about group size, access, and breaks."
  },
  {
    id: "mindsets", title: "Mindsets Wellness Program", provider: "Canadian Down Syndrome Society", type: "Fitness",
    difficulty: "Self-paced", ages: ["Adult"], ageText: "Adults with Down syndrome", support: "Peer video mentors",
    format: "Online & at home", region: "North America", location: "Canada; online participation",
    availability: "Pre-registration open", cost: "Free", icon: "MW", color: "gold",
    url: "https://cdss.ca/mindsets/",
    short: "A home program for building routines in fitness, nutrition, and self-care.",
    description: "Peer mentors with Down syndrome introduce activities including swimming, basketball, yoga, running, skating, and weight training.",
    facts: ["Peer-led activity videos", "Recommended three times weekly for eight weeks", "Goals and progress tracking"],
    access: "Home participation allows control of lighting, sound, pace, and breaks. Confirm current eligibility on the official page."
  },
  {
    id: "dsactive-football", title: "DSActive Football", provider: "Down’s Syndrome Association", type: "Football",
    difficulty: "Varies", ages: ["Child", "Teen"], ageText: "Children and young people", support: "Club coaches",
    format: "Local club", region: "Europe", location: "England, Wales and Northern Ireland",
    availability: "Check the club network", cost: "Varies by club", icon: "DS", color: "olive",
    url: "https://www.dsactive.org.uk/",
    short: "Football opportunities for children and young people with Down syndrome through partner clubs.",
    description: "DSActive works with professional and amateur football clubs to provide supported, skill-building team experiences.",
    facts: ["Partner football clubs", "Skills, teamwork, and enjoyment", "Club arrangements vary"],
    access: "Confirm the age group, fee, trial session, pitch access, supporter policy, changing facilities, and sensory conditions."
  },
  {
    id: "dublin-sports", title: "Dublin Sports & Fitness", provider: "Down Syndrome Ireland — Dublin", type: "Dance & bowling",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Groups from age 10 to adult",
    support: "Branch-led groups", format: "In person", region: "Europe", location: "Dublin, Ireland",
    availability: "School-term timetable", cost: "Ask the branch", icon: "DI", color: "coral",
    url: "https://downsyndrome.ie/branches/dublin/",
    short: "Branch activities include hip-hop dance, bowling, ballroom dance, and swimming.",
    description: "The Dublin branch lists dance and hip-hop from age 10, bowling for ages 10–18, and ballroom dancing for adults.",
    facts: ["Several age-group options", "Activities mainly during school terms", "Contact the branch before attending"],
    access: "Ask the branch about the current timetable, venue access, sound and lighting, changing areas, and participation fees."
  },
  {
    id: "abilities-unleashed", title: "Abilities Unleashed", provider: "Disability Sports Australia", type: "Multi-sport",
    difficulty: "Introductory", ages: ["Child", "Adult", "Older adult"], ageText: "Children and adults with disability",
    support: "Local sport providers", format: "In-person events", region: "Oceania", location: "Events across Australia",
    availability: "Use the event finder", cost: "Free events", icon: "AU", color: "green",
    url: "https://sports.org.au/initiatives/abilities-unleashed/",
    short: "Free events where people with disability can try sports and connect with local clubs.",
    description: "This national multi-sport program creates a pathway from trying a sport to ongoing participation in the local community.",
    facts: ["Kids and adult events", "Several sports at one event", "Connections to local clubs"],
    access: "Check the individual event for sports offered, physical access, group size, a quiet space, communication support, and registration."
  },
  {
    id: "school-of-strength-china", title: "School of Strength — China", provider: "Special Olympics East Asia", type: "Fitness",
    difficulty: "Multiple levels", ages: ["Teen", "Adult", "Older adult"], ageText: "Athletes and families",
    support: "Family-supported", format: "Online & at home", region: "East Asia", location: "Chinese-language online program",
    availability: "On-demand videos", cost: "Free resource", icon: "力量", color: "red",
    url: "https://www.specialolympics.org/stories/news/school-of-strength-debuts-in-china?locale=zh",
    short: "Chinese-language home workouts led by Special Olympics China athletes and guest trainers.",
    description: "The video series includes warm-up, flexibility, strength, and endurance exercises at different levels.",
    facts: ["Chinese-language videos", "Several difficulty levels", "Athlete-led demonstrations"],
    access: "At home, participants can control volume, screen brightness, pace, and breaks. Follow the video’s equipment guidance."
  },
  {
    id: "special-olympics-bharat", title: "Special Olympics Bharat", provider: "Special Olympics Bharat", type: "Multi-sport",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Young Athletes and athletes age 8+",
    support: "Trained coach", format: "Local programs", region: "South Asia", location: "India",
    availability: "Official registration available", cost: "Check registration", icon: "IN", color: "gold",
    url: "https://specialolympicsbharat.org/",
    short: "Inclusive sport across India with separate athlete and Young Athlete registration routes.",
    description: "Special Olympics Bharat provides pathways for athletes, schools, coaches, Unified partners, volunteers, and families.",
    facts: ["Athlete and Young Athlete registration", "Unified partner pathway", "Sports organized locally"],
    access: "Confirm eligibility, documents, language, location, schedule, physical access, and available support with the local program."
  },
  {
    id: "special-olympics-africa", title: "Special Olympics Africa Programs", provider: "Special Olympics Africa", type: "Multi-sport",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Young Athletes and athletes age 8+",
    support: "Local coaches", format: "Country programs", region: "Africa", location: "40+ accredited programs",
    availability: "Choose a country program", cost: "Ask local program", icon: "AF", color: "green",
    url: "https://www.specialolympics.org/regions/africa",
    short: "Year-round sport opportunities through more than 40 accredited African programs.",
    description: "The official regional directory connects participants with country programs offering sports training and competition.",
    facts: ["40+ accredited programs", "Year-round opportunities", "Country-level contacts"],
    access: "Ask the country program about sport availability, language, transport, venue access, fees, and participation support."
  },
  {
    id: "special-olympics-latin-america", title: "Special Olympics Latin America", provider: "Special Olympics Latin America", type: "Multi-sport",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Young Athletes and athletes age 8+",
    support: "Local coaches", format: "Country programs", region: "Latin America", location: "Programs across Latin America",
    availability: "Choose a country program", cost: "Ask local program", icon: "LA", color: "plum",
    url: "https://www.specialolympics.org/regions/latin-america?locale=en",
    short: "Year-round sports training and competition through country programs across Latin America.",
    description: "The regional directory links to national programs that manage their sports, registration, and local schedules.",
    facts: ["Country program directory", "Year-round training", "Local sport choices differ"],
    access: "Confirm language, registration, venue access, fees, supporter roles, and sensory conditions with the relevant country program."
  },
  {
    id: "special-olympics-mena", title: "Special Olympics MENA Programs", provider: "Special Olympics MENA", type: "Multi-sport",
    difficulty: "Varies", ages: ["Child", "Teen", "Adult", "Older adult"], ageText: "Young Athletes and athletes age 8+",
    support: "Local coaches", format: "Country programs", region: "Middle East / North Africa", location: "Programs across the MENA region",
    availability: "Choose a country program", cost: "Ask local program", icon: "ME", color: "blue",
    url: "https://www.specialolympics.org/regions/middle-east-north-africa",
    short: "Year-round inclusive sport through country programs across the Middle East and North Africa.",
    description: "The regional directory links to sport, Unified Sports, Young Athletes, competitions, and other local opportunities.",
    facts: ["Country-level programs", "Sport and Unified Sports", "Local contacts provide schedules"],
    access: "Confirm eligibility, language, venue access, supporter roles, gender arrangements where relevant, and current availability."
  }
];

export const filterValues = (key) => ["All", ...new Set(activities.flatMap((activity) => key === "age" ? activity.ages : [activity[key]]))];

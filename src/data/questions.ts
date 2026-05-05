export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of the correct option
  category: string;
  subject: "Satellite Communication" | "Radar";
  explanation?: string;
}

export const questions: Question[] = [
  // Module 4: Multiple Access (1-33)
  {
    id: 1,
    question: "What does FDMA stand for in satellite communications?",
    options: ["Frequency Data Multiple Access", "Frequency Division Multiple Access", "Fast Digital Multiple Access", "Fixed Division Multiple Access"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "FDMA stands for Frequency Division Multiple Access, where the available bandwidth is divided into frequency slots."
  },
  {
    id: 2,
    question: "In an FDMA system, what do users share?",
    options: ["Time only", "The same code", "The transponder bandwidth and power", "A single ground station"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "FDMA users share the total transponder bandwidth and power by occupying specific frequency slots simultaneously."
  },
  {
    id: 3,
    question: "Do users in an FDMA system transmit all the time or in bursts?",
    options: ["Transmit all time", "Transmit in bursts", "Transmit only when requested", "Transmit alternately"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "In FDMA, each user is assigned a specific frequency band and transmits continuously on that band."
  },
  {
    id: 4,
    question: "What is the purpose of guard bands in FDMA?",
    options: ["To increase power", "To prevent interference between adjacent channels", "To synchronize time slots", "To encrypt the signal"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Guard bands are small unused frequency gaps between channels to prevent overlapping and interference."
  },
  {
    id: 5,
    question: "What is the formula for the number of carriers (K) in a bandwidth-limited FDMA case?",
    options: ["(Bt + Bg) / Bc", "(Bt - Bg) / Bc", "Bt / (Bg + Bc)", "Bc / (Bt - Bg)"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Bt is total bandwidth, Bg is total guardband, and Bc is carrier bandwidth."
  },
  {
    id: 6,
    question: "What does MCPC stand for?",
    options: ["Mobile Channel Per Carrier", "Multi Carrier Power Combiner", "Multi Channel Per Carrier", "Maximum Capacity Per Channel"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "MCPC stands for Multi Channel Per Carrier, a transmission method where multiple channels are multiplexed onto one carrier."
  },
  {
    id: 7,
    question: "What does SCPC stand for?",
    options: ["Single Carrier Power Controller", "Single Channel Per Carrier", "Satellite Connection Per Channel", "Small Channel Per Carrier"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "SCPC stands for Single Channel Per Carrier, where each signal is transmitted on its own dedicated carrier."
  },
  {
    id: 8,
    question: "Which of the following is a limitation of FDMA?",
    options: ["Inefficient use of spectrum due to guard bands", "High power consumption at night", "Need for extremely large antennas", "Requires clear sky conditions only"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Guard bands are necessary to avoid interference but result in wasted spectrum that cannot be used for data."
  },
  {
    id: 9,
    question: "What products are generated when an FDMA transponder operates in the non-linear region?",
    options: ["Harmonic products", "Intermodulation (IM) products", "Thermal noise only", "Reflection products"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Operating multiple carriers in a non-linear transponder causes intermodulation (IM) products which act as noise."
  },
  {
    id: 10,
    question: "Power back-off in FDMA results in what effect on system capacity?",
    options: ["Increases capacity", "Does not affect capacity", "Reduces system capacity", "Doubles bandwidth"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Power back-off is used to ensure linear operation and reduce IM products, but this reduces the overall power efficiency and capacity."
  },
  {
    id: 11,
    question: "Which access technique requires strict power control to maintain linear operation in multi-carrier mode?",
    options: ["TDMA", "CDMA", "FDMA", "Pure ALOHA"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "FDMA requires strict power control to prevent carriers from interfering with each other via intermodulation."
  },
  {
    id: 12,
    question: "The SPADE system used by Intelsat is an example of which access scheme?",
    options: ["PCM/PSK/FDMA", "FM/SCPC/FDMA", "PCM/TDM/CDMA", "FM/SCPC/TDMA"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "SPADE is a digital FDMA system (PCM/PSK/FDMA) that assigns carriers based on demand (DAMA)."
  },
  {
    id: 13,
    question: "Is FDMA considered a flexible system for handling dynamic, varying bandwidth traffic?",
    options: ["Yes, very flexible", "No, filters need to be changed to accommodate varying bandwidth", "Yes, it uses digital multiplexing", "Yes, it handles any traffic automatically"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "FDMA is relatively inflexible because frequency assignments and filters are often fixed for specific carrier bandwidths."
  },
  {
    id: 14,
    question: "What does TDMA stand for?",
    options: ["Tele Division Multiple Access", "Time Division Multiple Access", "Track Division Master Access", "Temporal Digital Multiple Access"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "TDMA stands for Time Division Multiple Access, where the transponder is shared by users taking turns in time."
  },
  {
    id: 15,
    question: "In TDMA, what resource is being shared among users?",
    options: ["Frequency", "Power", "Time", "Space"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Users in TDMA share the transponder by transmitting at different non-overlapping time slots."
  },
  {
    id: 16,
    question: "In TDMA, when a user transmits, what resources do they utilize?",
    options: ["Full BW and Full Power", "Partial BW and Full Power", "Full BW and Partial Power", "Partial BW and Partial Power"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "During its assigned time slot, a TDMA user uses the entire transponder bandwidth and full power."
  },
  {
    id: 17,
    question: "TDMA transmission from users occurs in which mode?",
    options: ["Continuous mode", "Burst mode", "Alternating mode", "Wait-and-send mode"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "TDMA stations transmit in short, high-speed bursts during their assigned time intervals."
  },
  {
    id: 18,
    question: "What normally marks the beginning of a TDMA frame?",
    options: ["User Data Burst", "Guard Time", "Control Burst (Reference Burst)", "End-of-frame marker"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "A control or reference burst is transmitted by a master station to synchronize all user stations in the network."
  },
  {
    id: 19,
    question: "What is 'Guard Time' (GT) in the TDMA burst format?",
    options: ["Time to recharge satellite batteries", "Time between bursts to prevent collision due to delay variations", "Time used for error correction", "Time for station ID coding"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Guard time accounts for variations in propagation delay between stations to prevent their bursts from overlapping at the satellite."
  },
  {
    id: 20,
    question: "What is the function of the 'Unique Word' (UW) in a TDMA burst?",
    options: ["To encrypt the message", "For burst synchronization and identification", "To indicate the end of the message", "To check for signal power"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "The Unique Word is a specific bit pattern used to detect the exact start of a burst and identify the transmitting station."
  },
  {
    id: 21,
    question: "What does DSI stand for in the context of TDMA capacity enhancement?",
    options: ["Digital System Interface", "Digital Signal Integration", "Digital Speech Interpolation", "Direct Satellite Interaction"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Digital Speech Interpolation (DSI) exploits gaps in human speech to carry more voice channels on fewer satellite circuits/slots."
  },
  {
    id: 22,
    question: "TDMA frame efficiency is defined as the ratio of:",
    options: ["User data bits to Total bits in the frame", "Total bits to Overhead bits", "Preamble bits to User data bits", "Control bits to Data bits"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Frame efficiency measures what percentage of the frame is carrying actual user data vs overhead (preambles, guard times)."
  },
  {
    id: 23,
    question: "What does CDMA stand for?",
    options: ["Carrier Division Multiple Access", "Code Division Multiple Access", "Continuous Division Multiple Access", "Circuit Digital Multiple Access"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "CDMA stands for Code Division Multiple Access, where users transmit on the same frequency but use unique mathematical codes."
  },
  {
    id: 24,
    question: "CDMA is also known by which other name?",
    options: ["Frequency Hopping Data Access", "Spread Spectrum Multiple Access (SSMA)", "Synchronous Serial Master Access", "Space Segment Multiple Access"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "CDMA is a spread spectrum technique because it spreads the information signal across a much wider bandwidth."
  },
  {
    id: 25,
    question: "In CDMA, what is used to make a signal orthogonal to other users' signals?",
    options: ["A specific time slot", "A unique frequency band", "A unique code (PN sequence)", "A specific polarization"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Pseudo-Noise (PN) sequences are unique codes that allow multiple signals to occupy the same bandwidth without interference."
  },
  {
    id: 26,
    question: "Do users in a CDMA system transmit full time or in bursts?",
    options: ["Full time", "Burst mode", "Fixed intervals", "Only when requested"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "CDMA allows all users to transmit simultaneously and continuously over the entire transponder bandwidth."
  },
  {
    id: 27,
    question: "What are the two main types of CDMA implementation?",
    options: ["TDMA and FDMA", "Direct Sequence and Frequency Hopping", "Pure and Slotted", "Fixed and Demand Assigned"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "CDMA can use Direct Sequence (spreading by a fast PN code) or Frequency Hopping (jumping carrier frequency rapidly)."
  },
  {
    id: 28,
    question: "What is 'Processing Gain' (Gp) in a CDMA system?",
    options: ["Ratio of PN rate to data rate", "Ratio of data rate to PN rate", "Logarithm of total power", "Gain achieved by the HPA"],
    answer: 0,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Processing gain is the ratio between the chipped (spread) signal rate and the original info data rate."
  },
  {
    id: 29,
    question: "What does DAMA stand for?",
    options: ["Digital Assignment Multiple Access", "Direct Access Master Assignment", "Demand Assigned Multiple Access", "Data Associated Multiple Access"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "DAMA stands for Demand Assigned Multiple Access, where resources are allocated only when a user has data to send."
  },
  {
    id: 30,
    question: "The ALOHA system is a form of:",
    options: ["Fixed Assigned Multiple Access", "Point-to-Point dedicated link", "Random Access DAMA system", "Manual assignment system"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "ALOHA is a random access protocol first used for data packets where users transmit whenever they have data."
  },
  {
    id: 31,
    question: "In Pure ALOHA, what happens if a packet collision is observed?",
    options: ["The packet is discarded forever", "The packet is retransmitted", "The station waits until next week", "The system shuts down"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "If a collision occurs (two packets overlap), the sender waits for a random period and retransmits the packet."
  },
  {
    id: 32,
    question: "How does Slotted ALOHA improve throughput compared to Pure ALOHA?",
    options: ["By using more power", "By synchronizing transmission times to common time slots", "By using longer packets", "By decreasing bandwidth per user"],
    answer: 1,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "By restricting transmission to specific time slots, Slotted ALOHA reduces the 'vulnerable period' where collisions occur, doubling maximum throughput."
  },
  {
    id: 33,
    question: "Which ALOHA flavor uses a reservation phase and a transmission phase?",
    options: ["Pure ALOHA", "Slotted ALOHA", "Reservation ALOHA", "Fast ALOHA"],
    answer: 2,
    category: "Multiple Access",
    subject: "Satellite Communication",
    explanation: "Reservation ALOHA uses dedicated slots to reserve future capacity, making it more efficient for continuous data streams."
  },

  // Module 5: Earth Station Technology (34-67)
  {
    id: 34,
    question: "Which type of Earth Station is built as a fixed structure and carries large telephone traffic?",
    options: ["Portable Earth Station", "VSAT", "Large Earth Station", "Transportable Earth Station"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Large earth stations are fixed installations for high-volume gateway traffic using large diameter antennas."
  },
  {
    id: 35,
    question: "What does VSAT stand for?",
    options: ["Very Small Antenna Terminal", "Variable Small Aperture Terminal", "Very Small Aperture Terminal", "VHF Satellite Access Terminal"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "VSAT stands for Very Small Aperture Terminal, used for providing satellite connectivity to remote areas with small dishes."
  },
  {
    id: 36,
    question: "DTH and TVRO are examples of which kind of Earth Stations?",
    options: ["Two-way stations", "Receive-only Earth Stations", "Transmit-only stations", "Mobile-only stations"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "DTH (Direct-To-Home) and TVRO (Television Receive-Only) stations are designed solely to receive broadcast signals."
  },
  {
    id: 37,
    question: "Which of the following is NOT a major subsystem of a typical Earth Station?",
    options: ["Antenna System", "Power System", "Atmospheric Injection System", "Tracking System"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Standard earth stations include antenna, power, transmit, receive, control, and terrestrial interface subsystems."
  },
  {
    id: 38,
    question: "Which module connects the earth station to the terrestrial network?",
    options: ["RF Combiner", "Terrestrial Interface Module (TIM)", "LNA", "Frequency Synthesizer"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The TIM bridges the satellite system with local user networks or public telecommunication lines."
  },
  {
    id: 39,
    question: "The Up-converter is found in which system part of the earth station?",
    options: ["Receive System", "Transmit System", "Power System", "Monitoring System"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The Up-converter translates IF (Intermediate Frequency) signals to the high RF (Radio Frequency) uplink frequency."
  },
  {
    id: 40,
    question: "The Down-converter is found in which system part of the earth station?",
    options: ["Transmit System", "Receive System", "Interface System", "Control System"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The Down-converter translates received weak RF signals into IF signals for easier processing/demodulation."
  },
  {
    id: 41,
    question: "What does LNA stand for?",
    options: ["Level Node Amplifier", "Low Noise Amplifier", "Linear Node Array", "Long Network Antenna"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Low Noise Amplifiers are critical front-end components that amplify tiny received signals while adding minimal thermal noise."
  },
  {
    id: 42,
    question: "What does HPA stand for?",
    options: ["High Power Amplifier", "High Performance Antenna", "Hybrid Phase Array", "High Pulse Amplitude"],
    answer: 0,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The High Power Amplifier boosts the signal to the high energy level required to reach a satellite in orbit."
  },
  {
    id: 43,
    question: "A Cassegrain antenna system typically consists of:",
    options: ["A main reflector only", "A main reflector and a sub-reflector", "Two main reflectors", "A parabolic reflector and a dipole"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The Cassegrain design uses a parabolic main reflector and a hyperbolic sub-reflector for high efficiency."
  },
  {
    id: 44,
    question: "In a Cassegrain antenna, the sub-reflector shape is:",
    options: ["Concave towards main reflector", "Flat", "Convex towards main reflector", "Spherical"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The sub-reflector in a Cassegrain system is convex towards the feed/main reflector."
  },
  {
    id: 45,
    question: "In a Gregorian antenna, how is the sub-reflector oriented?",
    options: ["Concave towards main reflector", "Convex towards main reflector", "Parallel to beam axis", "Perpendicular to beam axis"],
    answer: 0,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "A Gregorian system is similar to Cassegrain but uses an elliptical sub-reflector that is concave towards the main reflector."
  },
  {
    id: 46,
    question: "What is the primary advantage of the Offset Feed Horn Antenna?",
    options: ["It is cheaper to build", "It avoids sub-reflector blockage of the main beam", "It uses less power", "It doesn't require a feed horn"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Placing the feed offset from the center prevents the feed structure from blocking incoming/outgoing energy."
  },
  {
    id: 47,
    question: "Which antenna tracking method requires a human operator to control movements?",
    options: ["Auto tracking", "Program tracking", "Manual tracking", "Step tracking"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Manual tracking relies on an operator adjusting the dish to maximize the received signal strength."
  },
  {
    id: 48,
    question: "Program controlled tracking is also known as:",
    options: ["Closed loop tracking", "Open loop tracking", "Hill climbing", "Beacon tracking"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "It is 'Open Loop' because it follows a pre-calculated path (ephemeris) without needing feedback from a live beacon signal."
  },
  {
    id: 49,
    question: "Auto tracking systems are categorized as:",
    options: ["Open loop systems", "Manual systems", "Closed loop systems", "Fixed systems"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "It is 'Closed Loop' because the system uses the received signal error to continuously correct its own pointing."
  },
  {
    id: 50,
    question: "Step-tracking is also popularly known as which technique?",
    options: ["Hill Climbing", "Deep Diving", "Peak Hunting", "Phase Selecting"],
    answer: 0,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Step-tracking iteratively moves the antenna in steps to find the peak signal, similar to a hill-climbing optimization."
  },
  {
    id: 51,
    question: "In conical scanning, the antenna beam is rotated around an axis offset by a small angle called:",
    options: ["Phase angle", "Squint angle", "Elevation angle", "Azimuth angle"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The squint angle ensures the rotating beam traces a cone, allowing the system to detect pointing errors in any direction."
  },
  {
    id: 52,
    question: "Which of these tracking methods provides the highest accuracy but is most complex?",
    options: ["Manual tracking", "Step-tracking", "Mono-pulse tracking", "Program tracking"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Mono-pulse tracking captures all tracking data from a single pulse/instant using complex multiple-feed horns."
  },
  {
    id: 53,
    question: "What does HPBW stand for regarding antenna performance?",
    options: ["High Power Band Width", "Half Power Beam Width", "High Performance Beam Width", "Horizontal Phase Beam Width"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "HPBW is the angular width of the beam where the power falls to half (-3 dB) of its peak value."
  },
  {
    id: 54,
    question: "Decreasing the HPBW of an antenna has what effect on its gain?",
    options: ["Decreases gain", "Increases gain", "Has no effect on gain", "Zeroes the gain"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "A narrower beam (smaller HPBW) concentrates energy more tightly, resulting in higher directional gain."
  },
  {
    id: 55,
    question: "What is the typical degree of polarization isolation needed for a high-quality earth station?",
    options: ["10 dB", "20 dB", "30 dB", "60 dB"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "30 dB isolation is standard to properly separate cross-polarized frequency reuse channels."
  },
  {
    id: 56,
    question: "A Travelling Wave Tube Amplifier (TWTA) is a type of:",
    options: ["Microwave power device", "Low Noise Amplifier", "Antenna Feed", "Baseband processor"],
    answer: 0,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "TWTAs are common high-power microwave amplifiers used for satellite uplinks."
  },
  {
    id: 57,
    question: "Which HPA device is commonly used for very high power outputs (up to 3 kW) in large earth stations?",
    options: ["SSPA", "Klystron Amplifier", "Transistor Amplifier", "Dipole"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Klystron amplifiers deliver extremely high power levels required for major gateway stations."
  },
  {
    id: 58,
    question: "What does SSPA stand for?",
    options: ["Static Satellite Power Array", "Solid-State Power Amplifier", "Short Stable Power Amplifier", "Signal Specific Power Amplifier"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "SSPAs use semiconductor transistors to provide amplification, often used in smaller VSAT terminals."
  },
  {
    id: 59,
    question: "Operating an HPA in its saturated region is problematic for multi-carrier operations because:",
    options: ["It wastes too much electricity", "It generates intermodulation (IM) products", "It reduces antenna gain", "It stops the tracking system"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Non-linearity at saturation causes different carriers to interact and create unwanted IM interference."
  },
  {
    id: 60,
    question: "What is a typical LNA noise temperature for a large earth station?",
    options: ["300 K", "100 K", "45 K", "30 K"],
    answer: 3,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Large stations aim for the lowest possible noise temperatures (around 30 K) to maximize link margins."
  },
  {
    id: 61,
    question: "Parametric amplifiers can reach a noise temperature of 23 K when they are:",
    options: ["Uncooled", "Thermoelectrically cooled", "Cryogenically cooled", "Operated in vacuum"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Cryogenic cooling (using liquid helium) reduces thermal noise to near-absolute levels."
  },
  {
    id: 62,
    question: "Which material is commonly used in FETs for Earth Station LNAs due to high carrier mobility?",
    options: ["Silicon (Si)", "Germanium (Ge)", "Gallium Arsenide (GaAs)", "Copper"],
    answer: 2,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "GaAs (Gallium Arsenide) FETs are superior to Silicon for multi-GHz high-speed, low-noise microwave applications."
  },
  {
    id: 63,
    question: "Double conversion up-converters are preferred over single conversion because they:",
    options: ["Use less power", "Provide better image rejection and easier filtering", "Are easier to build manually", "Don't require a crystal oscillator"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Double conversion uses two stages of mixing, making it easier to filter out unwanted signal 'images'."
  },
  {
    id: 64,
    question: "The frequency standard in an earth station transmit system usually employs:",
    options: ["A simple RC circuit", "A rubidium/cesium clock or high stable crystal oscillator", "The mains power frequency", "The antenna rotation rate"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Highly stable atomic or crystal oscillators are mandatory to keep frequencies precise within tight channel tolerances."
  },
  {
    id: 65,
    question: "Antenna directivity is important for:",
    options: ["Improving signal brightness", "Discrimination against signals from adjacent satellites", "Reducing the weight of the antenna", "Eliminating sun outages"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "High directivity ensures the station only communicates with the target satellite and rejects noise from others nearby."
  },
  {
    id: 66,
    question: "The mission control facility typically includes which two segments?",
    options: ["Main office and Backup office", "Satellite Control Centre and TT&C Earth Station", "Power plant and Data center", "Up-link station and Down-link station"],
    answer: 1,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "The Mission Control Facility combines the SCC (managing satellite status) with the TT&C (Telemetry, Tracking, and Command) link station."
  },
  {
    id: 67,
    question: "VSATs generally operate in which frequency band?",
    options: ["L band", "S band", "C band", "Ku band"],
    answer: 3,
    category: "Earth Station Technology",
    subject: "Satellite Communication",
    explanation: "Most modern VSAT systems use the Ku band (12-14 GHz) for high bandwidth and small dish sizes."
  },

  // Module 6: GPS & Navigation (68-100)
  {
    id: 68,
    question: "When was the first reference to a compass being used for navigation at sea?",
    options: ["800 AD", "1119 AD", "1460 AD", "1773 AD"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Early maritime navigation records show the magnetic compass in use by 1119 AD."
  },
  {
    id: 69,
    question: "Galileo Galilei discovered the first four moons of Jupiter in 1610, which helped in establishing:",
    options: ["Latitude more accurately", "Longitude more accurately", "The size of the Earth", "The distance to the Sun"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Galileo proposed use moon eclipses as a cosmic clock to determine longitude, which was otherwise difficult at sea."
  },
  {
    id: 70,
    question: "What instrument did John Harrison develop in 1773 to solve the problem of measuring longitude at sea?",
    options: ["Quadrant", "Gyrocompass", "Marine Chronometer", "Radar"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Harrison's mechanical H4 chronometer kept precise time at sea, which is essential for calculating longitude."
  },
  {
    id: 71,
    question: "Which radio navigation system was developed for aerial warfare during World War II?",
    options: ["GPS", "GLONASS", "LORAN", "NAVIC"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "LORAN (Long Range Navigation) used terrestrial radio towers to provide positioning for ships and aircraft."
  },
  {
    id: 72,
    question: "The signals from which satellite launched in 1957 indicated that Doppler shifts could determine ground positions?",
    options: ["Sputnik", "Navstar-1", "Transit", "GIOVE-B"],
    answer: 0,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Soviet scientists realized that Doppler shifts in Sputnik's radio beacon could be used to track the satellite or locate the receiver."
  },
  {
    id: 73,
    question: "The first GPS satellite, Navstar-1, was launched in which year?",
    options: ["1957", "1960", "1978", "1993"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The launch of Navstar-1 in 1978 marked the beginning of the modern Global Positioning System."
  },
  {
    id: 74,
    question: "The baseline GPS system became fully operational in 1993 with how many satellites?",
    options: ["12", "24", "30", "36"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The GPS constellation is designed with 24 satellites to ensure global 24/7 coverage."
  },
  {
    id: 75,
    question: "In which orbital class are GPS satellites located?",
    options: ["LEO (Low Earth Orbit)", "MEO (Medium Earth Orbit)", "GEO (Geostationary)", "HEO (Highly Elliptical)"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "GPS satellites orbit at about 20,200 km, which is Medium Earth Orbit (MEO)."
  },
  {
    id: 76,
    question: "How many satellites must a GPS receiver have in view to solve for 3D coordinates (x, y, z) and receiver clock offset (t)?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Four unknowns (x, y, z, and time error) require a minimum of four independent satellite range measurements."
  },
  {
    id: 77,
    question: "What is 'Pseudorange'?",
    options: ["The actual distance to the satellite", "The distance with clock offset error included", "The distance measured in light years", "The distance between two satellites"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Pseudorange is the raw distance calculation (time of arrival * speed of light), which 'pseudos' the real range because of the receiver's local clock error."
  },
  {
    id: 78,
    question: "What is the typical accuracy of atomic clocks carried by GPS satellites?",
    options: ["1 part in 10^3", "1 part in 10^7", "1 part in 10^11", "1 part in 10^20"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "GPS satellites use highly stable Rubidium or Cesium clocks accurate to one part in 10^11."
  },
  {
    id: 79,
    question: "What is the accuracy of standard crystal oscillators carried by GPS receivers?",
    options: ["1 part in 10^11", "1 part in 10^5 or 10^6", "1 part in 10^2", "1 part in 10^20"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Mobile receivers use cheaper Quartz crystals which are much less accurate than the satellite's atomic clocks."
  },
  {
    id: 80,
    question: "If there is a clock offset error of Δt, what is the resulting horizontal range error?",
    options: ["Δt", "c * Δt", "c^2 * Δt", "Δt / c"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The range error is the time error multiplied by the speed of light (c)."
  },
  {
    id: 81,
    question: "What is the GPS L1 carrier frequency?",
    options: ["1227.6 MHz", "1.023 MHz", "1575.42 MHz", "2492.028 MHz"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "L1 (1575.42 MHz) is the primary civilian signal frequency for GPS."
  },
  {
    id: 82,
    question: "What is the GPS L2 carrier frequency?",
    options: ["1575.42 MHz", "1227.6 MHz", "10.23 MHz", "1.023 MHz"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "L2 (1227.6 MHz) carries the Precision code and is also used to correct for ionospheric delay."
  },
  {
    id: 83,
    question: "What does the C/A code stand for in GPS?",
    options: ["Common Access", "Coarse Acquisition", "Continuous Availability", "Combined Accuracy"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "C/A stands for Coarse Acquisition; it is the standard civilian signal used to 'acquire' the satellite signal."
  },
  {
    id: 84,
    question: "What does the P code stand for in GPS?",
    options: ["Position Code", "Phase Code", "Professional Code", "Precision Code"],
    answer: 3,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "P-code is the military-grade Precision code, providing much higher accuracy than the C/A code."
  },
  {
    id: 85,
    question: "What is the length of the GPS C/A code PN sequence in bits?",
    options: ["15", "1023", "2046", "32767"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The C/A code is a Gold code sequence exactly 1023 bits long."
  },
  {
    id: 86,
    question: "What is the time duration of one C/A code PN sequence?",
    options: ["1.0 ms", "1.0 s", "0.6 s", "30 ns"],
    answer: 0,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "At a rate of 1.023 Mbps, a 1023-bit sequence repeats every 1.0 millisecond."
  },
  {
    id: 87,
    question: "What is the clock rate of the C/A code?",
    options: ["10.23 MHz", "1.023 MHz", "50 Hz", "1575 MHz"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The civilian C/A code chips at a rate of 1.023 MHz."
  },
  {
    id: 88,
    question: "Precision (P) code is transmitted on L1 with what relation to the carrier?",
    options: ["In-phase", "Phase quadrature", "30 degree offset", "Filtered out"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "P-code and C/A code are multiplexed on L1 using quadrature (90 degree) phase offsets."
  },
  {
    id: 89,
    question: "The GPS navigation message consists of 25 frames. Each frame repeats every:",
    options: ["0.6 seconds", "6 seconds", "30 seconds", "1 minute"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "A single navigation frame takes 30 seconds to transmit at the slow 50 bps data rate."
  },
  {
    id: 90,
    question: "How long does it take to receive the full GPS navigation message containing 25 frames?",
    options: ["30 seconds", "12.5 minutes", "24 hours", "12 hours"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "25 frames x 30 seconds/frame = 750 seconds, which is 12.5 minutes."
  },
  {
    id: 91,
    question: "Which components are found in Sub-frame 1 of the GPS message?",
    options: ["Ephemeris parameters", "Almanac data", "Satellite clock correction and health", "Text messages from the Hub"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Sub-frame 1 contains essential clock correction terms and basic satellite status/health info."
  },
  {
    id: 92,
    question: "What information is provided by 'Ephemeris parameters' in the GPS message?",
    options: ["General station IDs", "Precise orbital data for the transmitting satellite", "Weather information", "Coarse data for all satellites"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Ephemeris data provides the high-precision orbital elements needed to calculate the satellite's exact position."
  },
  {
    id: 93,
    question: "What information is provided by 'Almanac data' in the GPS message?",
    options: ["Correction for current clock only", "Coarse orbital and status data for all satellites in constellation", "Highest precision coordinate correction", "List of ground stations"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The Almanac provides rough position data for the entire GPS fleet to help the receiver find other satellites faster."
  },
  {
    id: 94,
    question: "Which GPS segment handles synchronization with Universal Time Coordination (UTC)?",
    options: ["Space Segment", "User Segment", "Control Segment", "Atmospheric Segment"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The ground control stations monitor atomic clocks and sync them with UTC standards."
  },
  {
    id: 95,
    question: "What does GDOP stand for regarding position errors?",
    options: ["Global Data Output Position", "Geometric Dilution of Precision", "Gradient Data Of Points", "Ground Distance Offset Parameter"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "GDOP describes how the satellite signal geometry affects the uncertainty of the calculated position."
  },
  {
    id: 96,
    question: "The error caused by signal reflection from buildings or mountains before reaching the receiver is:",
    options: ["Ionospheric error", "Tropospheric error", "Multi-path error", "Satellite clock error"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "Multi-path interference happens when reflections take longer paths than the direct line-of-sight signal."
  },
  {
    id: 97,
    question: "Which error is caused by signal delay when passing through the upper part of the atmosphere?",
    options: ["Ionospheric error", "Receiver error", "Ephemeric error", "Solar flare error"],
    answer: 0,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "The ionosphere contains charged particles that slow down radio waves, causing range errors."
  },
  {
    id: 98,
    question: "Differential GPS (DGPS) system uses what to improve accuracy?",
    options: ["More satellites", "A fixed reference station with known coordinates", "Faster processors in receivers", "Dual frequency antennas"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "DGPS calculates errors at a known ground point and broadcasts corrections to mobile users nearby."
  },
  {
    id: 99,
    question: "IRNSS (NavIC) is the regional navigation system of which country?",
    options: ["China", "India", "Japan", "Russia"],
    answer: 1,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "IRNSS, also called NavIC, is India's sovereign satellite navigation constellation."
  },
  {
    id: 100,
    question: "Which of the following belongs to Russia?",
    options: ["GPS", "GALILEO", "GLONASS", "BEIDOU"],
    answer: 2,
    category: "GPS & Navigation",
    subject: "Satellite Communication",
    explanation: "GLONASS is the Russian equivalent to the US Global Positioning System (GPS)."
  },

  // -- Radar Questions (101-200) --
  {
    id: 101,
    question: "How is Radar Clutter defined?",
    options: ["Any desired echo from target", "Any unwanted radar echo", "Internal thermal noise", "Receiver interference"],
    answer: 1,
    category: "Radar Clutter",
    subject: "Radar",
    explanation: "Clutter refers to echoes from land, sea, rain, etc., which 'clutter' the radar output and make detection difficult."
  },
  {
    id: 102,
    question: "Echoes from land or sea are categorized as:",
    options: ["Volume clutter", "Point clutter", "Surface clutter", "Atmospheric clutter"],
    answer: 2,
    category: "Radar Clutter",
    subject: "Radar",
    explanation: "Surface clutter results from reflections off the ground or sea surface."
  },
  {
    id: 103,
    question: "Reflections from rain, birds, or insects are known as:",
    options: ["Surface clutter", "Volume clutter", "Target echoes", "Thermal noise"],
    answer: 1,
    category: "Radar Clutter",
    subject: "Radar",
    explanation: "Volume clutter refers to distributed reflections from three-dimensional regions in the atmosphere."
  },
  {
    id: 104,
    question: "The symbol σº (sigma zero) represent what in radar clutter?",
    options: ["Total radar cross section", "Radar cross section per unit area", "Internal noise power", "Antenna efficiency"],
    answer: 1,
    category: "Radar Clutter",
    subject: "Radar",
    explanation: "Sigma zero is the radar-cross-section density for surface clutter."
  },
  {
    id: 105,
    question: "In volume distributed clutter, reflectivity (η) is defined as:",
    options: ["Cross section per unit volume", "Total power reflected", "Gain of the transponder", "Atmospheric attenuation"],
    answer: 0,
    category: "Radar Clutter",
    subject: "Radar",
    explanation: "Reflectivity η is the radar cross section per unit volume (sigma_c / Vc)."
  },
  {
    id: 106,
    question: "How does the echo from surface clutter vary with range (at low grazing angles)?",
    options: ["Inversely as the fourth power", "Inversely as the square", "Inversely as the cube", "Linearly"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Unlike point targets (R^-4), surface clutter varies inversely as the cube of the range (R^-3)."
  },
  {
    id: 107,
    question: "Which angle is defined relative to the normal to the surface in radar geometry?",
    options: ["Grazing angle", "Depression angle", "Incidence angle", "Azimuth angle"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "The incidence angle is measured from the normal (perpendicular) to the surface."
  },
  {
    id: 108,
    question: "The 'Grazing Angle' is defined with respect to:",
    options: ["The normal to the surface", "The tangent to the surface", "The vertical axis", "The magnetic north"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "The grazing angle is the angle between the radar beam and the surface tangent."
  },
  {
    id: 109,
    question: "When is the depression angle equal to the grazing angle?",
    options: ["Always", "Never", "When the earth's surface is considered flat", "Only at the poles"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "On a flat surface, the angle of depression from the radar matches the grazing angle on the ground."
  },
  {
    id: 110,
    question: "Tracking radar systems measure which coordinates of a target?",
    options: ["Position only", "Velocity only", "Range, angles (azimuth/elevation), and velocity", "Color and shape"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Tracking radars provide a complete set of dynamic coordinates for target prediction."
  },
  {
    id: 111,
    question: "Which antenna pattern is typically used by tracking radars for precision?",
    options: ["Fan beam", "Omnidirectional", "Pencil beam", "Cosecant-squared beam"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Very narrow pencil beams are used to achieve high angular precision."
  },
  {
    id: 112,
    question: "Sequential lobing is also known as:",
    options: ["Frequency hopping", "Lobe switching", "Range gating", "Pulse compression"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Lobe switching refers to the alternating positions of the antenna beam."
  },
  {
    id: 113,
    question: "In sequential lobing, the angular error is determined by comparing:",
    options: ["Phase of two pulses", "Returned signal levels from switched beam positions", "Time of arrival", "Frequency shift"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The difference in signal strength between the two beam positions indicates the offset from the tracking axis."
  },
  {
    id: 114,
    question: "What is the main limitation of sequential lobing?",
    options: ["It is too fast", "Accuracy is limited by mechanical/electronic switching noise", "It uses too much power", "It only works for ships"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The switching mechanism can introduce errors and is susceptible to signal fluctuations."
  },
  {
    id: 115,
    question: "Which tracking technique rotates the beam continuously at a small offset angle?",
    options: ["Conical Scanning", "Monopulse Tracking", "Raster Scan", "Helical Scan"],
    answer: 0,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Conical scanning rotates the pencil beam around the tracking axis."
  },
  {
    id: 116,
    question: "In conical scanning, tracking error results in which type of modulation on the echo?",
    options: ["Frequency Modulation (FM)", "Phase Modulation (PM)", "Amplitude Modulation (AM)", "Pulse Width Modulation (PWM)"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Being off-axis causes the echo strength to vary sinusoidally as the beam rotates, creating an AM signal."
  },
  {
    id: 117,
    question: "The angle between the antenna's LOS and its rotation axis in conical scan is the:",
    options: ["Reflection angle", "Squint angle", "Critical angle", "Depression angle"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The squint angle determines the circular path of the rotating beam."
  },
  {
    id: 118,
    question: "What component extracts the return signal amplitude in a conical scan receiver?",
    options: ["Mixer", "Envelope detector", "Integrator", "Phase shifter"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The envelope detector recovers the AM signal that contains the tracking error information."
  },
  {
    id: 119,
    question: "The maximum conical scan rate is typically limited to:",
    options: ["The PRF", "Twice the PRF", "One fourth of the PRF", "1000 Hz"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The radar needs at least four returns (two per coordinate) per scan cycle."
  },
  {
    id: 120,
    question: "What is 'Squint Loss' or 'Crossover Loss'?",
    options: ["Loss of signal in space", "Drop in antenna gain at the tracking axis due to beam offset", "Noise from birds", "Interference from sea"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Because the beam is offset (squinted), the gain on the central tracking axis is less than the peak gain."
  },
  {
    id: 121,
    question: "Which tracking method uses four beams generated simultaneously from a single pulse?",
    options: ["Conical Scan", "Sequential Lobing", "Monopulse Tracking", "Frequency Scan"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Monopulse (single pulse) provides instantaneous error data without beam switching/rotation."
  },
  {
    id: 122,
    question: "Amplitude comparison monopulse requires that the signals from the four feeds have:",
    options: ["Different phases and same amplitude", "Same phase and different amplitudes", "Same frequency and different speed", "Varying polarization only"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Monopulse processing compares the relative amplitudes of the simultaneous beams to find the angular offset."
  },
  {
    id: 123,
    question: "In monopulse processing, the ratio Δ/Σ (Delta over Sum) is used to:",
    options: ["Calculate target speed", "Estimate target range", "Estimate the error angle independently of range and RCS", "Determine target color"],
    answer: 2,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Dividing by the sum signal cancels out variations in return strength due to distance or target size."
  },
  {
    id: 124,
    question: "Phase comparison monopulse extracts target coordinates by comparing:",
    options: ["Amplitudes from two horns", "Phase difference between signals from two or more antennas", "Time difference of two pulses", "Doppler shifts"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "It uses antenna elements at different spatial positions to detect the angle of arrival via phase delay."
  },
  {
    id: 125,
    question: "What system is used for continuously estimating the range of a moving target?",
    options: ["Phase gating", "Split-range gate tracking", "Frequency sweeping", "Manual stopwatch"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "A split gate (early and late) keeps the range measurement locked on the target echo."
  },
  {
    id: 126,
    question: "The process of reporting echo duration to the range tracker is called:",
    options: ["Initial sync", "Designation process", "Ping-pong", "Handshake"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "Designation provides the initial timing gates for the tracking system."
  },
  {
    id: 127,
    question: "What component is used to generate the error signal from the early and late gate outputs?",
    options: ["Amplifier", "Integrator", "Envelope detector", "Oscillator"],
    answer: 1,
    category: "Tracking Radar",
    subject: "Radar",
    explanation: "The integrated difference between early and late gates provides a steering signal for the range gate timing."
  },
  {
    id: 128,
    question: "Track-While-Scan (TWS) radars are unique because they can:",
    options: ["Only see one target", "Simultaneously track many targets and continue searching", "See targets behind mountains", "Work without electricity"],
    answer: 1,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "TWS radars use computer algorithms to maintain tracks on multiple targets detected during standard scans."
  },
  {
    id: 129,
    question: "In TWS, what is a 'Track File'?",
    options: ["A physical paper folder", "Digital record of position, velocity, and acceleration for a target", "List of radar operators", "Archive of weather data"],
    answer: 1,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "The track file maintains the kinematic state of individual targets as they move."
  },
  {
    id: 130,
    question: "The process of assigning a new detection to an existing track file is called:",
    options: ["Correlation / Association", "Synchronization", "Selection", "Filtering"],
    answer: 0,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "Algorithms correlate new observations with predicted positions to maintain track continuity."
  },
  {
    id: 131,
    question: "A search radar used to designate targets for a separate tracking radar is called:",
    options: ["Primary radar", "Acquisition radar", "Reference radar", "Station radar"],
    answer: 1,
    category: "Target Acquisition",
    subject: "Radar",
    explanation: "Acquisition radars find targets in a large volume to hand them off to narrow-beam trackers."
  },
  {
    id: 132,
    question: "Which acquisition pattern traces a helix in space?",
    options: ["Raster scan", "Spiral scan", "Helical scan", "Nodding scan"],
    answer: 2,
    category: "Target Acquisition",
    subject: "Radar",
    explanation: "Helical scan rotates in azimuth while continuously changing elevation."
  },
  {
    id: 133,
    question: "The 'Palmer Scan' combines which two movements?",
    options: ["Azimuth and Frequency", "Rapid circular scan with linear movement of the rotation axis", "Horizontal and Vertical zig-zag", "Fixed beam and Pulse width"],
    answer: 1,
    category: "Target Acquisition",
    subject: "Radar",
    explanation: "It derives its name from penmanship exercises, creating a series of loops."
  },
  {
    id: 134,
    question: "Which acquisition pattern 'paints' the search area in a uniform rectangular manner?",
    options: ["Helical", "Spiral", "Raster (TV) scan", "Nodding"],
    answer: 2,
    category: "Target Acquisition",
    subject: "Radar",
    explanation: "Raster scans move horizontally across the sector, stepping down with each pass."
  },
  {
    id: 135,
    question: "A Single Target Tracker (STT) typically provides how many observations per second?",
    options: ["1 every minute", "1", "10", "10,000"],
    answer: 2,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "STTs provide rapid, continuous data updates (often 10/sec) for weapon control."
  },
  {
    id: 136,
    question: "The Automatic Detection and Track (ADT) observation rate is determined by:",
    options: ["The speed of light", "The antenna rotation rate", "The target speed", "The number of users"],
    answer: 1,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "ADT updates occur once per antenna rotation (e.g., every 5-12 seconds)."
  },
  {
    id: 137,
    question: "A radar network that maximizes output peak-signal-to-mean-noise ratio is a:",
    options: ["Low pass filter", "High pass filter", "Matched filter", "Band-stop filter"],
    answer: 2,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "The matched filter is the optimal linear filter for maximizing SNR."
  },
  {
    id: 138,
    question: "The rule of thumb for pulse radar is that the receiver bandwidth B should be:",
    options: ["B ≈ Pulse Width (τ)", "B ≈ 1 / Pulse Width (τ)", "B ≈ τ^2", "B ≈ 0"],
    answer: 1,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "Bandwidth should be approximately the reciprocal of the pulse width to capture most signal energy without excessive noise."
  },
  {
    id: 139,
    question: "What is the peak signal-to-noise ratio at the output of a matched filter?",
    options: ["R_f = 2E / No", "R_f = E / 2No", "R_f = E / No", "R_f = (E/No)^2"],
    answer: 0,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "The maximum SNR depends only on the total signal energy (E) and noise power density (No)."
  },
  {
    id: 140,
    question: "The impulse response h(t) of a matched filter is related to the signal s(t) as:",
    options: ["h(t) = s(t)", "h(t) = s(t1 - t)", "h(t) = s(t)^2", "h(t) = log(s(t))"],
    answer: 1,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "Matched filter impulse response is a time-reversed and shifted version of the signal (mirror image)."
  },
  {
    id: 141,
    question: "The frequency response H(f) of a matched filter is the:",
    options: ["Square of the signal spectrum", "Complex conjugate of the signal spectrum", "Inverse of the signal spectrum", "Logarithm of the signal spectrum"],
    answer: 1,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "In the frequency domain, the matched filter response is the complex conjugate of the signal's Fourier transform."
  },
  {
    id: 142,
    question: "If a radar pulse is unmodulated and rectangular, its matched filter bandwidth should be roughly:",
    options: ["1 / τ", "τ", "τ^2", "1 / τ^2"],
    answer: 0,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "The bandwidth of the main lobe of a rectangular pulse is 1/τ."
  },
  {
    id: 143,
    question: "What is an 'Efficiency Factor' in the context of non-matched filters?",
    options: ["Ratio of antenna gain", "Ratio of output SNR to the SNR of a matched filter", "Battery efficiency", "Pulse compression ratio"],
    answer: 1,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "It measures how much SNR is lost compared to the theoretical ideal (matched filter)."
  },
  {
    id: 144,
    question: "The cross-correlation receiver is mathematically equivalent to:",
    options: ["A band-pass filter", "A matched filter", "A rectifier", "An oscillator"],
    answer: 1,
    category: "Detection of Signals",
    subject: "Radar",
    explanation: "Cross-correlating the received signal with a stored copy of the transmitted signal yields the same output as a matched filter."
  },
  {
    id: 145,
    question: "Information describing the distance and direction of targets is shown on a:",
    options: ["Radar Display", "Battery meter", "Voltmeter", "Thermometer"],
    answer: 0,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "Displays like PPI or A-scope visualize processed radar data for the operator."
  },
  {
    id: 146,
    question: "What does PPI stand for in radar terminology?",
    options: ["Power Peak Indicator", "Plan Position Indicator", "Pulse Phase Integrator", "Point Position Information"],
    answer: 1,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "PPI provides a 'map-like' top-down view of the area around the radar station."
  },
  {
    id: 147,
    question: "In an A-scope display, the horizontal axis represents:",
    options: ["Azimuth", "Elevation", "Range (Time)", "Signal Strength"],
    answer: 2,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "The A-scope is an oscilloscope-style plot of signal amplitude (Vertical) vs. time/range (Horizontal)."
  },
  {
    id: 148,
    question: "In an A-scope display, the vertical axis represents:",
    options: ["Range", "Signal Strength (Amplitude)", "Azimuth", "Temperature"],
    answer: 1,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "The height of the 'blip' on an A-scope indicates the strength of the return echo."
  },
  {
    id: 149,
    question: "The 'B-scope' display shows:",
    options: ["Range vs. Elevation", "Range vs. Azimuth", "Signal vs. Noise", "Map of the world"],
    answer: 1,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "B-scope presents a rectangular plot with azimuth on one axis and range on the other."
  },
  {
    id: 150,
    question: "Which display is typically used for Height Finder radars?",
    options: ["PPI", "A-scope", "RHI (Range-Height Indicator)", "E-scope"],
    answer: 2,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "RHI shows range on the horizontal axis and altitude on the vertical axis."
  },
  {
    id: 151,
    question: "In a PPI display, the center of the screen usually represents:",
    options: ["The target", "The radar antenna position", "The North pole", "The finish line"],
    answer: 1,
    category: "Radar Displays",
    subject: "Radar",
    explanation: "The PPI is centered on the radar's location, with targets appearing at their relative bearing and distance."
  },
  {
    id: 152,
    question: "What does 'Duplexer' do in a radar system?",
    options: ["Increases power by 2x", "Allows use of a single antenna for both transmitting and receiving", "Separates frequency", "Counts the number of targets"],
    answer: 1,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "A duplexer is a fast-acting switch that protects the receiver from the high-power transmitter pulse."
  },
  {
    id: 153,
    question: "The two main types of duplexer technologies are:",
    options: ["Copper and Zinc", "Gas-discharge (TR/ATR) and Solid-state (Ferrite)", "Manual and Automatic", "Analog and Digital"],
    answer: 1,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "Classic systems use Transmit-Receive (TR) gas tubes; modern systems use ferrite circulators or diodes."
  },
  {
    id: 154,
    question: "A radar receiver's Noise Figure (F) is defined as:",
    options: ["Input SNR divided by Output SNR", "Output SNR divided by Input SNR", "Total noise power", "Number of noise sources"],
    answer: 0,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "Noise figure measures how much the SNR degrades as the signal passes through the receiver stages."
  },
  {
    id: 155,
    question: "What is the relationship between Noise Figure (F) and Effective Noise Temperature (Te)?",
    options: ["Te = To(F-1)", "Te = To/F", "Te = F * To", "Te = To * log(F)"],
    answer: 0,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "Effective temperature is a way to express noise figure in degrees Kelvin (To = 290K reference)."
  },
  {
    id: 156,
    question: "For a multi-stage receiver, the overall noise figure is determined primarily by:",
    options: ["The last stage", "The middle stage", "The first stage", "The average of all stages"],
    answer: 2,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "According to Friis' formula, the first stage's noise figure is most critical as its noise is amplified by all following stages."
  },
  {
    id: 157,
    question: "Which beamforming technique uses multiple small antennas to steer a beam electronically?",
    options: ["Phased Array", "Mechanical Rotation", "Parabolic Reflector", "Horn Antenna"],
    answer: 0,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Phased arrays adjust the phase of each element to steer the beam without moving parts."
  },
  {
    id: 158,
    question: "How is the beam steering angle θ changed in a phased array?",
    options: ["By moving the mount", "By changing the relative phase shift (φ) between elements", "By turning elements on/off", "By changing the frequency only"],
    answer: 1,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Linear phase gradients across the array elements determine the direction of the wave-front."
  },
  {
    id: 159,
    question: "A 'Phase Shifter' in a phased array is used to:",
    options: ["Change the signal frequency", "Adjust the time delay/phase of the signal to each element", "Reduce noise", "Filter external signals"],
    answer: 1,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Phase shifters are the key components that enable electronic beam steering."
  },
  {
    id: 160,
    question: "The spacing between elements (d) in a phased array is typically around:",
    options: ["λ/2 (half-wavelength)", "10λ", "λ", "0.1λ"],
    answer: 0,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Half-wavelength spacing prevents the formation of unwanted 'grating lobes' in the antenna pattern."
  },
  {
    id: 161,
    question: "Which navigational aid provides azimuth (bearing) information to an aircraft?",
    options: ["DME", "VOR", "ILS", "Altimeter"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "VOR (VHF Omnidirectional Range) allows aircraft to determine their bearing relative to a ground station."
  },
  {
    id: 162,
    question: "ILS (Instrument Landing System) consists of which two main radio beams?",
    options: ["Up and Down", "Localizer and Glide Slope", "Azimuth and Range", "North and South"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "The Localizer provides horizontal guidance; the Glide Slope provides vertical guidance for landing."
  },
  {
    id: 163,
    question: "The 'Localizer' in an ILS system operates in which frequency band?",
    options: ["108 - 112 MHz (VHF)", "329 - 335 MHz (UHF)", "1 - 2 GHz", "10 GHz"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "VHF frequencies are used for the horizontal localizer beam."
  },
  {
    id: 164,
    question: "The 'Glide Slope' in an ILS system operates in which frequency band?",
    options: ["VHF", "UHF (around 330 MHz)", "L-Band", "Ku-Band"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "The vertical glide path uses higher UHF frequencies for better precision."
  },
  {
    id: 165,
    question: "Which system measures the slant range between an aircraft and a ground station?",
    options: ["VOR", "DME", "ADF", "Radar Altimeter"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "DME (Distance Measuring Equipment) uses round-trip timing of pulses to calculate range."
  },
  {
    id: 166,
    question: "DME operates on the principle of:",
    options: ["Interrogation and Response", "Phase shifting", "Frequency modulation", "Magnetic reflection"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "The aircraft (interrogator) sends a pulse; the ground station (transponder) replies with a delayed pulse."
  },
  {
    id: 167,
    question: "TACAN (Tactical Air Navigation) is primarily used by:",
    options: ["Commercial airlines", "Military aircraft", "Ships at sea", "Space shuttles"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "TACAN combines bearing (VOR-like) and distance (DME) in one military-specific UHF system."
  },
  {
    id: 168,
    question: "What is the frequency band for VOR?",
    options: ["108 - 117.95 MHz", "1000 - 1100 MHz", "329 - 335 MHz", "2 - 4 MHz"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "VOR uses the upper end of the VHF aeronautical band."
  },
  {
    id: 169,
    question: "In VOR, bearing is determined by comparing the phase of which two signals?",
    options: ["Reference and Variable phase signals", "Sine and Cosine weights", "Local and Remote frequency", "Clock and Data"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "The receiver measures the phase difference between a reference signal and a rotating 'variable' signal."
  },
  {
    id: 170,
    question: "Marker Beacons in an ILS system signify:",
    options: ["How much fuel is left", "Specific distance points on the approach path", "The name of the airport", "The wind speed"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "Outer, Middle, and Inner markers provide audible/visual cues of progress during a landing approach."
  },
  {
    id: 171,
    question: "Which long-range navigation system uses the LF (30-300 kHz) band?",
    options: ["GPS", "LORAN-C", "DME", "VOR"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "LORAN-C provides long-range positioning by measuring time differences between pulses from master and slave ground stations."
  },
  {
    id: 172,
    question: "DECCA Navigator uses which principle for positioning?",
    options: ["Pulse timing", "Phase comparison of continuous waves", "Doppler shift", "Satellite range"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "DECCA creates a hyperbolic grid by comparing the phases of synchronized radio waves."
  },
  {
    id: 173,
    question: "Which global navigation system used VLF (below 30 kHz) for worldwide coverage?",
    options: ["OMEGA", "LORAN-A", "GPS", "GSM"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "OMEGA was the first global radio navigation system, using very low frequencies to reach across oceans."
  },
  {
    id: 174,
    question: "The MLS (Microwave Landing System) was intended to replace ILS because it provides:",
    options: ["Wider coverage and curved approach paths", "Only straight paths", "Lower power usage", "Higher frequency and smaller antennas"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "MLS uses time-referenced scanning beams to allow more flexible landing paths than the fixed beams of ILS."
  },
  {
    id: 175,
    question: "In MLS, the 'Azimuth' station typically scans a sector of:",
    options: ["+/- 10 degrees", "+/- 40-60 degrees", "360 degrees", "Fixed 0 degrees"],
    answer: 1,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "MLS offers a much wider search volume for incoming aircraft than standard ILS."
  },
  {
    id: 176,
    question: "The radar cross-section (RCS) of an aircraft is primarily dependent on:",
    options: ["Its color", "Its weight", "Its physical size and shape relative to wavelength", "The humidity"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "RCS is a measure of how much radar energy a target reflects back to the source."
  },
  {
    id: 177,
    question: "Which target shape has the most uniform RCS from all directions?",
    options: ["Flat plate", "Sphere", "Corner reflector", "Cone"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "A sphere presents the same cross-sectional profile regardless of its orientation."
  },
  {
    id: 178,
    question: "What is a 'Corner Reflector' used for?",
    options: ["Reducing RCS", "Enhancing RCS of a small target for calibration or rescue", "Filtering noise", "Cooling the antenna"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Corner reflectors reflect incoming energy directly back to the transmitter, appearing much 'larger' to the radar."
  },
  {
    id: 179,
    question: "Stealth technology (VLO) aims to reduce which target parameter?",
    options: ["Weight", "Speed", "RCS", "Altitude"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Reducing RCS through shaping and radar-absorbent materials (RAM) makes an aircraft harder to detect."
  },
  {
    id: 180,
    question: "How does rain affect radar performance at X-band and higher?",
    options: ["No effect", "Increases range", "Causes signal attenuation and clutter", "Makes target bigger"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "High-frequency signals are absorbed and scattered by water droplets, obscuring targets."
  },
  {
    id: 181,
    question: "The 'Blind Speed' in MTI radar occurs when the target's displacement per PRT is:",
    options: ["Half a wavelength", "An integer multiple of half-wavelengths (nλ/2)", "Zero", "One kilometer"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "At blind speeds, the phase change between pulses is a multiple of 2π, making the target look stationary to the canceler."
  },
  {
    id: 182,
    question: "To eliminate blind speeds within the search volume, MTI radars use:",
    options: ["Higher power", "Staggered PRF (variable pulse intervals)", "Larger antennas", "Lower frequency"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Varying the time between pulses shifts the blind speeds to ranges outside of interest."
  },
  {
    id: 183,
    question: "A radar that uses the Doppler effect to measure target velocity is called:",
    options: ["CW Radar", "Altimeter", "Phased Array", "Monopulse"],
    answer: 0,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Continuous Wave (CW) radars detect frequency shifts caused by relative motion."
  },
  {
    id: 184,
    question: "What is the primary drawback of a simple CW radar?",
    options: ["Cannot measure target range", "Uses too much power", "Only works at night", "Very expensive"],
    answer: 0,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Since there's no pulse/timing reference, a pure CW radar cannot determine the distance to the target."
  },
  {
    id: 185,
    question: "How can CW radar be modified to measure range?",
    options: ["Add a second antenna", "Use Frequency Modulation (FMCW)", "Increase power", "Slow down the speed of light"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Modulating the frequency provides a timing reference (the difference between transmit and receive frequencies at any instant)."
  },
  {
    id: 186,
    question: "The 'Radar Altimeter' in an aircraft is typically which type of radar?",
    options: ["Pulse Doppler", "FMCW", "Phased Array", "Monopulse"],
    answer: 1,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "FMCW is excellent for short-range high-precision measurements like altitude during landing."
  },
  {
    id: 187,
    question: "Which antenna property describes its ability to concentrate energy in a specific direction?",
    options: ["Bandwidth", "Directivity / Gain", "Polarization", "Weight"],
    answer: 1,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Gain is the ratio of power density in the main beam to that of an isotropic radiator."
  },
  {
    id: 188,
    question: "In a parabolic reflector antenna, the 'Feed' is placed at:",
    options: ["The center of the dish", "The focal point", "The edge of the dish", "In the back corner"],
    answer: 1,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "The focal point ensures all reflected waves emerge in parallel paths (plane waves)."
  },
  {
    id: 189,
    question: "What is 'Antenna Sidelobe'?",
    options: ["Desired secondary beams", "Unwanted smaller beams in directions other than the main beam", "The name of the operator", "The power cable"],
    answer: 1,
    category: "Radar Antennas",
    subject: "Radar",
    explanation: "Sidelobes waste energy and can pick up unwanted interference or clutter."
  },
  {
    id: 190,
    question: "Atmospheric 'Ducting' occurs when:",
    options: ["It rains heavily", "There is a temperature inversion or specific humidity profile", "The sun is too bright", "Radar power is too high"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Ducting traps radar waves near the surface, allowing them to travel much further than the horizon."
  },
  {
    id: 191,
    question: "The standard pulse duration for a long-range search radar might be:",
    options: ["1 - 10 microseconds", "1 - 10 milliseconds", "1 - 10 nanoseconds", "1 hour"],
    answer: 0,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Microsecond pulses provide a good balance between energy and range resolution."
  },
  {
    id: 192,
    question: "A radar with a pulse width of 1 microsecond has a range resolution of approximately:",
    options: ["15 meters", "150 meters", "1500 meters", "1 kilometer"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Range resolution = (c * τ) / 2. For 1μs, (300m / 2) = 150m."
  },
  {
    id: 193,
    question: "The 'Maximum Unambiguous Range' of a radar depends on:",
    options: ["Antenna gain", "Transmitter power", "Pulse Repetition Frequency (PRF)", "Receiver noise"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "The time between pulses determines how far a pulse can travel out and back before the next one starts."
  },
  {
    id: 194,
    question: "In a superheterodyne radar receiver, the Local Oscillator (LO) helps in:",
    options: ["Transmitting the main pulse", "Converting high-frequency RF to a lower Intermediate Frequency (IF)", "Searching for targets", "Cooling the system"],
    answer: 1,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "Mixing the RF signal with an LO frequency creates an IF signal which is easier to filter and amplify."
  },
  {
    id: 195,
    question: "The IF frequency in most radar systems is around:",
    options: ["30 or 60 MHz", "10 GHz", "1 Hz", "1000 GHz"],
    answer: 0,
    category: "Radar Receivers",
    subject: "Radar",
    explanation: "30 MHz and 60 MHz are standard historically for efficient signal processing."
  },
  {
    id: 196,
    question: "What does CFAR stand for in radar signal processing?",
    options: ["Constant False Alarm Rate", "Continuous Frequency And Range", "Common Filter Area Ratio", "Complete Feedback Action Record"],
    answer: 0,
    category: "Radar Systems",
    subject: "Radar",
    explanation: "CFAR algorithms adjust the detection threshold dynamically to maintain a stable false alarm probability in changing clutter."
  },
  {
    id: 197,
    question: "What is the 'Butterfly Effect' in MTI radar displays?",
    options: ["The screen flashes blue", "Fluctuating echo on an A-scope caused by moving target Doppler", "A physical moth on the screen", "Power grid failure"],
    answer: 1,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "Successive returns from a moving target change phase, causing the amplitude on a non-coherent display to 'jitter' like wings."
  },
  {
    id: 198,
    question: "How many ground stations are in a standard LORAN-C chain?",
    options: ["1 master and 2-4 slaves", "1 only", "100", "20 geostationary satellites"],
    answer: 0,
    category: "Navigation Aids",
    subject: "Radar",
    explanation: "LORAN-C requires a master station for timing synchronization and several slave stations for triangulation."
  },
  {
    id: 199,
    question: "The basic principle of the Radar equation relates:",
    options: ["Speed and Color", "Weight and Height", "Received power to transmit power, gain, distance, and RCS", "User login and Password"],
    answer: 2,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "The radar equation is the fundamental model for estimating radar detection range."
  },
  {
    id: 200,
    question: "The term RADAR was originally an acronym for:",
    options: ["Radio Detection And Ranging", "Rapid Airborne Data Acquisition Relay", "Radio Azimuth Direction And Reflection", "Radial Array Display And Recognition"],
    answer: 0,
    category: "Radar Theory",
    subject: "Radar",
    explanation: "RADAR stands for Radio Detection And Ranging."
  }
];

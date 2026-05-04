export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of the correct option
  category: "Multiple Access" | "Earth Station Technology" | "GPS & Navigation";
  explanation?: string;
}

export const questions: Question[] = [
  // Module 4: Multiple Access (1-33)
  {
    id: 1,
    question: "What does FDMA stand for in satellite communications?",
    options: ["Frequency Data Multiple Access", "Frequency Division Multiple Access", "Fast Digital Multiple Access", "Fixed Division Multiple Access"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 2,
    question: "In an FDMA system, what do users share?",
    options: ["Time only", "The same code", "The transponder bandwidth and power", "A single ground station"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 3,
    question: "Do users in an FDMA system transmit all the time or in bursts?",
    options: ["Transmit all time", "Transmit in bursts", "Transmit only when requested", "Transmit alternately"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 4,
    question: "What is the purpose of guard bands in FDMA?",
    options: ["To increase power", "To prevent interference between adjacent channels", "To synchronize time slots", "To encrypt the signal"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 5,
    question: "What is the formula for the number of carriers (K) in a bandwidth-limited FDMA case?",
    options: ["(Bt + Bg) / Bc", "(Bt - Bg) / Bc", "Bt / (Bg + Bc)", "Bc / (Bt - Bg)"],
    answer: 1,
    category: "Multiple Access",
    explanation: "Bt is total bandwidth, Bg is total guardband, and Bc is carrier bandwidth."
  },
  {
    id: 6,
    question: "What does MCPC stand for?",
    options: ["Mobile Channel Per Carrier", "Multi Carrier Power Combiner", "Multi Channel Per Carrier", "Maximum Capacity Per Channel"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 7,
    question: "What does SCPC stand for?",
    options: ["Single Carrier Power Controller", "Single Channel Per Carrier", "Satellite Connection Per Channel", "Small Channel Per Carrier"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 8,
    question: "Which of the following is a limitation of FDMA?",
    options: ["Inefficient use of spectrum due to guard bands", "High power consumption at night", "Need for extremely large antennas", "Requires clear sky conditions only"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 9,
    question: "What products are generated when an FDMA transponder operates in the non-linear region?",
    options: ["Harmonic products", "Intermodulation (IM) products", "Thermal noise only", "Reflection products"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 10,
    question: "Power back-off in FDMA results in what effect on system capacity?",
    options: ["Increases capacity", "Does not affect capacity", "Reduces system capacity", "Doubles bandwidth"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 11,
    question: "Which access technique requires strict power control to maintain linear operation in multi-carrier mode?",
    options: ["TDMA", "CDMA", "FDMA", "Pure ALOHA"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 12,
    question: "The SPADE system used by Intelsat is an example of which access scheme?",
    options: ["PCM/PSK/FDMA", "FM/SCPC/FDMA", "PCM/TDM/CDMA", "FM/SCPC/TDMA"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 13,
    question: "Is FDMA considered a flexible system for handling dynamic, varying bandwidth traffic?",
    options: ["Yes, very flexible", "No, filters need to be changed to accommodate varying bandwidth", "Yes, it uses digital multiplexing", "Yes, it handles any traffic automatically"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 14,
    question: "What does TDMA stand for?",
    options: ["Tele Division Multiple Access", "Time Division Multiple Access", "Track Division Master Access", "Temporal Digital Multiple Access"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 15,
    question: "In TDMA, what resource is being shared among users?",
    options: ["Frequency", "Power", "Time", "Space"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 16,
    question: "In TDMA, when a user transmits, what resources do they utilize?",
    options: ["Full BW and Full Power", "Partial BW and Full Power", "Full BW and Partial Power", "Partial BW and Partial Power"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 17,
    question: "TDMA transmission from users occurs in which mode?",
    options: ["Continuous mode", "Burst mode", "Alternating mode", "Wait-and-send mode"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 18,
    question: "What normally marks the beginning of a TDMA frame?",
    options: ["User Data Burst", "Guard Time", "Control Burst (Reference Burst)", "End-of-frame marker"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 19,
    question: "What is 'Guard Time' (GT) in the TDMA burst format?",
    options: ["Time to recharge satellite batteries", "Time between bursts to prevent collision due to delay variations", "Time used for error correction", "Time for station ID coding"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 20,
    question: "What is the function of the 'Unique Word' (UW) in a TDMA burst?",
    options: ["To encrypt the message", "For burst synchronization and identification", "To indicate the end of the message", "To check for signal power"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 21,
    question: "What does DSI stand for in the context of TDMA capacity enhancement?",
    options: ["Digital System Interface", "Digital Signal Integration", "Digital Speech Interpolation", "Direct Satellite Interaction"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 22,
    question: "TDMA frame efficiency is defined as the ratio of:",
    options: ["User data bits to Total bits in the frame", "Total bits to Overhead bits", "Preamble bits to User data bits", "Control bits to Data bits"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 23,
    question: "What does CDMA stand for?",
    options: ["Carrier Division Multiple Access", "Code Division Multiple Access", "Continuous Division Multiple Access", "Circuit Digital Multiple Access"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 24,
    question: "CDMA is also known by which other name?",
    options: ["Frequency Hopping Data Access", "Spread Spectrum Multiple Access (SSMA)", "Synchronous Serial Master Access", "Space Segment Multiple Access"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 25,
    question: "In CDMA, what is used to make a signal orthogonal to other users' signals?",
    options: ["A specific time slot", "A unique frequency band", "A unique code (PN sequence)", "A specific polarization"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 26,
    question: "Do users in a CDMA system transmit full time or in bursts?",
    options: ["Full time", "Burst mode", "Fixed intervals", "Only when requested"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 27,
    question: "What are the two main types of CDMA implementation?",
    options: ["TDMA and FDMA", "Direct Sequence and Frequency Hopping", "Pure and Slotted", "Fixed and Demand Assigned"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 28,
    question: "What is 'Processing Gain' (Gp) in a CDMA system?",
    options: ["Ratio of PN rate to data rate", "Ratio of data rate to PN rate", "Logarithm of total power", "Gain achieved by the HPA"],
    answer: 0,
    category: "Multiple Access"
  },
  {
    id: 29,
    question: "What does DAMA stand for?",
    options: ["Digital Assignment Multiple Access", "Direct Access Master Assignment", "Demand Assigned Multiple Access", "Data Associated Multiple Access"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 30,
    question: "The ALOHA system is a form of:",
    options: ["Fixed Assigned Multiple Access", "Point-to-Point dedicated link", "Random Access DAMA system", "Manual assignment system"],
    answer: 2,
    category: "Multiple Access"
  },
  {
    id: 31,
    question: "In Pure ALOHA, what happens if a packet collision is observed?",
    options: ["The packet is discarded forever", "The packet is retransmitted", "The station waits until next week", "The system shuts down"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 32,
    question: "How does Slotted ALOHA improve throughput compared to Pure ALOHA?",
    options: ["By using more power", "By synchronizing transmission times to common time slots", "By using longer packets", "By decreasing bandwidth per user"],
    answer: 1,
    category: "Multiple Access"
  },
  {
    id: 33,
    question: "Which ALOHA flavor uses a reservation phase and a transmission phase?",
    options: ["Pure ALOHA", "Slotted ALOHA", "Reservation ALOHA", "Fast ALOHA"],
    answer: 2,
    category: "Multiple Access"
  },

  // Module 5: Earth Station Technology (34-67)
  {
    id: 34,
    question: "Which type of Earth Station is built as a fixed structure and carries large telephone traffic?",
    options: ["Portable Earth Station", "VSAT", "Large Earth Station", "Transportable Earth Station"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 35,
    question: "What does VSAT stand for?",
    options: ["Very Small Antenna Terminal", "Variable Small Aperture Terminal", "Very Small Aperture Terminal", "VHF Satellite Access Terminal"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 36,
    question: "DTH and TVRO are examples of which kind of Earth Stations?",
    options: ["Two-way stations", "Receive-only Earth Stations", "Transmit-only stations", "Mobile-only stations"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 37,
    question: "Which of the following is NOT a major subsystem of a typical Earth Station?",
    options: ["Antenna System", "Power System", "Atmospheric Injection System", "Tracking System"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 38,
    question: "Which module connects the earth station to the terrestrial network?",
    options: ["RF Combiner", "Terrestrial Interface Module (TIM)", "LNA", "Frequency Synthesizer"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 39,
    question: "The Up-converter is found in which system part of the earth station?",
    options: ["Receive System", "Transmit System", "Power System", "Monitoring System"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 40,
    question: "The Down-converter is found in which system part of the earth station?",
    options: ["Transmit System", "Receive System", "Interface System", "Control System"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 41,
    question: "What does LNA stand for?",
    options: ["Level Node Amplifier", "Low Noise Amplifier", "Linear Node Array", "Long Network Antenna"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 42,
    question: "What does HPA stand for?",
    options: ["High Power Amplifier", "High Performance Antenna", "Hybrid Phase Array", "High Pulse Amplitude"],
    answer: 0,
    category: "Earth Station Technology"
  },
  {
    id: 43,
    question: "A Cassegrain antenna system typically consists of:",
    options: ["A main reflector only", "A main reflector and a sub-reflector", "Two main reflectors", "A parabolic reflector and a dipole"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 44,
    question: "In a Cassegrain antenna, the sub-reflector shape is:",
    options: ["Concave towards main reflector", "Flat", "Convex towards main reflector", "Spherical"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 45,
    question: "In a Gregorian antenna, how is the sub-reflector oriented?",
    options: ["Concave towards main reflector", "Convex towards main reflector", "Parallel to beam axis", "Perpendicular to beam axis"],
    answer: 0,
    category: "Earth Station Technology"
  },
  {
    id: 46,
    question: "What is the primary advantage of the Offset Feed Horn Antenna?",
    options: ["It is cheaper to build", "It avoids sub-reflector blockage of the main beam", "It uses less power", "It doesn't require a feed horn"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 47,
    question: "Which antenna tracking method requires a human operator to control movements?",
    options: ["Auto tracking", "Program tracking", "Manual tracking", "Step tracking"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 48,
    question: "Program controlled tracking is also known as:",
    options: ["Closed loop tracking", "Open loop tracking", "Hill climbing", "Beacon tracking"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 49,
    question: "Auto tracking systems are categorized as:",
    options: ["Open loop systems", "Manual systems", "Closed loop systems", "Fixed systems"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 50,
    question: "Step-tracking is also popularly known as which technique?",
    options: ["Hill Climbing", "Deep Diving", "Peak Hunting", "Phase Selecting"],
    answer: 0,
    category: "Earth Station Technology"
  },
  {
    id: 51,
    question: "In conical scanning, the antenna beam is rotated around an axis offset by a small angle called:",
    options: ["Phase angle", "Squint angle", "Elevation angle", "Azimuth angle"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 52,
    question: "Which of these tracking methods provides the highest accuracy but is most complex?",
    options: ["Manual tracking", "Step-tracking", "Mono-pulse tracking", "Program tracking"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 53,
    question: "What does HPBW stand for regarding antenna performance?",
    options: ["High Power Band Width", "Half Power Beam Width", "High Performance Beam Width", "Horizontal Phase Beam Width"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 54,
    question: "Decreasing the HPBW of an antenna has what effect on its gain?",
    options: ["Decreases gain", "Increases gain", "Has no effect on gain", "Zeroes the gain"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 55,
    question: "What is the typical degree of polarization isolation needed for a high-quality earth station?",
    options: ["10 dB", "20 dB", "30 dB", "60 dB"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 56,
    question: "A Travelling Wave Tube Amplifier (TWTA) is a type of:",
    options: ["Microwave power device", "Low Noise Amplifier", "Antenna Feed", "Baseband processor"],
    answer: 0,
    category: "Earth Station Technology"
  },
  {
    id: 57,
    question: "Which HPA device is commonly used for very high power outputs (up to 3 kW) in large earth stations?",
    options: ["SSPA", "Klystron Amplifier", "Transistor Amplifier", "Dipole"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 58,
    question: "What does SSPA stand for?",
    options: ["Static Satellite Power Array", "Solid-State Power Amplifier", "Short Stable Power Amplifier", "Signal Specific Power Amplifier"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 59,
    question: "Operating an HPA in its saturated region is problematic for multi-carrier operations because:",
    options: ["It wastes too much electricity", "It generates intermodulation (IM) products", "It reduces antenna gain", "It stops the tracking system"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 60,
    question: "What is a typical LNA noise temperature for a large earth station?",
    options: ["300 K", "100 K", "45 K", "30 K"],
    answer: 3,
    category: "Earth Station Technology"
  },
  {
    id: 61,
    question: "Parametric amplifiers can reach a noise temperature of 23 K when they are:",
    options: ["Uncooled", "Thermoelectrically cooled", "Cryogenically cooled", "Operated in vacuum"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 62,
    question: "Which material is commonly used in FETs for Earth Station LNAs due to high carrier mobility?",
    options: ["Silicon (Si)", "Germanium (Ge)", "Gallium Arsenide (GaAs)", "Copper"],
    answer: 2,
    category: "Earth Station Technology"
  },
  {
    id: 63,
    question: "Double conversion up-converters are preferred over single conversion because they:",
    options: ["Use less power", "Provide better image rejection and easier filtering", "Are easier to build manually", "Don't require a crystal oscillator"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 64,
    question: "The frequency standard in an earth station transmit system usually employs:",
    options: ["A simple RC circuit", "A rubidium/cesium clock or high stable crystal oscillator", "The mains power frequency", "The antenna rotation rate"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 65,
    question: "Antenna directivity is important for:",
    options: ["Improving signal brightness", "Discrimination against signals from adjacent satellites", "Reducing the weight of the antenna", "Eliminating sun outages"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 66,
    question: "The mission control facility typically includes which two segments?",
    options: ["Main office and Backup office", "Satellite Control Centre and TT&C Earth Station", "Power plant and Data center", "Up-link station and Down-link station"],
    answer: 1,
    category: "Earth Station Technology"
  },
  {
    id: 67,
    question: "VSATs generally operate in which frequency band?",
    options: ["L band", "S band", "C band", "Ku band"],
    answer: 3,
    category: "Earth Station Technology"
  },

  // Module 6: GPS & Navigation (68-100)
  {
    id: 68,
    question: "When was the first reference to a compass being used for navigation at sea?",
    options: ["800 AD", "1119 AD", "1460 AD", "1773 AD"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 69,
    question: "Galileo Galilei discovered the first four moons of Jupiter in 1610, which helped in establishing:",
    options: ["Latitude more accurately", "Longitude more accurately", "The size of the Earth", "The distance to the Sun"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 70,
    question: "What instrument did John Harrison develop in 1773 to solve the problem of measuring longitude at sea?",
    options: ["Quadrant", "Gyrocompass", "Marine Chronometer", "Radar"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 71,
    question: "Which radio navigation system was developed for aerial warfare during World War II?",
    options: ["GPS", "GLONASS", "LORAN", "NAVIC"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 72,
    question: "The signals from which satellite launched in 1957 indicated that Doppler shifts could determine ground positions?",
    options: ["Sputnik", "Navstar-1", "Transit", "GIOVE-B"],
    answer: 0,
    category: "GPS & Navigation"
  },
  {
    id: 73,
    question: "The first GPS satellite, Navstar-1, was launched in which year?",
    options: ["1957", "1960", "1978", "1993"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 74,
    question: "The baseline GPS system became fully operational in 1993 with how many satellites?",
    options: ["12", "24", "30", "36"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 75,
    question: "In which orbital class are GPS satellites located?",
    options: ["LEO (Low Earth Orbit)", "MEO (Medium Earth Orbit)", "GEO (Geostationary)", "HEO (Highly Elliptical)"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 76,
    question: "How many satellites must a GPS receiver have in view to solve for 3D coordinates (x, y, z) and receiver clock offset (t)?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    category: "GPS & Navigation"
  },
  {
    id: 77,
    question: "What is 'Pseudorange'?",
    options: ["The actual distance to the satellite", "The distance with clock offset error included", "The distance measured in light years", "The distance between two satellites"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 78,
    question: "What is the typical accuracy of atomic clocks carried by GPS satellites?",
    options: ["1 part in 10^3", "1 part in 10^7", "1 part in 10^11", "1 part in 10^20"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 79,
    question: "What is the accuracy of standard crystal oscillators carried by GPS receivers?",
    options: ["1 part in 10^11", "1 part in 10^5 or 10^6", "1 part in 10^2", "1 part in 10^20"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 80,
    question: "If there is a clock offset error of Δt, what is the resulting horizontal range error?",
    options: ["Δt", "c * Δt", "c^2 * Δt", "Δt / c"],
    answer: 1,
    category: "GPS & Navigation",
    explanation: "where c is the velocity of light."
  },
  {
    id: 81,
    question: "What is the GPS L1 carrier frequency?",
    options: ["1227.6 MHz", "1.023 MHz", "1575.42 MHz", "2492.028 MHz"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 82,
    question: "What is the GPS L2 carrier frequency?",
    options: ["1575.42 MHz", "1227.6 MHz", "10.23 MHz", "1.023 MHz"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 83,
    question: "What does the C/A code stand for in GPS?",
    options: ["Common Access", "Coarse Acquisition", "Continuous Availability", "Combined Accuracy"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 84,
    question: "What does the P code stand for in GPS?",
    options: ["Position Code", "Phase Code", "Professional Code", "Precision Code"],
    answer: 3,
    category: "GPS & Navigation"
  },
  {
    id: 85,
    question: "What is the length of the GPS C/A code PN sequence in bits?",
    options: ["15", "1023", "2046", "32767"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 86,
    question: "What is the time duration of one C/A code PN sequence?",
    options: ["1.0 ms", "1.0 s", "0.6 s", "30 ns"],
    answer: 0,
    category: "GPS & Navigation"
  },
  {
    id: 87,
    question: "What is the clock rate of the C/A code?",
    options: ["10.23 MHz", "1.023 MHz", "50 Hz", "1575 MHz"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 88,
    question: "Precision (P) code is transmitted on L1 with what relation to the carrier?",
    options: ["In-phase", "Phase quadrature", "30 degree offset", "Filtered out"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 89,
    question: "The GPS navigation message consists of 25 frames. Each frame repeats every:",
    options: ["0.6 seconds", "6 seconds", "30 seconds", "1 minute"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 90,
    question: "How long does it take to receive the full GPS navigation message containing 25 frames?",
    options: ["30 seconds", "12.5 minutes", "24 hours", "12 hours"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 91,
    question: "Which components are found in Sub-frame 1 of the GPS message?",
    options: ["Ephemeris parameters", "Almanac data", "Satellite clock correction and health", "Text messages from the Hub"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 92,
    question: "What information is provided by 'Ephemeris parameters' in the GPS message?",
    options: ["General station IDs", "Precise orbital data for the transmitting satellite", "Weather information", "Coarse data for all satellites"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 93,
    question: "What information is provided by 'Almanac data' in the GPS message?",
    options: ["Correction for current clock only", "Coarse orbital and status data for all satellites in constellation", "Highest precision coordinate correction", "List of ground stations"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 94,
    question: "Which GPS segment handles synchronization with Universal Time Coordination (UTC)?",
    options: ["Space Segment", "User Segment", "Control Segment", "Atmospheric Segment"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 95,
    question: "What does GDOP stand for regarding position errors?",
    options: ["Global Data Output Position", "Geometric Dilution of Precision", "Gradient Data Of Points", "Ground Distance Offset Parameter"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 96,
    question: "The error caused by signal reflection from buildings or mountains before reaching the receiver is:",
    options: ["Ionospheric error", "Tropospheric error", "Multi-path error", "Satellite clock error"],
    answer: 2,
    category: "GPS & Navigation"
  },
  {
    id: 97,
    question: "Which error is caused by signal delay when passing through the upper part of the atmosphere?",
    options: ["Ionospheric error", "Receiver error", "Ephemeric error", "Solar flare error"],
    answer: 0,
    category: "GPS & Navigation"
  },
  {
    id: 98,
    question: "Differential GPS (DGPS) system uses what to improve accuracy?",
    options: ["More satellites", "A fixed reference station with known coordinates", "Faster processors in receivers", "Dual frequency antennas"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 99,
    question: "IRNSS (NavIC) is the regional navigation system of which country?",
    options: ["China", "India", "Japan", "Russia"],
    answer: 1,
    category: "GPS & Navigation"
  },
  {
    id: 100,
    question: "Which of the following belongs to Russia?",
    options: ["GPS", "GALILEO", "GLONASS", "BEIDOU"],
    answer: 2,
    category: "GPS & Navigation"
  }
];

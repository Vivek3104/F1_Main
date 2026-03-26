export const SLIDES = [
  {
    image: "/hero-bg.png",
    title: "SAO PAULO",
    subtitle: "The Interlagos circuit awaits the most intense battle of the season.",
    grandPrix: "SÃO PAULO GP 2026",
  }
];

export const RACES = [
  {
    id: 1,
    title: "SÃO PAULO GP",
    location: "BRAZIL",
    date: "MAR 22-24",
    image: "/hero-bg.png",
    isLive: true,
  },
  {
    id: 2,
    title: "ABU DHABI GP",
    location: "UAE",
    date: "APR 05-07",
    image: "/track-overhead.png",
    isLive: false,
  },
  {
    id: 3,
    title: "MONACO GP",
    location: "MONACO",
    date: "MAY 12-14",
    image: "/hero-bg.png",
    isLive: false,
  },
  {
    id: 4,
    title: "SILVERSTONE GP",
    location: "UK",
    date: "JUL 07-09",
    image: "/track-overhead.png",
    isLive: false,
  }
];

export const DRIVERS = [
  // MERCEDES
  { id: 1, name: "GEORGE RUSSELL", team: "MERCEDES", number: "63", color: "#27F4D2", image: "/drivers/driver-5-png.png", carImage: "/media__1774517208136.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:11.234", trend: "up", points: 245, wins: 2, podiums: 8, championships: 0, starts: 124, placements: ["2nd", "1st", "10th", "6th", "1st"] },
  { id: 2, name: "KIMI ANTONELLI", team: "MERCEDES", number: "12", color: "#27F4D2", image: "/drivers/driver-6-png.png", carImage: "/media__1774517208136.png", flag: "🇮🇹", countryCode: "IT", lapTime: "1:12.456", trend: "up", points: 89, wins: 0, podiums: 1, championships: 0, starts: 24, placements: ["8th", "5th", "12th", "9th", "3rd"] },
  // FERRARI
  { id: 3, name: "CHARLES LECLERC", team: "FERRARI", number: "16", color: "#f00000", image: "/drivers/driver-1-png.png", carImage: "/media__1774517208136.png", flag: "🇲🇨", countryCode: "MC", lapTime: "1:12.617", trend: "up", points: 288, wins: 4, podiums: 10, championships: 0, starts: 145, placements: ["1st", "3rd", "2nd", "4th", "1st"] },
  { id: 4, name: "LEWIS HAMILTON", team: "FERRARI", number: "44", color: "#f00000", image: "/drivers/lewis-hamilton-png.png", carImage: "/media__1774517208136.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.583", trend: "down", points: 312, wins: 3, podiums: 11, championships: 7, starts: 350, placements: ["3rd", "2nd", "1st", "5th", "2nd"] },
  // MCLAREN
  { id: 5, name: "LANDO NORRIS", team: "MCLAREN", number: "1", color: "#ff8700", image: "/drivers/driver-3-png.png", carImage: "/media__1774517208136.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:10.891", trend: "up", points: 345, wins: 6, podiums: 14, championships: 1, starts: 120, placements: ["1st", "1st", "2nd", "1st", "3rd"] },
  { id: 6, name: "OSCAR PIASTRI", team: "MCLAREN", number: "81", color: "#ff8700", image: "/drivers/driver-6-png.png", carImage: "/media__1774517208136.png", flag: "🇦🇺", countryCode: "AU", lapTime: "1:11.123", trend: "up", points: 198, wins: 1, podiums: 5, championships: 0, starts: 44, placements: ["4th", "6th", "3rd", "2nd", "5th"] },
  // HAAS
  { id: 7, name: "ESTEBAN OCON", team: "HAAS F1 TEAM", number: "31", color: "#B6BABD", image: "/drivers/driver-2-png.png", carImage: "/media__1774517208136.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:14.111", trend: "down", points: 45, wins: 0, podiums: 0, championships: 0, starts: 150, placements: ["10th", "12th", "9th", "11th", "14th"] },
  { id: 8, name: "OLIVER BEARMAN", team: "HAAS F1 TEAM", number: "87", color: "#B6BABD", image: "/drivers/driver-1-png.png", carImage: "/media__1774517208136.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.444", trend: "up", points: 32, wins: 0, podiums: 0, championships: 0, starts: 22, placements: ["15th", "11th", "13th", "10th", "12th"] },
  // RED BULL
  { id: 9, name: "MAX VERSTAPPEN", team: "RED BULL RACING", number: "3", color: "#3671C6", image: "/drivers/max-verstappen-png.png", carImage: "/media__1774517208136.png", flag: "🇳🇱", countryCode: "NL", lapTime: "1:10.456", trend: "up", points: 320, wins: 8, podiums: 12, championships: 4, starts: 205, placements: ["2nd", "1st", "1st", "3rd", "2nd"] },
  { id: 10, name: "ISACK HADJAR", team: "RED BULL RACING", number: "6", color: "#3671C6", image: "/drivers/driver-4-png.png", carImage: "/media__1774517208136.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:11.888", trend: "up", points: 67, wins: 0, podiums: 0, championships: 0, starts: 18, placements: ["12th", "9th", "11th", "8th", "10th"] },
  // RACING BULLS
  { id: 11, name: "LIAM LAWSON", team: "RACING BULLS", number: "30", color: "#6692FF", image: "/drivers/driver-3-png.png", carImage: "/media__1774517208136.png", flag: "🇳🇿", countryCode: "NZ", lapTime: "1:13.555", trend: "up", points: 42, wins: 0, podiums: 0, championships: 0, starts: 15, placements: ["11th", "10th", "14th", "12th", "13th"] },
  { id: 12, name: "ARVID LINDBLAD", team: "RACING BULLS", number: "41", color: "#6692FF", image: "/drivers/driver-6-png.png", carImage: "/media__1774517208136.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.001", trend: "up", points: 12, wins: 0, podiums: 0, championships: 0, starts: 10, placements: ["18th", "15th", "20th", "17th", "16th"] },
  // ALPINE
  { id: 13, name: "PIERRE GASLY", team: "ALPINE", number: "10", color: "#0093cc", image: "/drivers/driver-2-png.png", carImage: "/media__1774517208136.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:13.123", trend: "up", points: 56, wins: 0, podiums: 0, championships: 0, starts: 130, placements: ["9th", "10th", "8th", "12th", "11th"] },
  { id: 14, name: "FRANCO COLAPINTO", team: "ALPINE", number: "43", color: "#0093cc", image: "/drivers/driver-3-png.png", carImage: "/media__1774517208136.png", flag: "🇦🇷", countryCode: "AR", lapTime: "1:14.001", trend: "up", points: 28, wins: 0, podiums: 0, championships: 0, starts: 12, placements: ["14th", "16th", "13th", "15th", "12th"] },
  // AUDI
  { id: 15, name: "NICO HULKENBERG", team: "AUDI", number: "27", color: "#f00000", image: "/drivers/driver-4-png.png", carImage: "/media__1774517208136.png", flag: "🇩🇪", countryCode: "DE", lapTime: "1:13.888", trend: "up", points: 38, wins: 0, podiums: 0, championships: 0, starts: 220, placements: ["10th", "9th", "11th", "13th", "12th"] },
  { id: 16, name: "GABRIEL BORTOLETO", team: "AUDI", number: "5", color: "#f00000", image: "/drivers/driver-6-png.png", carImage: "/media__1774517208136.png", flag: "🇧🇷", countryCode: "BR", lapTime: "1:14.222", trend: "up", points: 15, wins: 0, podiums: 0, championships: 0, starts: 10, placements: ["17th", "14th", "19th", "16th", "18th"] },
  // WILLIAMS
  { id: 17, name: "CARLOS SAINZ", team: "WILLIAMS", number: "55", color: "#64C4FF", image: "/drivers/driver-1-png.png", carImage: "/media__1774517208136.png", flag: "🇪🇸", countryCode: "ES", lapTime: "1:12.111", trend: "up", points: 142, wins: 0, podiums: 3, championships: 0, starts: 200, placements: ["5th", "7th", "6th", "4th", "8th"] },
  { id: 18, name: "ALEXANDER ALBON", team: "WILLIAMS", number: "23", color: "#64C4FF", image: "/drivers/driver-2-png.png", carImage: "/media__1774517208136.png", flag: "🇹🇭", countryCode: "TH", lapTime: "1:12.555", trend: "up", points: 76, wins: 0, podiums: 1, championships: 0, starts: 100, placements: ["12th", "9th", "11th", "10th", "14th"] },
  // CADILLAC
  { id: 19, name: "SERGIO PEREZ", team: "CADILLAC", number: "11", color: "#ffffff", image: "/drivers/driver-4-png.png", carImage: "/media__1774517208136.png", flag: "🇲🇽", countryCode: "MX", lapTime: "1:14.111", trend: "down", points: 112, wins: 0, podiums: 2, championships: 0, starts: 270, placements: ["6th", "8th", "7th", "5th", "9th"] },
  { id: 20, name: "VALTTERI BOTTAS", team: "CADILLAC", number: "77", color: "#ffffff", image: "/drivers/driver-5-png.png", carImage: "/media__1774517208136.png", flag: "🇫🇮", countryCode: "FI", lapTime: "1:14.999", trend: "down", points: 58, wins: 0, podiums: 0, championships: 0, starts: 230, placements: ["13th", "11th", "15th", "14th", "12th"] },
];

export const TEAMS = [
  { id: 1, name: "RED BULL RACING", color: "#3671C6" },
  { id: 2, name: "FERRARI", color: "#f00000" },
  { id: 3, name: "MCLAREN", color: "#FF8700" },
  { id: 4, name: "MERCEDES-AMG", color: "#27F4D2" },
  { id: 5, name: "ASTON MARTIN", color: "#229971" },
  { id: 6, name: "ALPINE", color: "#0093cc" },
  { id: 7, name: "WILLIAMS", color: "#64C4FF" },
  { id: 8, name: "RACING BULLS", color: "#6692FF" },
  { id: 9, name: "AUDI", color: "#f00000" },
  { id: 10, name: "HAAS F1 TEAM", color: "#B6BABD" },
  { id: 11, name: "CADILLAC", color: "#ffffff" },
];

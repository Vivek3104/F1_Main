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
  { id: 1, name: "GEORGE RUSSELL", team: "MERCEDES", number: "63", color: "#27F4D2", image: "/drivers/driver-5-png.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:11.234", trend: "up" },
  { id: 2, name: "KIMI ANTONELLI", team: "MERCEDES", number: "12", color: "#27F4D2", image: "/drivers/driver-6-png.png", flag: "🇮🇹", countryCode: "IT", lapTime: "1:12.456", trend: "up" },
  // FERRARI
  { id: 3, name: "CHARLES LECLERC", team: "FERRARI", number: "16", color: "#f00000", image: "/drivers/driver-1-png.png", flag: "🇲🇨", countryCode: "MC", lapTime: "1:12.617", trend: "up" },
  { id: 4, name: "LEWIS HAMILTON", team: "FERRARI", number: "44", color: "#f00000", image: "/drivers/lewis-hamilton-png.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.583", trend: "down" },
  // MCLAREN
  { id: 5, name: "LANDO NORRIS", team: "MCLAREN", number: "1", color: "#ff8700", image: "/drivers/driver-3-png.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:10.891", trend: "up" },
  { id: 6, name: "OSCAR PIASTRI", team: "MCLAREN", number: "81", color: "#ff8700", image: "/drivers/driver-6-png.png", flag: "🇦🇺", countryCode: "AU", lapTime: "1:11.123", trend: "up" },
  // HAAS
  { id: 7, name: "ESTEBAN OCON", team: "HAAS F1 TEAM", number: "31", color: "#B6BABD", image: "/drivers/driver-2-png.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:14.111", trend: "down" },
  { id: 8, name: "OLIVER BEARMAN", team: "HAAS F1 TEAM", number: "87", color: "#B6BABD", image: "/drivers/driver-1-png.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.444", trend: "up" },
  // RED BULL
  { id: 9, name: "MAX VERSTAPPEN", team: "RED BULL RACING", number: "3", color: "#3671C6", image: "/drivers/max-verstappen-png.png", flag: "🇳🇱", countryCode: "NL", lapTime: "1:10.456", trend: "up" },
  { id: 10, name: "ISACK HADJAR", team: "RED BULL RACING", number: "6", color: "#3671C6", image: "/drivers/driver-4-png.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:11.888", trend: "up" },
  // RACING BULLS
  { id: 11, name: "LIAM LAWSON", team: "RACING BULLS", number: "30", color: "#6692FF", image: "/drivers/driver-3-png.png", flag: "🇳🇿", countryCode: "NZ", lapTime: "1:13.555", trend: "up" },
  { id: 12, name: "ARVID LINDBLAD", team: "RACING BULLS", number: "41", color: "#6692FF", image: "/drivers/driver-6-png.png", flag: "🇬🇧", countryCode: "GB", lapTime: "1:14.001", trend: "up" },
  // ALPINE
  { id: 13, name: "PIERRE GASLY", team: "ALPINE", number: "10", color: "#0093cc", image: "/drivers/driver-2-png.png", flag: "🇫🇷", countryCode: "FR", lapTime: "1:13.123", trend: "up" },
  { id: 14, name: "FRANCO COLAPINTO", team: "ALPINE", number: "43", color: "#0093cc", image: "/drivers/driver-3-png.png", flag: "🇦🇷", countryCode: "AR", lapTime: "1:14.001", trend: "up" },
  // AUDI
  { id: 15, name: "NICO HULKENBERG", team: "AUDI", number: "27", color: "#f00000", image: "/drivers/driver-4-png.png", flag: "🇩🇪", countryCode: "DE", lapTime: "1:13.888", trend: "up" },
  { id: 16, name: "GABRIEL BORTOLETO", team: "AUDI", number: "5", color: "#f00000", image: "/drivers/driver-6-png.png", flag: "🇧🇷", countryCode: "BR", lapTime: "1:14.222", trend: "up" },
  // WILLIAMS
  { id: 17, name: "CARLOS SAINZ", team: "WILLIAMS", number: "55", color: "#64C4FF", image: "/drivers/driver-1-png.png", flag: "🇪🇸", countryCode: "ES", lapTime: "1:12.111", trend: "up" },
  { id: 18, name: "ALEXANDER ALBON", team: "WILLIAMS", number: "23", color: "#64C4FF", image: "/drivers/driver-2-png.png", flag: "🇹🇭", countryCode: "TH", lapTime: "1:12.555", trend: "up" },
  // CADILLAC
  { id: 19, name: "SERGIO PEREZ", team: "CADILLAC", number: "11", color: "#ffffff", image: "/drivers/driver-4-png.png", flag: "🇲🇽", countryCode: "MX", lapTime: "1:14.111", trend: "down" },
  { id: 20, name: "VALTTERI BOTTAS", team: "CADILLAC", number: "77", color: "#ffffff", image: "/drivers/driver-5-png.png", flag: "🇫🇮", countryCode: "FI", lapTime: "1:14.999", trend: "down" },
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

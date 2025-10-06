export const fetchCompanies = async () => {
  return [
    {
      id: 1,
      name: "Microsoft",
      industry: "Technology",
      location: "Redmond, WA",
      employees: "220,000",
      founded: "1975",
      website: "https://www.microsoft.com",
      description: "Microsoft develops, manufactures, licenses, supports and sells software products."
    },
    {
      id: 2,
      name: "Google",
      industry: "Technology",
      location: "Mountain View, CA",
      employees: "190,000",
      founded: "1998",
      website: "https://www.google.com",
      description: "Google is a multinational technology company specializing in Internet-related services."
    },
    {
      id: 3,
      name: "Tesla",
      industry: "Automotive",
      location: "Palo Alto, CA",
      employees: "100,000",
      founded: "2003",
      website: "https://www.tesla.com",
      description: "Tesla designs, develops, manufactures, and sells electric vehicles and energy storage products."
    }
    // Add more companies
  ];
};

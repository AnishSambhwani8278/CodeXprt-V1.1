export interface Booking {
  bookingId: string;
  professionalName: string;
  meetingTime: string;
  orderId: string;
  charges: number;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  open_issues_count: number;
  topics: string[];
  issues?: Issue[];
}

export interface Issue {
  id: number;
  title: string;
  html_url: string;
  labels: Label[];
}

export interface Label {
  id: number;
  name: string;
  color: string;
}

export interface SearchFilters {
  skills: string[];
  projectType: string;
}

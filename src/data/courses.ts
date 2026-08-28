export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  color: string;
}

export const courses: Course[] = [
  {
    id: "google-mail",
    title: "Google Mail",
    description: "Send, receive, and manage emails efficiently with Gmail's powerful features.",
    image: "/images/courses/google-mail.jpg",
    logo: "gmail",
    color: "#EA4335",
  },
  {
    id: "google-docs",
    title: "Google Docs",
    description: "Create, edit, and collaborate on documents in real time with Google Docs.",
    image: "/images/courses/google-docs.jpg",
    logo: "gdocs",
    color: "#4285F4",
  },
  {
    id: "google-forms",
    title: "Google Forms",
    description: "Design and distribute forms, surveys, and quizzes with Google Forms.",
    image: "/images/courses/google-forms.jpg",
    logo: "gforms",
    color: "#34A853",
  },
  {
    id: "google-meet",
    title: "Google Meet",
    description: "Host secure video meetings and collaborate with teams on Google Meet.",
    image: "/images/courses/google-meet.jpg",
    logo: "gmeet",
    color: "#1A73E8",
  },
  {
    id: "google-drive",
    title: "Google Drive",
    description: "Store, organize, and share files securely with Google Drive cloud storage.",
    image: "/images/courses/google-drive.jpg",
    logo: "gdrive",
    color: "#167AC6",
  },
  {
    id: "trello",
    title: "Trello",
    description: "Organize projects and track progress visually using Trello boards and cards.",
    image: "/images/courses/trello.jpg",
    logo: "trello",
    color: "#0079BF",
  },
  {
    id: "google-calendar",
    title: "Google Calendar",
    description: "Plan your schedule, set reminders, and share calendars with Google Calendar.",
    image: "/images/courses/google-calendar.jpg",
    logo: "gcal",
    color: "#34A853",
  },
  {
    id: "google-sheets",
    title: "Google Sheets",
    description: "Analyze data, create spreadsheets, and build charts with Google Sheets.",
    image: "/images/courses/google-sheets.jpg",
    logo: "gsheets",
    color: "#34A853",
  },
  {
    id: "google-keep",
    title: "Google Keep",
    description: "Capture ideas, notes, and to-do lists quickly with Google Keep.",
    image: "/images/courses/google-keep.jpg",
    logo: "gkeep",
    color: "#F9AB00",
  },
];

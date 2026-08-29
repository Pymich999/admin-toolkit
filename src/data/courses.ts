export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const courses: Course[] = [
  {
    id: "google-mail",
    title: "Google Mail",
    description: "Send, receive, and manage emails efficiently with Gmail's powerful features.",
    image: "/images/courses/vecteezy_google-mail-gmail-icon-logo-symbol_22484516.png",
    color: "#EA4335",
  },
  {
    id: "google-docs",
    title: "Google Docs",
    description: "Create, edit, and collaborate on documents in real time with Google Docs.",
    image: "/images/courses/vecteezy_google-docs-icon-logo-symbol_27179392.png",
    color: "#4285F4",
  },
  {
    id: "google-forms",
    title: "Google Forms",
    description: "Design and distribute forms, surveys, and quizzes with Google Forms.",
    image: "/images/courses/vecteezy_google-form-icon-logo-symbol_27179358.png",
    color: "#34A853",
  },
  {
    id: "google-meet",
    title: "Google Meet",
    description: "Host secure video meetings and collaborate with teams on Google Meet.",
    image: "/images/courses/vecteezy_google-meet-gmeet-icon-logo-symbol_22484498.png",
    color: "#1A73E8",
  },
  {
    id: "google-drive",
    title: "Google Drive",
    description: "Store, organize, and share files securely with Google Drive cloud storage.",
    image: "/images/courses/vecteezy_google-drive-icon-logo-symbol_22484494.png",
    color: "#167AC6",
  },
  {
    id: "trello",
    title: "Trello",
    description: "Organize projects and track progress visually using Trello boards and cards.",
    image: "/images/courses/trello-svgrepo-com.png",
    color: "#0079BF",
  },
  {
    id: "google-calendar",
    title: "Google Calendar",
    description: "Plan your schedule, set reminders, and share calendars with Google Calendar.",
    image: "/images/courses/vecteezy_google-calendar-icon-logo-symbol_22613020.png",
    color: "#34A853",
  },
  {
    id: "google-sheets",
    title: "Google Sheets",
    description: "Analyze data, create spreadsheets, and build charts with Google Sheets.",
    image: "/images/courses/vecteezy_google-sheets-apps-logo_17396799.png",
    color: "#34A853",
  },
  {
    id: "google-keep",
    title: "Google Keep",
    description: "Capture ideas, notes, and to-do lists quickly with Google Keep.",
    image: "/images/courses/vecteezy_google-keep-icon-logo-symbol_27179352.png",
    color: "#F9AB00",
  },
  {
    id: "cline",
    title: "Cline",
    description: "Use AI assistance to plan tasks, edit files, and speed up workflows.",
    image: "/images/courses/cline.png",
    color: "#170626",
  },
];

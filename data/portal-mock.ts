export interface Project {
  id: string;
  name: string;
  service: string;
  status: "In Progress" | "Review" | "Completed";
  progress: number;
  startDate: string;
  deadline: string;
  description: string;
  milestones: { label: string; done: boolean }[];
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  description: string;
  amount: number;
  status: "Paid" | "Unpaid" | "Overdue";
  lineItems: { description: string; qty: number; unitPrice: number }[];
  clientName: string;
  clientCompany: string;
  clientAddress: string;
}

export interface Report {
  id: string;
  name: string;
  month: string;
  uploaded: string;
  type: string;
}

export interface Message {
  id: string;
  from: "client" | "digibly";
  content: string;
  timestamp: string;
}

export const mockProjects: Project[] = [
  {
    id: "proj-001",
    name: "Website Redesign",
    service: "Web Design & Development",
    status: "In Progress",
    progress: 65,
    startDate: "1 Apr 2026",
    deadline: "30 May 2026",
    description: "Complete redesign and rebuild of the company website using Next.js.",
    milestones: [
      { label: "Discovery & Brief", done: true },
      { label: "Design Concepts", done: true },
      { label: "Development", done: false },
      { label: "Review & Revisions", done: false },
      { label: "Launch", done: false },
    ],
  },
  {
    id: "proj-002",
    name: "Google Ads Campaign",
    service: "Digital Marketing",
    status: "In Progress",
    progress: 80,
    startDate: "1 Mar 2026",
    deadline: "31 May 2026",
    description: "Ongoing Google Ads management targeting key service areas.",
    milestones: [
      { label: "Account Setup", done: true },
      { label: "Keyword Strategy", done: true },
      { label: "Campaign Launch", done: true },
      { label: "Optimisation", done: false },
      { label: "Monthly Review", done: false },
    ],
  },
  {
    id: "proj-003",
    name: "Brand Identity Package",
    service: "Brand Identity",
    status: "Completed",
    progress: 100,
    startDate: "1 Feb 2026",
    deadline: "28 Feb 2026",
    description: "Complete brand identity including logo, colours, and guidelines.",
    milestones: [
      { label: "Brand Discovery", done: true },
      { label: "Concept Presentation", done: true },
      { label: "Refinement", done: true },
      { label: "Final Delivery", done: true },
    ],
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: "inv-001",
    number: "DG-2026-001",
    date: "1 Apr 2026",
    dueDate: "15 Apr 2026",
    description: "Website Redesign — 50% Deposit",
    amount: 649.5,
    status: "Paid",
    clientName: "Alex Johnson",
    clientCompany: "Demo Company Pty Ltd",
    clientAddress: "1 Example Street, Canberra ACT 2601",
    lineItems: [
      { description: "Website Redesign Project — 50% Deposit", qty: 1, unitPrice: 649.5 },
    ],
  },
  {
    id: "inv-002",
    number: "DG-2026-002",
    date: "1 May 2026",
    dueDate: "15 May 2026",
    description: "Digital Marketing Retainer — May 2026",
    amount: 699,
    status: "Unpaid",
    clientName: "Alex Johnson",
    clientCompany: "Demo Company Pty Ltd",
    clientAddress: "1 Example Street, Canberra ACT 2601",
    lineItems: [
      { description: "Google Ads Management — May 2026", qty: 1, unitPrice: 599 },
      { description: "Monthly Analytics Report", qty: 1, unitPrice: 100 },
    ],
  },
  {
    id: "inv-003",
    number: "DG-2026-003",
    date: "1 Mar 2026",
    dueDate: "15 Mar 2026",
    description: "Brand Identity Package — Final Payment",
    amount: 449.5,
    status: "Overdue",
    clientName: "Alex Johnson",
    clientCompany: "Demo Company Pty Ltd",
    clientAddress: "1 Example Street, Canberra ACT 2601",
    lineItems: [
      { description: "Brand Identity Package — Remaining Balance", qty: 1, unitPrice: 449.5 },
    ],
  },
];

export const mockReports: Report[] = [
  { id: "rep-001", name: "Digital Marketing Performance", month: "April 2026", uploaded: "2 May 2026", type: "Marketing" },
  { id: "rep-002", name: "Website Analytics Summary", month: "April 2026", uploaded: "2 May 2026", type: "Analytics" },
  { id: "rep-003", name: "Digital Marketing Performance", month: "March 2026", uploaded: "1 Apr 2026", type: "Marketing" },
  { id: "rep-004", name: "Website Analytics Summary", month: "March 2026", uploaded: "1 Apr 2026", type: "Analytics" },
];

export const mockMessages: Message[] = [
  {
    id: "msg-001",
    from: "digibly",
    content: "Hi Alex, welcome to the Digibly Group client portal. This is where we'll keep you updated on project progress and share reports. Feel free to send us a message here anytime.",
    timestamp: "1 Apr 2026, 9:15 AM",
  },
  {
    id: "msg-002",
    from: "client",
    content: "Thank you! Looking forward to working together. Could you confirm the expected launch date for the website?",
    timestamp: "1 Apr 2026, 10:32 AM",
  },
  {
    id: "msg-003",
    from: "digibly",
    content: "We're targeting 30 May 2026 for launch, subject to the review process going smoothly. We'll send you the first design concepts by next Friday.",
    timestamp: "1 Apr 2026, 11:05 AM",
  },
];

export const mockClient = {
  name: "Alex Johnson",
  email: "admin@digiblygroup.com.au",
  company: "Demo Company Pty Ltd",
  phone: "+61 400 000 000",
};

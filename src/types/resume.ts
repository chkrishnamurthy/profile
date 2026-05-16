export interface SocialLink {
  label: string;
  href: string;
}

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface ExperienceItem {
  company: string;
  location?: string;
  period: string;
  roles: Role[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  href?: string;
}

export interface ResumeData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  projects: Project[];
  interests: string[];
}

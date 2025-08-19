export enum EducationCategory {
  CERTIFICATIONS = 'Certifications',
  GENERAL = 'General',
}

export type EducationType = {
  category: EducationCategory;
  school: string;
  date: string;
  logoPath: string;
  websiteLink: string;
  degree?: string;
  certificateLink?: string;
};

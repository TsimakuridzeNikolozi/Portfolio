export enum EducationCategory {
  CERTIFICATIONS = 'Certifications',
  EDUCATION = 'Education',
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

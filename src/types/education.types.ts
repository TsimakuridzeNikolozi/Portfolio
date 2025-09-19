export enum EducationCategory {
  CERTIFICATIONS = 'Certifications',
  EDUCATION = 'Education',
}

export type EducationType = {
  category: EducationCategory;
  school: string;
  logoPath: string;
  websiteLink: string;
  date?: string;
  degree?: string;
  certificateLink?: string;
};

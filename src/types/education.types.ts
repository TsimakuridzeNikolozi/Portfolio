export enum EducationCategory {
  GENERAL = 'General',
  CERTIFICATIONS = 'Certifications',
}

export type EducationType = {
  category: EducationCategory;
  school: string;
  date: string;
  logoPath: string;
  borderColor: string;
  degree?: string;
  certificateLink?: string;
};

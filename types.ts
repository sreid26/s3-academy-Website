
export type PageId = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'basketball' 
  | 'admissions' 
  | 'faculty' 
  | 'alumni' 
  | 'donate' 
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  type: 'faculty' | 'coach';
}

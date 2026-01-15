export type UserRole = 'admin' | 'client' | 'subcontractor';
export type CompanyType = 'contractor' | 'gc' | 'homeowner';
export type ProjectStatus = 'active' | 'completed' | 'on_hold';
export type DocumentType = 'WSIB' | 'ESA' | 'permit' | 'insurance' | 'rebate';
export type DocumentStatus = 'pending' | 'active' | 'expired' | 'renewed';
export type SubmissionAuthority = 'WSIB' | 'ESA' | 'city' | 'rebate_program' | 'insurance';
export type SubmissionStatus = 'pending' | 'submitted' | 'approved' | 'rejected' | 'requires_revision';
export type AuthorizationStatus = 'pending' | 'signed' | 'expired';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  company_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  name: string;
  type: CompanyType;
  jurisdiction: string;
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  address: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  company_id: string;
  address: string;
  status: ProjectStatus;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Document {
  id: string;
  project_id: string;
  type: DocumentType;
  name: string;
  expiry_date: string | null;
  status: DocumentStatus;
  file_url: string | null;
  file_name: string | null;
  file_size: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  document_id: string | null;
  project_id: string;
  authority: SubmissionAuthority;
  submitted_by: string | null;
  submission_date: string;
  status: SubmissionStatus;
  reference_number: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Authorization {
  id: string;
  company_id: string | null;
  homeowner_id: string | null;
  scope: string;
  signed_at: string | null;
  file_url: string | null;
  file_name: string | null;
  status: AuthorizationStatus;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

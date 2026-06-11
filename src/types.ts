/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'INDEX' | 'BIOGRAPHY' | 'SERVICES' | 'CONTACT';

export interface StatItem {
  value: string;
  label: string;
}

export interface PhilosophyItem {
  id: string;
  category: string;
  quote: string;
  author: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export interface PublicationItem {
  journal: string;
  title: string;
  year: string;
}

export interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  recovery: string;
  beforeImage: string;
  afterImage: string;
}

export interface BookingForm {
  fullName: string;
  email: string;
  telephone: string;
  clinic: string;
  procedure: string;
  message: string;
}

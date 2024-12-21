export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  schedule: ScheduleItem[];
  image?: string;
  additionalInfo?: string;
}

export interface ScheduleItem {
  time: string;
  description: string;
}

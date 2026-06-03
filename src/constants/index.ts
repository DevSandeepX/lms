import { UserRole, CourseStatus, ChapterStatus } from '../generated/prisma/enums';

export const USER_ROLES = Object.values(UserRole);
export const COURSE_STATUSES = Object.values(CourseStatus);
export const CHAPTER_STATUSES = Object.values(ChapterStatus);
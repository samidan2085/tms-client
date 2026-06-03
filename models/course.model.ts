import { Temporal } from "@js-temporal/polyfill";
export interface Course {
readonly id: string;
title: string;
capacity: number;
startDate?: Temporal.PlainDate;
}
export type CourseStatus =
| { status: "DRAFT"; createdBy: string; createdAt: Temporal.Instant }
| { status: "PUBLISHED"; publishedAt: Temporal.Instant; syllabus: string }
| {
status: "ACTIVE";
enrolledCount: number;
startDate: Temporal.PlainDate;
}
| {
status: "ARCHIVED";
archivedAt: Temporal.Instant;
finalEnrollmentCount: number;
}
| { status: "CANCELLED"; reason: string; cancelledAt: Temporal.Instant };

export function describeCourse(status: CourseStatus): string {
    switch (status.status) {
        case "DRAFT":
            return `Draft course created by ${status.createdBy}`;
        case "PUBLISHED":
            return `Published course with syllabus`;
        case "ACTIVE":
            return `Active course with ${status.enrolledCount} enrolled students`;
        case "ARCHIVED":
            return `Archived course with final enrollment count of ${status.finalEnrollmentCount}`;
        case "CANCELLED":
            return `Cancelled course. Reason: ${status.reason}`;
        default:
            const _exhaustiveCheck: never = status;
            return _exhaustiveCheck;
    }
    

}
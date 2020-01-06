import { Company } from './company';
import {EmploymentType} from './employment_type';
import {JobFunction} from './job_fucntion';
import {FirebaseCrudService} from '../services/firebase-crud.service';

export interface InternshipInterface {
    title: string;
    description: string;
}

export class Internship {
    public id?: string;
    public title?: string;
    public company?: Company;
    public timePosted?: number;
    public numberApplicants?: number;
    public description?: string;
    public industry?: string;
    public employment_type?: EmploymentType;
    public job_functions?: Array<JobFunction>;
    public qualifications?: string;
    public summary?: string;
    public education_experience?: string;

    constructor(params: Internship = {} as Internship) {
        let {
            id = '',
            title = '',
            company =  new Company(),
            timePosted = 0,
            numberApplicants = 0,
            description = "",
            industry = "",
            employment_type = EmploymentType['full-time'],
            job_functions = [JobFunction.Engineering],
            qualifications = '',
            summary = 'summary',
            education_experience = ''
        } = params;

        this.id = id;
        this.title = title;
        this.company = company;
        this.timePosted = timePosted;
        this.numberApplicants = numberApplicants;
        this.description = description;
        this.industry = industry;
        this.employment_type = employment_type;
        this.job_functions = job_functions;
        this.qualifications = qualifications;
        this.summary = summary;
        this.education_experience = education_experience;
    }

}
